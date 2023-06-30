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
            'name' => ['required', 'max:2000'],
            'slug' => ['required', 'max:2000'],
            'quote' => ['required','string'],
            'price' => ['required', 'numeric'],
            'description' => ['required', 'string'],
            'published' => ['required', 'boolean'],
            'quantity' => ['required', 'numeric', 'integer', 'min:0'],
            'subcategory_id' => ['nullable']
        ];
    }
}
