<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    $user = \App\Models\User::create([
        'name' => 'John Doe',
        'email' => 'john@doe.com',
        'password' => '123456789',
    ]);

    // dd($user);

    return response() -> json($user["name"]);
});