<?php

namespace App\Http\Requests\Feedback;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class AccessSupportFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $form_request = $this->route("support_form_request");

        return ($form_request->user_id === null && $user->isAdmin())
            || Gate::forUser($user)->allows('edit-model', $form_request);
    }
}
