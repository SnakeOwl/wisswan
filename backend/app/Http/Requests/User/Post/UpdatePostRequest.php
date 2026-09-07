<?php

namespace App\Http\Requests\User\Post;

use Illuminate\Contracts\Validation\ValidationRule;

class UpdatePostRequest extends AccessPostRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $user = $this->user();

        $rights = [
            'published_at' => "nullable|date_format:Y-m-d",
            'title' => "required|string|max:255",
            'content' => "required|string",
            'status' => "required|numeric",
            'short_description' => "required|string|max:255",
            'editor_ip' => "nullable|ip",
            'device_type' => "nullable|string|max:20", // mobile, desktop, tablet, bot ...
            'browser_name' => "nullable|string|max:50", // Chrome, Safari, Firefox ...
            'os_name' => "nullable|string|max:50", // Windows, iOS, Android ...
            'screen_resolution' => "nullable|string|max:15", // "1920x1080", "390x844"
        ];


        if ($user->isAdmin()) {
            $rights["user_id"] = "required|numeric|exists:users,id";
            $rights['is_published'] = "required|boolean";
        }


        return $rights;
    }
}
