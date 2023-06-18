<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetCategoriesController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $categories_subcategories = Category::with('subCategories')->get();
        return response()->json($categories_subcategories);
    }
}
