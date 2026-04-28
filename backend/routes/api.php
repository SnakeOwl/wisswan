<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/test', function (Request $request) {
    return 'API is working';
});


// FIX: require_once не ставить, иначе в тестах пути не подхватывает
require __DIR__ . "/feed.php";
require __DIR__ . "/utils.php";
require __DIR__ . "/user.php";
require __DIR__ . "/admin.php";

require __DIR__ . "/webhooks.php";

