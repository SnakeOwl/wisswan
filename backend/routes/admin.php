<?php

use App\Http\Controllers\Admin\DomainsController;
use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;



Route::middleware(['user_access:admin', 'auth:api'])
    ->prefix('admin')
    ->group(function () {
        Route::apiResource('users', UsersController::class)
            ->except('store', 'update');

        Route::apiResource('domains', DomainsController::class)
            ->except('store', 'update', 'show');
        Route::post('domains/{domain}', [DomainsController::class, 'update']); // POST for images
    });
