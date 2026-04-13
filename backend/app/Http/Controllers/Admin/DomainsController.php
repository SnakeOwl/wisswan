<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Domain;
use Illuminate\Http\Request;

class DomainsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter_by_new = $request->has('order_new'); // пока только либо новые, либо дефолт
        $show_published_only = $request->has('filter_published_only');
        $show_not_published_only = $request->has('filter_published_revers');

        $domains_query = Domain::query();

        if ($show_published_only) {
            $domains_query->where('published', '1');
        } else if ($show_not_published_only) {
            $domains_query->where('published', '0');
        }


        if ($filter_by_new) {
            $domains_query->orderByDesc('id');
        }

        return $domains_query->paginate(50);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Domain $domain)
    {
        $params = $request->all();

        $domain->update($params);

        return $domain;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Domain $domain)
    {
        return $domain->delete();
    }
}
