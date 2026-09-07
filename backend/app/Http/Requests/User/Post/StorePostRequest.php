<?php

namespace App\Http\Requests\User\Post;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => "required|string|max:255",
            'content' => "required|string",
            'short_description' => "required|string|max:255",
            'editor_ip' => "nullable|ip",
            'device_type' => "nullable|string|max:20", // mobile, desktop, tablet, bot ...
            'browser_name' => "nullable|string|max:50", // Chrome, Safari, Firefox ...
            'os_name' => "nullable|string|max:50", // Windows, iOS, Android ...
            'screen_resolution' => "nullable|string|max:15", // "1920x1080", "390x844"
        ];
    }
}



