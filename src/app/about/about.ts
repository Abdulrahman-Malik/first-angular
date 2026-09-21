
import { Component } from '@angular/core';
import { blogData, Author } from '../blogData';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  authors: Author[] = this.getAuthors();

  private getAuthors(): Author[] {
    const authorsMap = new Map<string, Author>();

    for (const post of blogData.posts) {
      if (!authorsMap.has(post.author.name)) {
        authorsMap.set(post.author.name, post.author);
      }
    }

    return Array.from(authorsMap.values());
  }
}

