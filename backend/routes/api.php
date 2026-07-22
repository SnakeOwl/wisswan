<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/test', function (Request $request) {
    info("API is working");
    return 'API is working';
});

Route::get('/login', function (Request $request) {
    // TODO: можно же вроде либо перехватывать исключение, либо вообще отключить его генерацию.
    return redirect('/login');
})->name('login');


// FIX: require_once не ставить, иначе в тестах пути не подхватывает
require __DIR__ . "/feed.php";
require __DIR__ . "/utils.php";
require __DIR__ . "/user.php";
require __DIR__ . "/admin.php";

require __DIR__ . "/webhooks.php";
require __DIR__ . "/passport.php";

