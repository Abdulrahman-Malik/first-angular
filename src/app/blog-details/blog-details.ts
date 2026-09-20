import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Author, blogData, Post } from '../blogData';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails {

  posts: Post[] = [];

  featuredArticles: Post[] = [];

  authors: Author[] = [];

  constructor() {

    this.posts = blogData.posts;

    this.featuredArticles = this.posts.filter(
      post => post.featured
    );

    this.authors = this.getAuthors();

  }

  private getAuthors(): Author[] {

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

}
