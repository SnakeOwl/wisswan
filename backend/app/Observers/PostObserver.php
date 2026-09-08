<?php

namespace App\Observers;

use App\Models\Post;

class PostObserver
{
    public function updating(Post $post)
    {
        // Проверяем, изменился ли статус и равен ли он теперь 200
        if ($post->isDirty('status') && $post->status == 200) {
            $post->is_published = true;
            
            // это поле нужно для какого-то SEO
            if ($post->published_at == null) {
                $post->published_at = now();
            }
        }else {
            $post->status = 110; // "need to check"
        }
    }
}
