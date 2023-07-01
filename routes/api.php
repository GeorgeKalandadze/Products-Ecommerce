<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\GetCategoriesController;
use \App\Http\Controllers\SubcategoryController;
use \App\Http\Controllers\ProductsController;

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
Route::get('/categories',GetCategoriesController::class);
Route::get('/{categoryId}/{subcategoryId}', SubcategoryController::class);
Route::post('/products/create',[ProductsController::class, 'store']);
Route::delete('/products/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');

