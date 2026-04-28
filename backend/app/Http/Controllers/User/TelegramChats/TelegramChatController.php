<?php

namespace App\Http\Controllers\User\TelegramChats;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\TelegramChat\TelegramChatAccessRequest;
use App\Http\Requests\User\TelegramChat\TelegramChatStoreRequest;
use App\Http\Requests\User\TelegramChat\TelegramChatUpdateRequest;
use App\Models\TelegramChat;
use Illuminate\Http\Request;

class TelegramChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $chat = $user->telegram_chats()->first();

        if ($chat == null)
            return response(null, 404);
        

        return ($chat);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TelegramChatStoreRequest $request)
    {
        $params = $request->validated();
        $user = $request->user();

        $chat = $user->telegram_chats()->create($params)->refresh();

        return $chat;
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(TelegramChatUpdateRequest $request, TelegramChat $telegram_chat)
    {
        $params = $request->validated();

        $telegram_chat->update($params);

        return $telegram_chat;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TelegramChatAccessRequest $request, TelegramChat $telegram_chat)
    {
        return $telegram_chat->delete();
    }
}
