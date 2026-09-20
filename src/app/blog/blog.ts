import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Post } from '../blogData';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
})
export class Blog {
  query = signal('');
  category = signal('all');
  view = signal<'grid' | 'list'>('grid');
  currentPage = signal(1);

  postsPerPage = 6;

  loading = signal(false);
  failed = signal(false);

  categories = [
    { value: 'all', label: 'الكل' },
    { value: 'إضاءة', label: 'الإضاءة' },
    { value: 'بورتريه', label: 'بورتريه' },
    { value: 'مناظر طبيعية', label: 'مناظر طبيعية' },
    { value: 'تقنيات', label: 'تقنيات' },
    { value: 'معدات', label: 'معدات' },
  ];posts: Post[] = [
  {
    id: 1,
    slug: 'mastering-golden-hour-photography',
    title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
    excerpt:
      'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
    content: 'الساعة الذهبية من أجمل أوقات التصوير.',
    category: 'إضاءة',
    author: {
      name: 'سارة أحمد',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      role: 'مصور فوتوغرافي',
    },
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop&q=80',
    date: '18 سبتمبر 2026',
    readTime: '8 دقائق',
    featured: true,
    tags: ['إضاءة', 'تصوير', 'طبيعة'],
  },

  {
    id: 2,
    slug: 'portrait-photography-secrets',
    title: 'أسرار تصوير البورتريه باحترافية',
    excerpt:
      'اكتشف أهم التقنيات التي تساعدك على إنشاء صور بورتريه قوية ومليئة بالشخصية.',
    content: 'تصوير الأشخاص يحتاج إلى فهم الضوء والتكوين.',
    category: 'بورتريه',
    author: {
      name: 'محمد علي',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      role: 'مصور بورتريه',
    },
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop&q=80',
    date: '15 سبتمبر 2026',
    readTime: '6 دقائق',
    featured: false,
    tags: ['بورتريه', 'إضاءة'],
  },

  {
    id: 3,
    slug: 'golden-hour-lighting',
    title: 'كيف تستخدم الضوء لصناعة صورة سينمائية؟',
    excerpt:
      'دليل عملي لفهم اتجاه الضوء والظلال وكيفية تحويل المشهد العادي إلى صورة مميزة.',
    content: 'الضوء هو العنصر الأساسي في صناعة الصورة.',
    category: 'إضاءة',
    author: {
      name: 'أمل محمود',
      avatar:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face',
      role: 'مصور فوتوغرافي',
    },
    image:
      'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=1200&h=800&fit=crop&q=80',
    date: '12 سبتمبر 2026',
    readTime: '7 دقائق',
    featured: true,
    tags: ['إضاءة', 'سينما', 'تصوير'],
  },

  {
    id: 4,
    slug: 'mobile-photography',
    title: 'التصوير بالموبايل: من لقطة عادية إلى صورة احترافية',
    excerpt:
      'هاتفك يمكن أن يكون أداة تصوير قوية إذا فهمت الإضاءة والتكوين والإعدادات المناسبة.',
    content: 'لا تحتاج دائماً إلى كاميرا احترافية.',
    category: 'معدات',
    author: {
      name: 'جمال عبدالله',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      role: 'صانع محتوى',
    },
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=800&fit=crop&q=80',
    date: '9 سبتمبر 2026',
    readTime: '5 دقائق',
    featured: false,
    tags: ['موبايل', 'معدات'],
  },

  {
    id: 5,
    slug: 'composition-rules',
    title: 'قواعد التكوين التي يجب أن يعرفها كل مصور',
    excerpt:
      'تعرف على قاعدة الأثلاث والخطوط والتوازن والمساحات السلبية لصناعة تكوين بصري قوي.',
    content: 'التكوين الجيد يجعل عين المشاهد تعرف أين تنظر.',
    category: 'تقنيات',
    author: {
      name: 'ليث محمود',
      avatar:
        'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop&crop=face',
      role: 'مصور فوتوغرافي',
    },
    image:
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1200&h=800&fit=crop&q=80',
    date: '6 سبتمبر 2026',
    readTime: '9 دقائق',
    featured: false,
    tags: ['تكوين', 'تقنيات'],
  },

  {
    id: 6,
    slug: 'camera-settings',
    title: 'مثلث التعريض: افهم الكاميرا بدل حفظ الإعدادات',
    excerpt:
      'شرح عملي لـ ISO وسرعة الغالق وفتحة العدسة وكيفية تحقيق التوازن بينها.',
    content: 'فهم مثلث التعريض هو أساس التحكم الكامل في الكاميرا.',
    category: 'تقنيات',
    author: {
      name: 'ماجد خالد',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      role: 'مصور محترف',
    },
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop&q=80',
    date: '3 سبتمبر 2026',
    readTime: '10 دقائق',
    featured: false,
    tags: ['كاميرا', 'تقنيات'],
  },

  {
    id: 7,
    slug: 'landscape-photography',
    title: 'كيف تصنع صور مناظر طبيعية لا تُنسى؟',
    excerpt:
      'اختيار المكان والوقت والعدسة يمكن أن يغير النتيجة بالكامل في تصوير الطبيعة.',
    content: 'تصوير الطبيعة يحتاج إلى صبر وملاحظة دقيقة.',
    category: 'مناظر طبيعية',
    author: {
      name: 'يوسف حسن',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      role: 'مصور طبيعة',
    },
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop&q=80',
    date: '1 سبتمبر 2026',
    readTime: '8 دقائق',
    featured: false,
    tags: ['طبيعة', 'مناظر'],
  },

  {
    id: 8,
    slug: 'photography-equipment',
    title: 'كيف تختار معدات التصوير المناسبة لك؟',
    excerpt:
      'دليل مبسط لاختيار الكاميرا والعدسة والإكسسوارات حسب أسلوب التصوير الخاص بك.',
    content: 'المعدات ليست أهم من عين المصور.',
    category: 'معدات',
    author: {
      name: 'كريم عادل',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      role: 'مراجع معدات',
    },
    image:
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1200&h=800&fit=crop&q=80',
    date: '29 أغسطس 2026',
    readTime: '7 دقائق',
    featured: false,
    tags: ['معدات', 'كاميرات'],
  },
];
featuredPosts = computed(() =>
  this.posts.filter((post) => post.featured).slice(0, 2)
);

filtered = computed(() => {
  const search = this.query().trim().toLowerCase();
  const selectedCategory = this.category();

  return this.posts.filter((post) => {
    const matchesSearch =
      !search ||
      post.title.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search) ||
      post.tags.some((tag: string) =>
        tag.toLowerCase().includes(search)
      );

    const matchesCategory =
      selectedCategory === 'all' ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
});

totalPages = computed(() =>
  Math.max(
    1,
    Math.ceil(this.filtered().length / this.postsPerPage)
  )
);

visible = computed(() => {
  const start =
    (this.currentPage() - 1) * this.postsPerPage;

  return this.filtered().slice(
    start,
    start + this.postsPerPage
  );
});

resultsCount = computed(() => this.filtered().length);

pageItems = computed<(number | null)[]>(() => {
  const total = this.totalPages();
  const current = this.currentPage();

  if (total <= 5) {
    return Array.from(
      { length: total },
      (_, i) => i + 1
    );
  }

  if (current <= 3) {
    return [1, 2, 3, 4, null, total];
  }

  if (current >= total - 2) {
    return [
      1,
      null,
      total - 3,
      total - 2,
      total - 1,
      total,
    ];
  }

  return [
    1,
    null,
    current - 1,
    current,
    current + 1,
    null,
    total,
  ];
});

skeletons = Array.from({ length: 6 }, (_, i) => i);

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

setView(mode: 'grid' | 'list'): void {
  this.view.set(mode);
}

goTo(page: number): void {
  if (
    page < 1 ||
    page > this.totalPages()
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
}

retry(): void {
  this.failed.set(false);
  this.loading.set(false);
}


/* ============================= */
/* IMAGE FALLBACK */
/* ============================= */

private readonly fallbackImage =
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop&q=80';

onImageError(event: Event): void {
  const image = event.target as HTMLImageElement;

  if (image.dataset['fallback'] === 'true') {
    return;
  }

  image.dataset['fallback'] = 'true';

  image.src = this.fallbackImage;
}
}
