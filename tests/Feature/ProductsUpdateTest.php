<?php

it('attaches a player to a team and deactivates other team relations', function () {
    \Illuminate\Support\Facades\Storage::fake('public'); // Mock the storage for file uploads

    // Create a product for testing
    $product = Product::find(2);

    // Prepare the update payload
    $updatedData = [
        'name' => 'Updated Product',
        'slug' => 'updated-product',
        'quantity' => 10,
        'description' => 'Updated product description',
        'quote' => 'Updated product quote',
        'published' => 1,
        'price' => 99.99,
        'subcategory_id' => 1,
        // Include any other fields you need to update
    ];

    // Perform the update request
    $response = $this->put(route('products.update', $product->id), $updatedData);

    // Assert the response
    $response->assertStatus(200); // Assuming a successful update returns a 200 status code
    $this->assertDatabaseHas('products', $updatedData);
});
