<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartItemResource;
use App\Models\CartItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        if($user){
            $user_id = $user->id;
            $cartItems = CartItem::with('product.productImages')
                ->where('user_id', $user_id)
                ->get();
            return CartItemResource::collection($cartItems);
        }
    }

    public function add(Request $request)
    {
        $user = $request->user();
        $product_id = $request->product_id;
        $quantity = $request->quantity;

        if ($user) {
            $productCheck = Product::where('id', $product_id)->first();

            if ($productCheck) {
                if ($productCheck->quantity > $quantity) {
                    if (CartItem::where('product_id', $product_id)->where('user_id', $user->id)->exists()) {
                        return response()->json([
                            'message' => 'Already added to cart'
                        ], 409);
                    } else {
                        // Update the product quantity
//                        $productCheck->quantity -= 1;
//                        $productCheck->save();

                        $data = [
                            'user_id' => $user->id,
                            'product_id' => $product_id,
                            'quantity' => $quantity,
                        ];
                        $cartItem = CartItem::create($data);
                        $cartItem->load('product.productImages');


                        return response()->json([
                            'data' => new CartItemResource($cartItem),
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


    public function updateQuantity($cart_id, $scope, Request $request)
    {
        $user = $request->user();
        if($user){
            $user_id = $user->id;
            $cartItem = CartItem::where('id',$cart_id)->where('user_id',$user_id)->first();
            if($cartItem){
                if($scope == "inc"){
                    $product = $cartItem->product;
                    if ($product->quantity > $cartItem->quantity) {
                        $cartItem->quantity += 1;
                    } else {
                        return response()->json([
                            'status' => 400,
                            'message' => 'The product is out of stock'
                        ]);
                    }
                }else if($scope == "dec"){
                    if($cartItem->quantity > 0) {
                        $cartItem->quantity -= 1;
                        if($cartItem->quantity == 0) {
                            $cartItem->delete();
                            return response()->json([
                                'data' => CartItemResource::collection(CartItem::with('product.productImages')),
                                'message' => 'cart item deleted'
                            ],201);
                        }
                    }
                    else {
                        return response()->json([
                            'status' => 400,
                            'message' => 'quantity cannot be decreased below zero'
                        ]);
                    }
                }
                $cartItem->update();
                return response()->json([
                    'data' => $cartItem->toJson(),
                    'message' => 'quantity updated'
                ],201);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'cart item not found'
                ]);
            }
        }
    }

    public function deleteAllCartItem(Request $request)
    {
        $user = $request->user();
        if ($user) {
            CartItem::where('user_id', $user->id)->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Cart cleared'
            ]);
        }
    }

}
