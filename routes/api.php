<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\GetCategoriesController;
use \App\Http\Controllers\SubcategoryController;
use \App\Http\Controllers\ProductsController;
use \App\Http\Controllers\CartController;
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

Route::middleware('auth:sanctum')->group(function () {

});
Route::post('cart/add', [CartController::class,'add']);
Route::get('/cart', [CartController::class,'index']);
Route::put('/cart/{cart_id}/{scope}', [CartController::class,'updateQuantity']);
Route::get('/categories',GetCategoriesController::class);
Route::get('/products',[ProductsController::class, 'getAllProducts']);
Route::get('/{categoryId}/{subcategoryId}', SubcategoryController::class);
Route::post('/products/create',[ProductsController::class, 'store']);
Route::post('/products/update/{id}',[ProductsController::class, 'update'])->name('products.update');
Route::delete('/products/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');

