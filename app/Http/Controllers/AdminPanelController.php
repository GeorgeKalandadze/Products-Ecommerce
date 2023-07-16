<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminPanelController extends Controller
{
    public function renderAdminPanel(): Response
    {
        $activeCustomersCount = Customer::count();
        $paidOrdersCount = Order::where('status', 'paid')->count();
        $totalIncomes = Order::sum('total_price');
        $productsCount = Product::count();
        $topProducts = Product::orderBy('price', 'desc')
            ->take(3)
            ->get(['name', 'description']);
        $latestOrders = Order::latest()->take(10)->get();
        $latestCustomers = Customer::with('user')->latest()->take(3)->get(['user_id']);
        $latestCustomers = $latestCustomers->map(function ($customer) {
            return [
                'name' => $customer->user->name,
                'email' => $customer->user->email,
            ];
        });

        $data = [
            'activeCustomersCount' => $activeCustomersCount,
            'paidOrdersCount' => $paidOrdersCount,
            'totalIncomes' => $totalIncomes,
            'productsCount' => $productsCount,
            'topProducts' => $topProducts,
            'latestOrders' => $latestOrders,
            'latestCustomers' => $latestCustomers,
        ];

        return Inertia::render('Admin/AdminPanel', compact('data'));
    }

    public function renderProductPanel(): Response
    {
        $perPage = request('per_page', 10);
        $search = request('search', '');
        $sortField = request('sort_field', 'id');
        $sortDirection = request('sort_direction', 'asc');

        $query = Product::query()
            ->where('name', 'like', "%{$search}%")
            ->orderBy($sortField, $sortDirection)
            ->with('productImages')
            ->paginate($perPage);

        $products = Product::with('productImages')->get();

        return Inertia::render('Admin/ProductsPanel', [
            'products' => $query
        ]);
    }

    public function renderOrderPanel(): Response
    {
        $orders = Order::selectRaw('MONTH(created_at) AS month, COUNT(*) AS orderCount')
            ->whereYear('created_at', '=', date('Y'))
            ->groupBy('month')
            ->get();

        $orderData = collect([
            ['id' => 1, 'month' => 'January', 'orderCount' => 0],
            ['id' => 2, 'month' => 'February', 'orderCount' => 0],
            ['id' => 3, 'month' => 'March', 'orderCount' => 0],
            ['id' => 4, 'month' => 'April', 'orderCount' => 0],
            ['id' => 5, 'month' => 'May', 'orderCount' => 0],
            ['id' => 6, 'month' => 'June', 'orderCount' => 0],
            ['id' => 7, 'month' => 'July', 'orderCount' => 0],
            ['id' => 8, 'month' => 'August', 'orderCount' => 0],
            ['id' => 9, 'month' => 'September', 'orderCount' => 0],
            ['id' => 10, 'month' => 'October', 'orderCount' => 0],
            ['id' => 11, 'month' => 'November', 'orderCount' => 0],
            ['id' => 12, 'month' => 'December', 'orderCount' => 0],
        ]);

        $modifiedOrderData = $orderData->map(function ($item) use ($orders) {
            $order = $orders->where('month', $item['id'])->first();
            if ($order) {
                $item['orderCount'] = $order->orderCount;
            }
            return $item;
        });

        return Inertia::render('Admin/Orders', [
            'orderData' => $modifiedOrderData,
        ]);
    }


    public function renderUserPanel(): Response
    {
        return Inertia::render('Admin/Users');
    }
}
