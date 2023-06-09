<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Enums\PaymentStatus;
use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class CheckoutController extends Controller
{
//    public function checkout(Request $request)
//    {
//        /** @var \App\Models\User $user */
////        $user = $request->user();
//        $user = User::find(1);
//
//        \Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));
//
//        [$products, $cartItems] = self::getProductsAndCartItems();
//
//        $orderItems = [];
//        $lineItems = [];
//        $totalPrice = 0;
//        foreach ($products as $product) {
//            $quantity = $cartItems[$product->id]['quantity'];
//            $totalPrice += $product->price * $quantity;
//            $lineItems[] = [
//                'price_data' => [
//                    'currency' => 'usd',
//                    'product_data' => [
//                        'name' => $product->title,
////                        'images' => [$product->image]
//                    ],
//                    'unit_amount' => $product->price * 100,
//                ],
//                'quantity' => $quantity,
//            ];
//            $orderItems[] = [
//                'product_id' => $product->id,
//                'quantity' => $quantity,
//                'unit_price' => $product->price
//            ];
//        }
////        dd(route('checkout.failure', [], true));
//
////        dd(route('checkout.success', [], true) . '?session_id={CHECKOUT_SESSION_ID}');
//
//        $session = \Stripe\Checkout\Session::create([
//            'line_items' => $lineItems,
//            'mode' => 'payment',
//            'success_url' => route('checkout.success', [], true) . '?session_id={CHECKOUT_SESSION_ID}',
//            'cancel_url' => route('checkout.failure', [], true),
//        ]);
//
//        // Create Order
//        $orderData = [
//            'total_price' => $totalPrice,
//            'status' => OrderStatus::Unpaid,
//            'created_by' => $user->id,
//            'updated_by' => $user->id,
//        ];
//        $order = Order::create($orderData);
//
//        // Create Order Items
//        foreach ($orderItems as $orderItem) {
//            $orderItem['order_id'] = $order->id;
//            OrderItem::create($orderItem);
//        }
//
//        // Create Payment
//        $paymentData = [
//            'order_id' => $order->id,
//            'amount' => $totalPrice,
//            'status' => PaymentStatus::Pending,
//            'type' => 'cc',
//            'created_by' => $user->id,
//            'updated_by' => $user->id,
//            'session_id' => $session->id
//        ];
//        Payment::create($paymentData);
//
//        CartItem::where(['user_id' => $user->id])->delete();
//
//        return redirect($session->url);
//    }





    public static function getCartItems()
    {
        $request = \request();
//        $user = $request->user();
        $user = User::find(1);
        if ($user) {
            return CartItem::where('user_id', $user->id)->get()->map(
                fn($item) => ['product_id' => $item->product_id, 'quantity' => $item->quantity]
            );
        } else {
            return self::getCookieCartItems();
        }
    }

    public static function getCookieCartItems()
    {
        $request = \request();
        return json_decode($request->cookie('cart_items', '[]'), true);
    }

    public static function getProductsAndCartItems(): array|\Illuminate\Database\Eloquent\Collection
    {
        $cartItems = self::getCartItems();
        $ids = Arr::pluck($cartItems, 'product_id');
        $products = Product::query()->whereIn('id', $ids)->get();
        $cartItems = Arr::keyBy($cartItems, 'product_id');

        return [$products, $cartItems];
    }
}
