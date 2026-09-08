<?php

use App\Http\Controllers\Feed\GetDomainsController;
use App\Http\Controllers\Feed\PostsController;
use Illuminate\Support\Facades\Route;

Route::prefix('feed')
    ->group(function () {
        Route::get('domains', GetDomainsController::class);
        Route::get('posts', [PostsController::class, "index"]);
        Route::get('posts/{post_id}', [PostsController::class, "show"]);
    });