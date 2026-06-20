<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('support_form_requests', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')
                ->index()
                ->nullable()
                ->noActionOnDelete();
            $table->text("text");
            $table->string("subject")->index();
            $table->string("contact_email")->nullable();
            $table->unsignedInteger('status')->default(0);
            $table->boolean("using_personal_data")->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_form_requests');
    }
};
