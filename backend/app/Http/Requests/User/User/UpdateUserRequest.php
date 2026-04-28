<?php

namespace App\Http\Requests\User\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $current_user = $this->user();
        $updated_user = $this->route('user');


        return $updated_user->id == $current_user->id
            || $current_user->isAdmin();

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'name' => 'nullable|string|max:255',
            'use_telegram_notify_on_site_cravler_500' => 'nullable|boolean',
            'use_telegram_notify_on_site_cravler_all_responses' => 'nullable|boolean',
        ];


        if ($this->user() && $this->user()->isAdmin()) {
            if ($this->has('email')) {
                $rules['email'] = 'required|email:rfc,dns|max:255';
            }
            $rules['access'] = 'nullable|numeric';
            $rules['deleted_message'] = 'nullable|string|max:65535';
        }

        return $rules;
    }


    public function messages(): array
    {
        return [
            'email.email' => 'Введите корректный email'
        ];
    }
}
