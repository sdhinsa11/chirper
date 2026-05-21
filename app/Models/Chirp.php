<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chirp extends Model
{
    //
    protected $fillable = [
    // 'user_id',
    'message',
    ];

    public function user(): BelongsTo
    {
        // A chirp only has one user 
        return $this->belongsTo(User::class); // connects with the user model 
    }
}
