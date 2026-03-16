<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

class LoginRequestTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $email = 'WalterWhite@google.com';

        // 1. Имитируем POST запрос к API
        $response = $this->postJson('/api/login-email', [
            'email' => $email
        ]);

        // 2. Проверяем статус ответа (200 или 201)
        $response->assertStatus(200)
            ->assertJson(['success' => true]);

        // 3. Достаем пользователя из базы
        $user = \App\Models\User::where('email', $email)->first();

        // Проверяем, что пользователь вообще создался
        $this->assertNotNull($user, 'Пользователь не был создан в базе данных.');

        // 4. Проверяем наличие записи в user_login_codes по user_id
        $this->assertDatabaseHas('user_login_codes', [
            'user_id' => $user->id,
        ]);

        // Дополнительно можно проверить, что код "свежий"
        $loginCode = \App\Models\UserLoginCode::where('user_id', $user->id)->first();
        $this->assertNotNull($loginCode->code);
    }
}
