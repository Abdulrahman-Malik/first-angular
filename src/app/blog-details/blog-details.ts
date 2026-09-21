
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {

  ArticleSection,
  Author,
  blogData,
  Post
} from '../blogData';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails {
  private readonly route = inject(ActivatedRoute);

  readonly posts: Post[] = blogData.posts;

  post: Post | undefined;

  private readonly fallbackImage =
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop&q=80';

  constructor() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      this.post = this.posts.find(item => item.slug === slug);
    });
  }

  getArticleSections(): ArticleSection[] {
    const currentPost = this.post;

    if (!currentPost) {
      return [];
    }

    if (currentPost.sections && currentPost.sections.length > 0) {
      return currentPost.sections;
    }

    return [
      {
        id: 'section-0',
        title: 'مقدمة',
        content: currentPost.excerpt
      },
      {
        id: 'section-1',
        title: 'عن المقال',
        content: currentPost.content
      },
      {
        id: 'section-2',
        title: 'الخلاصة',
        content: currentPost.content
      }
    ];
  }

  getRelatedPosts(): Post[] {
    const currentPost = this.post;

    if (!currentPost) {
      return [];
    }

    const relatedByTags = this.posts
      .filter(item => item.slug !== currentPost.slug)
      .filter(item =>
        item.tags.some(tag =>
          currentPost.tags.includes(tag)
        )
      );

    const relatedByCategory = this.posts
      .filter(item => item.slug !== currentPost.slug)
      .filter(item =>
        item.category === currentPost.category
      );

    const combined: Post[] = [
      ...relatedByTags,
      ...relatedByCategory
    ];

    const uniquePosts = Array.from(
      new Map(
        combined.map(item => [item.slug, item])
      ).values()
    );

    return uniquePosts.slice(0, 3);
  }

  getAuthors(): Author[] {
    const authorsMap = new Map<string, Author>();

    for (const post of this.posts) {
      const author = post.author;

      if (!authorsMap.has(author.name)) {
        authorsMap.set(author.name, author);
      }
    }

    return Array.from(authorsMap.values());
  }

  getAuthorPostCount(authorName: string): number {
    return this.posts.filter(
      post => post.author.name === authorName
    ).length;
  }

  onImageError(event: Event): void {
    const image = event.target as HTMLImageElement;

    if (image.dataset['fallback'] === 'true') {
      return;
    }

    image.dataset['fallback'] = 'true';
    image.src = this.fallbackImage;
  }
}

