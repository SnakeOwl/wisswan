<?php

namespace App\Http\Controllers\Feed;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class PostsController extends Controller
{
    public function index(Request $request)
    {
        return Post::where('is_published', 1)->get();
    }

    /**
     * Handle the incoming request.
     */
    public function show(Request $request, string $post_id)
    {
        $post = Post::find($post_id, ["is_published", 'title', 'published_at', 'updated_at', 'content', 'short_description']);

        $user = $request->user();

        if ($post == null)
            return response("not found", 404);

        if (!$post->is_published) 
            return Gate::forUser($user)->allows('edit-model', $post)? $post: response("forbidden", 403);


        return $post;
    }
}
