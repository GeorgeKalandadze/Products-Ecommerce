<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SubcategoryController extends Controller
{
    public function __invoke($categoryId, $subcategoryId): JsonResponse
    {
        $category = Category::find($categoryId);

        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        $subcategory = SubCategory::where('id', $subcategoryId)
            ->where('category_id', $category->id)
            ->first();

        if (!$subcategory) {
            return response()->json(['error' => 'Subcategory not found'], 404);
        }

        return response()->json($subcategory);
    }
}
