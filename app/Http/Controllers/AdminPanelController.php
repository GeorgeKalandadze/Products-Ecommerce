<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Admin/ProductsPanel');
    }

    public function renderOrderPanel(): Response
    {
        return Inertia::render('Admin/Orders');
    }
}
