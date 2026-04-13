<?php

namespace App\Http\Requests\User\Hacks;

class UpdateHackRequest extends AccessHackRequest
{
    /**
     * authorize() inherits from AccessHackRequest
     */

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => "nullable|string|max:65535",
            'value' => "nullable|string|max:4294967295",
        ];


        if ($this->user() && $this->user()->isAdmin()) {
            $rules['status'] = 'nullable|numeric';
        } else {
            // для обычного пользователя пулл статусов ограничен
            $rules['status'] = 'nullable|numeric|in:110,200';
        }

        return $rules;
    }
}
