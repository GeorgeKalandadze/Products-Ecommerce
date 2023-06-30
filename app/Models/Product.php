<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'quantity',
        'price',
        'quote',
        'subcategory_id',
        'published'
    ];

    protected $attributes = [
        'is_new' => true,
//        'published' => true
    ];

    public function subCategory():BelongsTo
    {
        return $this->belongsTo(subCategory::class);
    }

    public function productImages(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }
}
