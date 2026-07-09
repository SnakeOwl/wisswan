<?php

use App\Http\Controllers\Feedback\SupportFormRequestController;
use Illuminate\Support\Facades\Route;


// access only for creating
Route::post('feedbacks/support-form-requests/', [SupportFormRequestController::class, 'store']);