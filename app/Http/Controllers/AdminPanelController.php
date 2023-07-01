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
        $products = Product::with('productImages')->get();
        return Inertia::render('Admin/ProductsPanel', [
            'products' => $products
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
