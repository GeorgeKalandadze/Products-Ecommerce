<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Http\Controllers\ProductsController;
use \App\Http\Controllers\AdminPanelController;
use \App\Http\Controllers\CheckoutController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
Route::get('/', function () {
    return Inertia::render('AuthComp/login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
    return redirect()->route('home');
});


Route::middleware(['auth','verified'] )->group(function () {
    Route::get('/', [ProductsController::class, 'index'])->name('home');
    Route::get('/orders',[\App\Http\Controllers\OrderController::class,'index'])->name('orders');
    Route::get('/checkout/success', [CheckoutController::class, 'renderSuccess'])->name('checkout.success');
    Route::get('/checkout/failure', [CheckoutController::class, 'renderFailure'])->name('checkout.failure');
    Route::get('/products/{id}', [ProductsController::class, 'show']);
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::middleware(['admin'])->group(function () {
        Route::get('/a/panel', [AdminPanelController::class, 'renderAdminPanel'])->name('adminPanel.adminPanel');
        Route::get('/a/products', [AdminPanelController::class, 'renderProductPanel'])->name('adminPanel.products');
        Route::get('/a/orders', [AdminPanelController::class, 'renderOrderPanel'])->name('adminPanel.orders');
        Route::get('/a/users', [AdminPanelController::class, 'renderUserPanel'])->name('adminPanel.users');
    });
});

require __DIR__.'/auth.php';
