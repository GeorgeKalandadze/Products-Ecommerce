<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:2000','string','min:5'],
            'slug' => ['required', 'max:2000','string','min:5', 'unique:products'],
            'quote' => ['required', 'string','min:10'],
            'price' => ['required', 'numeric'],
            'discount' => ['nullable', 'numeric', 'between:0,100'],
            'description' => ['required', 'string','min:20'],
            'published' => ['boolean'],
            'quantity' => ['required', 'numeric', 'integer', 'min:0'],
            'subcategory_id' => ['nullable'],
            'images' => ['required', 'array', 'size:4'],
            'images.*' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048']
        ];
    }
}
