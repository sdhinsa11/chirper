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
        Schema::create('chirps', function (Blueprint $table) {
            $table->id(); // auto-incrementing ID
            $table->foreignId('user_id')->nullable()->constrained()->cascadeOnDelete(); // links each chirp to a user and nullable makes the user_id optional and creates a foreign key constraint which is deleted if the user is deleted
            $table->string('message', 255); // chirp text 
            $table->timestamps(); // timestamp of the chirp 
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
