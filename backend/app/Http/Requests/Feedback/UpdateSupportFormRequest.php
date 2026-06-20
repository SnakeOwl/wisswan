<?php

namespace App\Http\Requests\Feedback;

class UpdateSupportFormRequest extends AccessSupportFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'text' => "required|string|max:65535",
            'using_personal_data' => "required|boolean",
            'subject' => "required|string|max:255",
            'contact_email' => "nullable|email:rfc,dns|max:255",
            'status' => "required|numeric",
        ];
    }
}
