<?php

use App\Http\Controllers\Feed\GetDomainsController;
use Illuminate\Support\Facades\Route;

Route::prefix('feed')
    ->group(function () {
        Route::get('domains', GetDomainsController::class);
    });