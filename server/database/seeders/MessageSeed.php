<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(string $message, string $date, string $chat_id, string $user_id): void
    {
        \App\Models\Message::create([
            'message' => $message,
            'date' => $date,
            'chat_id' => $chat_id,
            'user_id' => $user_id,
        ]);
    }
}
