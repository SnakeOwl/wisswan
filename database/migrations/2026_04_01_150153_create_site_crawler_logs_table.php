<?php

use App\Models\SiteCrawler;
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
        Schema::create('site_crawler_logs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(SiteCrawler::class)
                ->constrained()
                ->cascadeOnDelete(); // Adds the ON DELETE CASCADE action;
            $table->unsignedInteger('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_crawler_logs');
    }
};
