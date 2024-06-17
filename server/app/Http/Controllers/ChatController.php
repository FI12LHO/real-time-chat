<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Participant;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        $user = $request -> user();
        $chats = Participant::getAllMyChats($user['id']);

        return response() -> json($chats);
    }

    public function create(Request $request)
    {
        $request -> validate([
            'name' => 'string|required',
        ]);

        $user = $request -> user();
        $chat = Chat::create([
            'name' => $request -> input('name'),
            'owner_id' => $user['id']
        ]);

        if (!$chat) {
            response() -> json([
                'status' => 'fail',
                'message' => 'An error occurred when trying to create the chat room'
            ], 500);
        }

        Participant::create([
            'chat_id' => $chat['id'],
            'user_id' => $user['id'],
        ]);

        return response() -> json([
            'status' => 'success',
            'message' => 'Successful chat room',
            'chat' => $chat,
        ]);
    }
}
