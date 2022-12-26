<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class itineraries extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'country',
        'title'
    ];

    public function author () {
        return $this->hasOne(User::class);
    }
}
