<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = ['order_id', 'status', 'amount', 'type', 'session_id', 'created_by', 'updated_by'];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, );
    }
}
