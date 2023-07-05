<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\SubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'slug' => $this->faker->slug,
            'is_new' => $this->faker->boolean,
            'quantity' => $this->faker->numberBetween(0, 100),
            'description' => $this->faker->paragraph,
//            'cart_image' => $this->faker->imageUrl(), // Generate a random image URL
            'price' => $this->faker->randomFloat(2, 0, 1000),
            'subcategory_id' => SubCategory::inRandomOrder()->first()->id,
        ];
    }
}
