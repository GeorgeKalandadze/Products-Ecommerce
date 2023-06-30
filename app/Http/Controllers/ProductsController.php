<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\ProductImage;
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

        $images = $request->file('images');

        if ($images && count($images) > 0) {
            foreach ($images as $index => $image) {
                if ($index > 4) {
                    break; // Limit to four images
                }

                $imageName = $product->id . '_' . time() . '_' . $index . '.' . $image->getClientOriginalName();
                $image->storeAs('public/product_images', $imageName); // Store image in the storage directory

                ProductImage::create([
                    'product_id' => $product->id,
                    'path' => 'product_images/' . $imageName // Save the relative path of the image
                ]);
            }
        }}

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
