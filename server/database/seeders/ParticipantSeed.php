<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParticipantSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(string $user_id, string $chat_id): void
    {
        \App\Models\Participant::create([
            'user_id' => $user_id,
            'chat_id' => $chat_id,
        ]);
    }
}
