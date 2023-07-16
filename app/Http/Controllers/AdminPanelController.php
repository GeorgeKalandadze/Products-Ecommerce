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
        return Inertia::render('Admin/Orders');
    }

    public function renderUserPanel(): Response
    {
        return Inertia::render('Admin/Users');
    }
}
