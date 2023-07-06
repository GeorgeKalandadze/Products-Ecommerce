<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function add(Request $request)
    {
        $user = User::find(1);
        $product_id = $request->product_id;
        $quantity = $request->quantity;

        if ($user) {
            $productCheck = Product::where('id', $product_id)->first();

            if ($productCheck) {
                if ($productCheck->quantity !== 0) {
                    if (CartItem::where('product_id', $product_id)->where('user_id', $user->id)->exists()) {
                        return response()->json([
                            'message' => 'Already added to cart'
                        ], 409);
                    } else {
                        // Update the product quantity
                        $productCheck->quantity -= 1;
                        $productCheck->save();

                        $data = [
                            'user_id' => $user->id,
                            'product_id' => $product_id,
                            'quantity' => $quantity,
                        ];
                        CartItem::create($data);
                        $cartItems = CartItem::with('product')
                            ->where('user_id', $user->id)
                            ->get();

                        return response()->json([
                            'data' => $cartItems->toJson(),
                            'message' => 'Added to cart'
                        ], 201);
                    }
                } else {
                    return response()->json([
                        'message' => 'The product is out of stock'
                    ], 400);
                }
            } else {
                return response()->json([
                    'message' => 'Product not found'
                ], 404);
            }
        }
    }
}
