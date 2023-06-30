<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('productImages')->get();

        return Inertia::render('Product/Products',[
            'products' => $products->toJson()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $data = $request->validated();
        $product = Product::create([
            'name' => $data['name'],
            'slug' => $data['slug'],
            'quantity' => $data['quantity'],
            'description' => $data['description'],
            'quote' => $data['quote'],
            'published' => $data['published'],
            'price' => $data['price'],
            'subcategory_id' => $data['subcategory_id']
        ]);

        return response()->json($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
       $product = Product::find($id);
       return Inertia::render('SingleProductPage/SingleProduct', [
           'productInfo' => $product,
           'productImages' => $product->productImages,
       ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
