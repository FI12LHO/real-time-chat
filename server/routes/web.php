<?php

use App\Http\Controllers\ParticipantController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'invite'], function () {
    Route::get('/{invite?}', [ParticipantController::class, 'invite']);
    Route::post('/join', [ParticipantController::class, 'join']) -> name('participants.join');
});