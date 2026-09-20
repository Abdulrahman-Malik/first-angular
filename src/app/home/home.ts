import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData as data, Category, Post } from '../blogData';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  avatars: string[] = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
  ];

  subscribers = '+10,000';

  subscribed = signal(false);

  arrowPath = 'M5 12h14M13 6l6 6-6 6';

  blogData = data;

  get featuredArticles(): Post[] {
    return this.blogData.posts.filter(post => post.featured);
  }

  get latestArticles(): Post[] {
    return [...this.blogData.posts]
      .sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      )
      .slice(0, 3);
  }

  get categories(): Category[] {
    return this.blogData.categories;
  }

  onSubscribe(event: Event): void {
    event.preventDefault();
    this.subscribed.set(true);
  }
}
