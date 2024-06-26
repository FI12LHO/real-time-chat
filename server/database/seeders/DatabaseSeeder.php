<?php

namespace Database\Seeders;

use App\Models\Invite;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        UserSeed::run('user-1', "Jane Doe", "jane@doe.com", "123456789");
        UserSeed::run('user-2', "John Doe", "john@doe.com", "123456789");

        ChatSeed::run('chat-1', "Familia", 'user-1');

        ParticipantSeed::run('user-1', 'chat-1');
        ParticipantSeed::run('user-2', 'chat-1');

        /*
        for($i = 1; $i <= 10; $i ++) {
            $user_id = Str::random(8);
            $chat_id = Str::random(8);

            //
            UserSeed::run($user_id, "JohnDoe_$i", "john$i@doe.com", "123456789");
            ChatSeed::run($chat_id, "Chat $i", $user_id);
            ParticipantSeed::run($user_id, $chat_id);
            MessageSeed::run("Hello World!! - $i", '14-06-2024 13:27', $chat_id, $user_id);

            //
            ParticipantSeed::run('user-1', $chat_id);
            MessageSeed::run("Hello World!!", '14-06-2024 13:27', $chat_id, 'user-1');
        }
        */
    }
}
