<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Http\Requests\ProductUpdateRequestRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Exception;

class ProductsController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->query('search');

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
            $images = $data['images'];
            foreach ($images as $index => $image) {
                $imageName = $product->id  . time()  . $index . $image->getClientOriginalName();
                $image->storeAs('public/product_images', $imageName);

                ProductImage::create([
                    'product_id' => $product->id,
                    'name' => env('APP_URL').Storage::url('product_images/' . $imageName),
//                    'name' => $imageName,
                    'size' => $image->getSize(),
                    'type' => $image->getMimeType(),
                ]);
            }
            DB::commit();
            $product->load('productImages');

            return response()->json($product);
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

    public function getAllProducts(){

        $perPage = request('per_page', 5);
        $search = request('search', '');
        $sortField = request('sort_field', 'id');
        $sortDirection = request('sort_direction', 'asc');

        $query = Product::query()
            ->where('name', 'like', "%{$search}%")
            ->orderBy($sortField, $sortDirection)
            ->with('productImages')
            ->paginate($perPage);
        return response()->json( $query );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }


    public function update(ProductUpdateRequest $request, $id)
    {

        try {
            $data = $request->validated();
            $product = Product::find($id);
            $product->update($data);
            if (isset($data['images'])) {
                $existingImages = $product->productImages;
                $newImages = $data['images'];
                foreach ($existingImages as $existingImage) {
                    Storage::delete($existingImage->name);
                    $existingImage->delete();
                }
                foreach ($newImages as $index => $image) {
                    $imageName = $product->id  . time()  . $index  . $image->getClientOriginalName();
                    $image->storeAs('public/product_images', $imageName);

                    ProductImage::create([
                        'product_id' => $product->id,
                        'name' => env('APP_URL').Storage::url('product_images/' . $imageName),
//                        'name' => $imageName,
                        'size' => $image->getSize(),
                        'type' => $image->getMimeType(),
                    ]);
                }
            }

            // Reload product with updated images
            $product->load('productImages');

            return response()->json($product);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred during the update process.'], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        $imageUrls = $product->productImages()->pluck('name');

        foreach ($imageUrls as $imageUrl) {
            Storage::disk('public')->delete($imageUrl);
        }
        $product->productImages()->delete();
        $product->delete();

        return response()->json('deleted product');
    }
}
