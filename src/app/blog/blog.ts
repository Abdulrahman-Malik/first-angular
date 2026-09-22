
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { blogData, Post } from '../blogData';
import { BlogDetails } from '../blog-details/blog-details';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, BlogDetails],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
})
export class Blog {
  query = signal('');
  category = signal('all');
  view = signal<'grid' | 'list'>('grid');

  loading = signal(false);
  failed = signal(false);

  currentPage = signal(1);

  readonly itemsPerPage = 6;

  posts: Post[] = blogData.posts;

  categories = [
    { value: 'all', label: 'الكل' },
    { value: 'إضاءة', label: 'الإضاءة' },
    { value: 'بورتريه', label: 'بورتريه' },
    { value: 'مناظر طبيعية', label: 'مناظر طبيعية' },
    { value: 'تقنيات', label: 'تقنيات' },
    { value: 'معدات', label: 'معدات' },
  ];

  featuredPosts = computed(() =>
    this.posts
      .filter(post => post.featured)
      .slice(0, 2)
  );

  filtered = computed(() => {
    const search = this.query().trim().toLowerCase();
    const selectedCategory = this.category();

    return this.posts.filter(post => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search) ||
        post.tags.some(tag =>
          tag.toLowerCase().includes(search)
        );

      const matchesCategory =
        selectedCategory === 'all' ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  });

  totalPages(): number {
    return Math.ceil(
      this.filtered().length / this.itemsPerPage
    );
  }

  visible = computed(() => {
    const page = this.currentPage();

    const start =
      (page - 1) * this.itemsPerPage;

    const end =
      start + this.itemsPerPage;

    return this.filtered().slice(start, end);
  });

  resultsCount = computed(() =>
    this.filtered().length
  );

  pageItems(): (number | string)[] {
    const total = this.totalPages();
    const current = this.currentPage();

    if (total <= 7) {
      return Array.from(
        { length: total },
        (_, index) => index + 1
      );
    }

    if (current <= 4) {
      return [
        1,
        2,
        3,
        4,
        5,
        '...',
        total,
      ];
    }

    if (current >= total - 3) {
      return [
        1,
        '...',
        total - 4,
        total - 3,
        total - 2,
        total - 1,
        total,
      ];
    }

    return [
      1,
      '...',
      current - 1,
      current,
      current + 1,
      '...',
      total,
    ];
  }

  skeletons = Array.from(
    { length: 6 },
    (_, index) => index
  );

  onSearch(value: string): void {
    this.query.set(value);
    this.currentPage.set(1);
  }

  clearSearch(): void {
    this.query.set('');
    this.currentPage.set(1);
  }

  selectCategory(
    value: string,
    event?: Event
  ): void {
    event?.preventDefault();

    this.category.set(value);
    this.currentPage.set(1);
  }

  setView(
    mode: 'grid' | 'list'
  ): void {
    this.view.set(mode);
  }

  goTo(page: number): void {
    const total = this.totalPages();

    if (total === 0) {
      return;
    }

    if (page < 1 || page > total) {
      return;
    }

    this.currentPage.set(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  reset(): void {
    this.query.set('');
    this.category.set('all');
    this.currentPage.set(1);
  }

  retry(): void {
    this.failed.set(false);
    this.loading.set(false);
  }

  private readonly fallbackImage =
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop&q=80';

  onImageError(event: Event): void {
    const image =
      event.target as HTMLImageElement;

    if (
      image.dataset['fallback'] === 'true'
    ) {
      return;
    }

    image.dataset['fallback'] = 'true';
    image.src = this.fallbackImage;
  }
}
