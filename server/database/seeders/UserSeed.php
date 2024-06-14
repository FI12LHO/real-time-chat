<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(string $id, string $name, string $email, string $password): void
    {
        \App\Models\User::create([
            'id' => $id,
            'name' => $name,
            'email' => $email,
            'password' => $password,
        ]);
    }
}
