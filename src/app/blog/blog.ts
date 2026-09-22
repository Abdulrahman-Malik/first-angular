
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { blogData, Post } from '../blogData';
import { BlogDetails } from '../blog-details/blog-details';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, BlogDetails],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly posts: Post[] = blogData.posts;

  readonly categories = [
    { value: 'all', label: 'الكل' },
    { value: 'إضاءة', label: 'الإضاءة' },
    { value: 'بورتريه', label: 'بورتريه' },
    { value: 'مناظر طبيعية', label: 'مناظر طبيعية' },
    { value: 'تقنيات', label: 'تقنيات' },
    { value: 'معدات', label: 'معدات' },
  ];

  readonly itemsPerPage = 6;

  readonly skeletons = Array.from(
    { length: 6 },
    (_, index) => index
  );

  readonly fallbackImage =
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop&q=80';

  query = signal('');
  category = signal('all');
  view = signal<'grid' | 'list'>('grid');

  loading = signal(false);
  failed = signal(false);

  currentPage = signal(1);

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const selectedCategory = params.get('category');

      const validCategory = this.categories.some(
        item => item.value === selectedCategory
      );

      this.category.set(
        selectedCategory && validCategory
          ? selectedCategory
          : 'all'
      );

      this.currentPage.set(1);
    });
  }

  featuredPosts = computed(() =>
    this.posts
      .filter(post => post.featured)
      .slice(0, 2)
  );

  filtered = computed(() => {
    const search = this.query()
      .trim()
      .toLowerCase();

    const selectedCategory = this.category();

    return this.posts.filter(post => {
      const title = post.title?.toLowerCase() ?? '';
      const excerpt = post.excerpt?.toLowerCase() ?? '';
      const postCategory = post.category?.trim() ?? '';

      const tags = post.tags ?? [];

      const matchesSearch =
        !search ||
        title.includes(search) ||
        excerpt.includes(search) ||
        postCategory.toLowerCase().includes(search) ||
        tags.some(tag =>
          tag.toLowerCase().includes(search)
        );

      const matchesCategory =
        selectedCategory === 'all' ||
        postCategory === selectedCategory.trim();

      return matchesSearch && matchesCategory;
    });
  });

  resultsCount = computed(() =>
    this.filtered().length
  );

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

  pageItems(): (number | string)[] {
    const total = this.totalPages();

    if (total <= 7) {
      return Array.from(
        { length: total },
        (_, index) => index + 1
      );
    }

    const current = this.currentPage();

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

  selectCategory(
    value: string,
    event?: Event
  ): void {
    event?.preventDefault();

    this.currentPage.set(1);

    this.router.navigate(
      ['/blog'],
      {
        queryParams:
          value === 'all'
            ? {}
            : { category: value },
      }
    );
  }

  onSearch(value: string): void {
    this.query.set(value);
    this.currentPage.set(1);
  }

  clearSearch(): void {
    this.query.set('');
    this.currentPage.set(1);
  }

  setView(
    mode: 'grid' | 'list'
  ): void {
    this.view.set(mode);
  }

  goTo(page: number): void {
    const total = this.totalPages();

    if (
      total === 0 ||
      page < 1 ||
      page > total
    ) {
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

    this.router.navigate(['/blog']);
  }

  retry(): void {
    this.failed.set(false);
    this.loading.set(false);
  }

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

