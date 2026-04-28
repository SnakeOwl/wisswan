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
        Schema::table('telegram_chats', function (Blueprint $table) {
            $table->dropUnique(['chat_id']); // сначала удаляем unique.
            $table->dropUnique(['user_name']); // сначала удаляем unique.
            $table->unsignedInteger('chat_id')->nullable()->unique()->change(); 
            $table->string('user_name')->nullable()->unique()->index()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Боюсь что роллбек упадёт если будут записи с chat_id = null;
        // Schema::table('telegram_chats', function (Blueprint $table) {
            // $table->unsignedInteger('chat_id')->nullable(false)->unique()->change();
            // $table->string('user_name')->nullable(false)->unique()->index()->change();
        // });
    }
};
