<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $orders = Order::where('created_by', $user->id)->withCount('items')->get();

        return Inertia::render('Order/Order', [
            'orders' => $orders,
        ]);
    }
}
