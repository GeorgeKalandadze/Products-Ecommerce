<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminPanelController extends Controller
{
    public function renderAdminPanel(): Response
    {
        return Inertia::render('Admin/AdminPanel');
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
