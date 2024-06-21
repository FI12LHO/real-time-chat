<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Message extends Model
{
    use HasFactory, HasUuids;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'messages';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The data type of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'message',
        'date',
        'chat_id',
        'user_id',
    ];

    public static function getAllData(string $chat_id): \Illuminate\Support\Collection
    {
        return DB::table('messages')
            -> where('chat_id', '=', $chat_id) 
            -> leftJoin('users', 'messages.user_id', '=', 'users.id')
            -> get();
    }

    public static function countMessages() : int
    {
        return DB::table('messages') -> count();
    }
}
