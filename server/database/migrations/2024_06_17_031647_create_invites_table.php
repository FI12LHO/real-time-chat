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
        Schema::create('invites', function (Blueprint $table) {
            $table -> id();
            $table -> string('chat_name');
            $table -> string('chat_id');
            $table -> string('invite');
            $table -> timestamps();

            $table -> foreign('chat_id') -> references('id') -> on('chats')
                -> cascadeOnDelete()
                -> cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invites');
    }
};
