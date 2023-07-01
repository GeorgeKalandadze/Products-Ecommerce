<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Exception;

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
        try {
            DB::beginTransaction();
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

            if (count($images) !== 4) {
                throw new \Exception('Please upload exactly 4 images.');
            }

            foreach ($images as $index => $image) {
                $imageName = $product->id . '_' . time() . '_' . $index . '.' . $image->getClientOriginalName();
                $image->storeAs('public/product_images', $imageName);

                ProductImage::create([
                    'product_id' => $product->id,
                    'path' => env('APP_URL').Storage::url('product_images/' . $imageName)
                ]);
            }
            DB::commit();
        } catch (Exception $exception) {
            DB::rollBack();
            throw $exception;
        }

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
