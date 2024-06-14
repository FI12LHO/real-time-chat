<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(string $id, string $name, string $owner_id): void
    {
        \App\Models\Chat::create([
            'id' => $id,
            'name' => $name,
            'owner_id' => $owner_id,
        ]);
    }
}
