<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('published_at')->nullable();
            $table->boolean('is_published')->default(false);
            $table->string('title');
            $table->longText('content');
            $table->string('short_description');
            $table->smallInteger('status')->default(0);
            $table->foreignId('user_id')
                ->constrained("users", "id")
                ->nullOnDelete();

            // = данные для отслеживания пользователя =
            $table->ipAddress('editor_ip')->nullable();
            $table->string('device_type', 20)->nullable(); // mobile, desktop, tablet, bot ...
            $table->string('browser_name', 50)->nullable(); // Chrome, Safari, Firefox ...
            $table->string('os_name', 50)->nullable();      // Windows, iOS, Android ...

            // == данные, которые фронтенд передает вручную (опционально) ==
            $table->string('screen_resolution', 15)->nullable(); // "1920x1080", "390x844"
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
