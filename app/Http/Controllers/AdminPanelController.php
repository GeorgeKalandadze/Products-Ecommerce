<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPanelController extends Controller
{
    public function renderAdminPanel(){

        return Inertia::render('Admin/AdminPanel');
    }

    public function renderProductPanel(){
        return Inertia::render('Admin/ProductsPanel');
    }
}
