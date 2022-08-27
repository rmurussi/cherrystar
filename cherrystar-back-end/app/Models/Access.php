<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Access extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'access';

    protected $fillable = [
        'id',
        'ip',
        'date',
        'browser',
    ];

    protected $casts = [
        'date' => 'datetime',
    ];
}
