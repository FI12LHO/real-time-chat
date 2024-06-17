<?php

namespace App\Http\Controllers;

use App\Models\Invite;
use App\Models\Participant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ParticipantController extends Controller
{
    public function invite(Request $request, ?string $invite = '')
    {
        if ($invite == '') {
            return view('invite');
        }

        $chat = Invite::getChatWithInvitation($invite);

        if (!isset($chat)) {
            return view('invite');
        }

        return view('invite', [
            'id' => $chat -> chat_id,
            'name' => $chat -> chat_name,
            'invite' => $invite,
        ]);
    }

    public function join(Request $request)
    {
        $request -> validate([
            'chat_id' => 'string|required',
            'invite' => 'string|required',
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request -> only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response() -> json([
                'status' => 'fail',
                'error' => 'Unauthenticated user',
                'message' => 'You need to be authenticated to use this invitation',
            ], 401);
        }

        $user = $request -> user();
        if ($user == null) {
            return response() -> json([
                'status' => 'fail',
                'error' => 'Unauthenticated user',
                'message' => 'You need to be authenticated to use this invitation',
            ], 401);
        }

        $participant = Participant::create([
            'user_id' => $user['id'],
            'chat_id' => $request -> input('chat_id'),
        ]);
        if (!$participant) {
            response() -> json([
                'status' => 'fail',
                'message' => 'An error occurred when trying to join this room',
            ], 500);
        }

        Auth::logout();

        return response() -> json([
            'status' => 'success',
            'message' => 'Successfully joined the room',
        ]);
    }
}
