<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\GetCategoriesController;
use \App\Http\Controllers\SubcategoryController;
use \App\Http\Controllers\ProductsController;
use \App\Http\Controllers\CartController;
use \App\Http\Controllers\CheckoutController;
use \App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::post('/checkout',[CheckoutController::class, 'checkout']);
    Route::prefix('cart')->group(function () {
        Route::get('/', [CartController::class,'index']);
        Route::post('/add', [CartController::class,'add']);
        Route::put('/{cart_id}/{scope}', [CartController::class,'updateQuantity']);
        Route::delete('delete-cart', [CartController::class,'deleteAllCartItem']);
    });
    Route::get('/categories',GetCategoriesController::class)->name('categories');
    Route::get('/products',[ProductsController::class, 'getAllProducts']);
    Route::middleware(['admin'])->group(function () {
        Route::get('/users',[UserController::class,'index']);
        Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
        Route::get('/{categoryId}/{subcategoryId}', SubcategoryController::class);
        Route::post('/products/create',[ProductsController::class, 'store'])->name('product.create');
        Route::post('/products/update/{id}',[ProductsController::class, 'update'])->name('products.update');
        Route::delete('/products/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');
    });
});




