<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
require_once app_path('Helpers/calculatePercentage.php');

class CartItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
         ;
        return [
            'id' => $this->id,
            'quantity' => $this->quantity,
            'product' => [
                'productId' => $this->product->id,
                'name' => $this->product->name,
                'price' => $this->product->price,
                'discountedPrice' => calculatePercentage($this->product->price, $this->product->discount),
                'image' => $this->product->productImages->first()->name
            ]
        ];
    }
}
