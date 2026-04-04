<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\SiteCrawlers\SiteCrawlerAccessRequest;
use App\Http\Requests\User\SiteCrawlers\StoreSiteCrawlerRequest;
use App\Http\Requests\User\SiteCrawlers\UpdateSiteCrawlerRequest;
use App\Models\SiteCrawler;
use Illuminate\Http\Request;

class SiteCrawlersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $show_all_records = $request->has('show_all_records') && $user->isAdmin();

        $crawlers = $show_all_records ? SiteCrawler::query() : $user->site_crawlers();

        return $crawlers->paginate(50);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSiteCrawlerRequest $request)
    {
        $user = $request->user();
        $params = $request->validated();

        $crawler = $user->site_crawlers()->create($params)->refresh();

        return $crawler;
    }

    /**
     * Display the specified resource.
     */
    public function show(SiteCrawlerAccessRequest $request, SiteCrawler $site_crawler)
    {
        return $site_crawler->load([
            'logs' => function ($query) {
                $query->limit(50);
            }
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSiteCrawlerRequest $request, SiteCrawler $site_crawler)
    {
        $params = $request->validated();

        $site_crawler->update($params);

        return $site_crawler;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SiteCrawlerAccessRequest $request, SiteCrawler $site_crawler)
    {
        return $site_crawler->delete();
    }
}
