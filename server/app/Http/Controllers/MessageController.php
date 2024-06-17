<?php

namespace App\Http\Controllers;

use App\Events\MessageSentEvent;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(string $chat_id)
    {
        $messages = \App\Models\Message::getAllData($chat_id);
        return response() -> json($messages);
    }

    public function store(Request $request)
    {
        $request -> validate([
            'author' => 'string|required',
            'message' => 'string|required',
            'date' => 'string|required',
            'user_id' => 'string|required',
            'chat_id' => 'string|required',
        ]);

        $credentials = [
            'message' => $request -> input('message'),
            'date' => $request -> input('date'),
            'user_id' => $request -> input('user_id'),
            'chat_id' => $request -> input('chat_id'),
        ];

        $message = \App\Models\Message::create($credentials);
        
        if (!isset($message)) {
            // Em caso de erro
            return response() -> json([
                'status' => 'fail',
                'message' => 'Failure when sending the message',
            ]);
        }

        // Disparando evento
        event(new MessageSentEvent($credentials['message']));

        return response() -> json([
            'status' => 'success',
            'message' => 'message sent',
        ]);
    }
}
