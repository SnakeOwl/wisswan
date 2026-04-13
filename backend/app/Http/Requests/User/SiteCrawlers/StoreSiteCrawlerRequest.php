<?php

namespace App\Http\Requests\User\SiteCrawlers;
use Illuminate\Foundation\Http\FormRequest;

class StoreSiteCrawlerRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'url' => 'required|string|max:512'
        ];
    }

    
    public function messages(): array
    {
        return [
            'url.required' => 'Ссылка обязательна',
            'url.max' => 'Ссылка не должна содержать более :max символов',
        ];
    }
}
