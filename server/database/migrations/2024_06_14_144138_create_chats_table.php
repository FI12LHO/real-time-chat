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
        Schema::create('chats', function (Blueprint $table) {
            $table -> string('id') -> primary();
            $table -> string('name');
            $table -> string('owner_id');
            $table->timestamps();

            $table -> foreign('owner_id') -> references('id') -> on('users')
                -> cascadeOnUpdate()
                -> cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chats');
    }
};
