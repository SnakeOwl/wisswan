<?php

namespace App\Http\Controllers\User\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;

class LogoutController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = $request->user();

        $tokenIds = $user->tokens->pluck('id');

        // 1. Аннулируем все access token'ы
        Token::whereIn('id', $tokenIds)->update(['revoked' => true]);

        // 2. Аннулируем все refresh token'ы, связанные с этими access token'ами
        RefreshToken::whereIn('access_token_id', $tokenIds)->update(['revoked' => true]);

        return response()->json(['message' => 'success logout']);
    }
}
