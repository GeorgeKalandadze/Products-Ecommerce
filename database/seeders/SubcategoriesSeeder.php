<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubcategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sub_categories')->insert([
            [
                'name' => 'Computers & Accessories',
                'category_id' => 1
            ],
            [
                'name' => 'Headphones',
                'category_id' => 1
            ],
            [
                'name' => 'Video Game Consoles & Accessories',
                'category_id' => 1
            ],
            [
                'name' => 'Television & Video',
                'category_id' => 1
            ],
            [
                'name' => 'PC',
                'category_id' => 2
            ],
            [
                'name' => 'Video Games',
                'category_id' => 2
            ],
            [
                'name' => 'Play Station 5',
                'category_id' => 2
            ],
            [
                'name' => 'Play Station 4',
                'category_id' => 2
            ],
            [
                'name' => 'Xbox One',
                'category_id' => 2
            ],
            [
                'name' => 'Xbox 360',
                'category_id' => 2
            ],
            [
                'name' => 'Nintendo Switch',
                'category_id' => 2
            ],
            [
                'name' => 'Digital Software',
                'category_id' => 3
            ],
            [
                'name' => 'Games',
                'category_id' => 3
            ],
            [
                'name' => 'Programing & Web Development',
                'category_id' => 3
            ],
            [
                'name' => 'Music',
                'category_id' => 3
            ],
            [
                'name' => 'Outdoor Recreation',
                'category_id' => 4
            ],
            [
                'name' => 'Sports & Fitness',
                'category_id' => 4
            ],
            [
                'name' => "Women's Fashion",
                'category_id' => 5
            ],
            [
                'name' => "Man's Fashion",
                'category_id' => 5
            ],
            [
                'name' => "Girl's Fashion",
                'category_id' => 5
            ],
            [
                'name' => "Boy's Fashion",
                'category_id' => 5
            ],
        ]);
    }
}
