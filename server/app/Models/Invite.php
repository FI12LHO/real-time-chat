<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Invite extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'invites';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'chat_id',
        'chat_name',
        'invite',
    ];

    public static function getChatWithInvitation(string $invite)
    {
        $chat = DB::table('invites')
            -> where('invites.invite', '=', $invite)
            -> leftJoin('chats', 'invites.chat_id', '=', 'chats.id')
            -> first();

        return $chat;
    }
}
