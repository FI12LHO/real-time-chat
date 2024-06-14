<?php

use App\Events\MessageSentEvent;
use App\Http\Controllers\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix' => 'message'], function () {
    Route::post('/', [MessageController::class, 'index']);
    Route::post('/send', [MessageController::class, 'store']);
    Route::post('/test', function () {
        event(new MessageSentEvent('John Doe', 'Hi', '14/06/2024 14:44'));
        return response() -> json();
    });
});
