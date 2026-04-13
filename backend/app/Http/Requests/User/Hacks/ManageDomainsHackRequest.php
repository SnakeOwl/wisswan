<?php

namespace App\Http\Requests\User\Hacks;

class ManageDomainsHackRequest extends AccessHackRequest
{
    public function rules(): array
    {
        return [
            'domains' => "array|nullable",
            'domains.*.id' => 'nullable|integer',
            'domains.*.name' => 'required|string',
        ];
    }
}
