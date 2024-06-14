<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('participants', function (Blueprint $table) {
            $table -> string('id') -> primary();
            $table -> string('chat_id');
            $table -> string('user_id');
            $table -> timestamps();

            $table -> foreign('chat_id') -> references('id') -> on('chats')
                -> cascadeOnUpdate()
                -> cascadeOnDelete();
            $table -> foreign('user_id') -> references('id') -> on('users')
                -> cascadeOnUpdate()
                -> cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participants');
    }
};
