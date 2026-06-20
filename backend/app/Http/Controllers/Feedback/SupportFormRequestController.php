<?php

namespace App\Http\Controllers\Feedback;

use App\Http\Controllers\Controller;
use App\Http\Requests\Feedback\AccessSupportFormRequest;
use App\Http\Requests\Feedback\IndexSupportFormRequest;
use App\Http\Requests\Feedback\StoreSupportFormRequest;
use App\Http\Requests\Feedback\UpdateSupportFormRequest;
use App\Models\SupportFormRequest;

class SupportFormRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexSupportFormRequest $request)
    {
        return SupportFormRequest::paginate(40);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupportFormRequest $request)
    {
        $params = $request->validated();
        $user = $request->user() ?? null;

        $params["user_id"] = $user ? $user->id : null;

        $support_form_request = SupportFormRequest::create($params)->refresh();

        return $support_form_request;
    }

    /**
     * Display the specified resource.
     */
    public function show(AccessSupportFormRequest $request, SupportFormRequest $support_form_request)
    {
        return $support_form_request;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupportFormRequest $request, SupportFormRequest $support_form_request)
    {
        $params = $request->validated();
        $support_form_request->update($params);
        
        return $support_form_request;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AccessSupportFormRequest $request, SupportFormRequest $support_form_request)
    {
        return $support_form_request->delete();
    }
}
