<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\JwtAuth;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix' => 'message', 'middleware' => JwtAuth::class], function () {
    Route::post('/{chat_id}', [MessageController::class, 'index']);
    Route::post('/send/{chat_id}', [MessageController::class, 'store']);
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('/register', [AuthController::class, 'register']) -> name('register');
    Route::post('/login', [AuthController::class, 'login']) -> name('login');
    Route::post('/logout', [AuthController::class, 'logout']) -> middleware(JwtAuth::class) -> name('logout');
    Route::post('/me', [AuthController::class, 'me']) -> middleware(JwtAuth::class) -> name('me');
});

Route::group(['middleware' => JwtAuth::class, 'prefix' => 'chat'], function () {
    Route::post('/', [ChatController::class, 'index']) -> name('chat.index');
    Route::post('/create', [ChatController::class, 'create']) -> name('chat.create');
});