<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
require_once app_path('Helpers/calculatePercentage.php');
class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        $discountedPrice = calculatePercentage($this->price, $this->discount);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'quantity' => $this->quantity,
            'description' => $this->description,
            'quote' => $this->quote,
            'published' => $this->published,
            'price' => $this->price,
            'discount' => $this->discount,
            'discountedPrice' => $discountedPrice,
            'subcategory_id' => $this->subcategory_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'product_images' => ProductImageResource::collection($this->whenLoaded('productImages')),
        ];
    }
}
