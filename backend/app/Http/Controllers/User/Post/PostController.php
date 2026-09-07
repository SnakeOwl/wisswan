<?php

namespace App\Http\Controllers\User\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Post\AccessPostRequest;
use App\Http\Requests\User\Post\StorePostRequest;
use App\Http\Requests\User\Post\SyncDomainsPostRequest;
use App\Http\Requests\User\Post\UpdatePostRequest;
use App\Models\Domain;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Для пользователя отображать только его посты
        $user = $request->user();

        $posts = $user->posts()->paginate(50);

        return $posts;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $user = $request->user();
        $params = $request->validated();

        $new_post = $user->posts()->create($params)->refresh();

        return $new_post;
    }

    /**
     * Display the specified resource.
     */
    public function show(AccessPostRequest $request, Post $post)
    {
        return $post->load("domains");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $params = $request->validated();

        $post->update($params);

        return $post;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AccessPostRequest $request, Post $post)
    {
        return $post->delete();
    }


    public function sync_domains(SyncDomainsPostRequest $request, Post $post)
    {
        $params = $request->validated();

        // будут либо строки для новых доменов, либо уже существующие записи.
        // из строк нужно создать новые Domain
        $domains_to_sync = $params["domains"];
        $domains_ids = [];

        foreach ($domains_to_sync as $key => $domain) {
            if (is_string($domain)) {
                $domains_to_sync[$key] = Domain::create(["name" => $domain])->refresh();

                $domains_ids[] = $domains_to_sync[$key]->id;
            } else {
                $domains_ids[] = $domain['id'];
            }
        }

        $post->domains()->sync($domains_ids);

        return $domains_to_sync;
    }
}
