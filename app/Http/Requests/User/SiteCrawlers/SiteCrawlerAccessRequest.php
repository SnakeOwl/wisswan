<?php

namespace App\Http\Requests\User\SiteCrawlers;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class SiteCrawlerAccessRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $crawler = $this->route('site_crawler');

        return Gate::forUser($user)->allows('edit-model', $crawler);
    }
}
