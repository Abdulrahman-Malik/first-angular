
export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio?: string;

  socials?: {
    linkedin?: string;
    github?: string;
    x?: string;
  };
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  sections?: ArticleSection[];
}

export interface Category {
  name: string;
  count: number;
  color: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    youtube: string;
  };
}

export interface BlogData {
  posts: Post[];
  categories: Category[];
  siteInfo: SiteInfo;
}


export interface BlogData {
  posts: Post[];
  categories: Category[];
  siteInfo: SiteInfo;
}

export const blogData: BlogData = {
  posts: [
    {
      "id": 1,
      "slug": "mastering-golden-hour-photography",
      "title": "إتقان تصوير الساعة الذهبية: دليل شامل",
      "excerpt": "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
      "content": "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي.",
      "category": "إضاءة",
      "author": {
        "name": "سالم أحمد",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        "role": "مصور محترف"
      },
      "image": "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
      "date": "2026-01-15",
      "readTime": "8 دقائق للقراءة",
      "featured": true,
      "tags": ["إضاءة", "الساعة الذهبية", "تصوير خارجي"]
    },

    {
      id: 2,
      slug: "portrait-photography-secrets",
      title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
      excerpt: "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
      content: "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة.",
      category: "بورتريه",
      author: {
        name: "محمد علي",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مصور بورتريه"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      date: "2026-01-12",
      readTime: "6 دقائق للقراءة",
      featured: true,
      tags: ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"]
    },

    {
      id: 3,
      slug: "landscape-photography-guide",
      title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      excerpt: "تعلم أساسيات تصوير المناظر الطبيعية وكيفية التقاط صور طبيعية مذهلة باحترافية.",
      content: "تصوير المناظر الطبيعية من أجمل أنواع التصوير الفوتوغرافي، فهو يجمع بين جمال الطبيعة والإبداع البصري.",
      category: "مناظر طبيعية",
      author: {
        name: "إبراهيم حسن",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        role: "مصور طبيعة"
      },
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=400&fit=crop",
      date: "2026-01-10",
      readTime: "7 دقائق للقراءة",
      featured: true,
      tags: ["مناظر طبيعية", "طبيعة", "تصوير خارجي"]
    },

    {
      id: 4,
      slug: "camera-settings-basics",
      title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
      excerpt: "افهم مثلث التعريض الضوئي وتعلم كيفية التحكم في إعدادات الكاميرا للحصول على صور احترافية.",
      content: "فهم إعدادات الكاميرا هو الخطوة الأولى للانتقال من التصوير التلقائي إلى التصوير الاحترافي.",
      category: "تقنيات",
      author: {
        name: "داود خالد",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مدرب تصوير"
      },
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
      date: "2026-01-08",
      readTime: "9 دقائق للقراءة",
      featured: false,
      tags: ["كاميرات", "إعدادات", "مثلث التعريض"]
    },

    {
      id: 5,
      slug: "photo-composition-rules",
      title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
      excerpt: "تعرف على أهم قواعد التكوين التي تساعدك على إنشاء صور متوازنة وجذابة بصرياً.",
      content: "التكوين هو الطريقة التي ترتب بها العناصر داخل إطار الصورة لتوجيه عين المشاهد وصناعة قصة بصرية.",
      category: "تقنيات",
      author: {
        name: "ليث محمود",
        avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&h=100&fit=crop&crop=face",
        role: "فنان بصري"
      },
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop",
      date: "2026-01-06",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["تكوين", "قاعدة الأثلاث", "تصوير"]
    },

    {
      id: 6,
      slug: "mobile-photography-tips",
      title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
      excerpt: "اكتشف أسرار التصوير بالموبايل وكيف تستفيد من كاميرا هاتفك للحصول على نتائج احترافية.",
      content: "أصبحت الهواتف الذكية أدوات قوية للتصوير ويمكنك الحصول على صور رائعة إذا فهمت إمكانياتها.",
      category: "تقنيات",
      author: {
        name: "جمال عبدالله",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور ومراجع تقني"
      },
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop",
      date: "2026-01-04",
      readTime: "5 دقائق للقراءة",
      featured: false,
      tags: ["تصوير الهاتف", "موبايل", "تقنيات"]
    },

    {
      id: 7,
      slug: "night-photography-techniques",
      title: "تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",
      excerpt: "تعلم التقنيات والإعدادات اللازمة لتصوير النجوم والسماء ليلاً بوضوح مذهل.",
      content: "التصوير الليلي يمنحك فرصة لرؤية العالم بطريقة مختلفة، وخاصة عند تصوير النجوم والسماء.",
      category: "إضاءة",
      author: {
        name: "خالد الفيصل",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
        role: "مصور فلكي"
      },
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=400&fit=crop",
      date: "2026-01-02",
      readTime: "10 دقائق للقراءة",
      featured: true,
      tags: ["تصوير ليلي", "نجوم", "سماء"]
    },

    {
      id: 8,
      slug: "street-photography-guide",
      title: "تصوير الشارع: فن التقاط الحياة اليومية",
      excerpt: "اكتشف أسرار تصوير الشارع وكيفية التقاط اللحظات العفوية التي تحكي قصصاً حقيقية.",
      content: "تصوير الشارع هو فن مراقبة الحياة اليومية والتقاط اللحظات التي تمر أمامنا دون ترتيب مسبق.",
      category: "بورتريه",
      author: {
        name: "نادر سعيد",
        avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=100&h=100&fit=crop&crop=face",
        role: "مصور شوارع"
      },
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      date: "2025-12-28",
      readTime: "7 دقائق للقراءة",
      featured: false,
      tags: ["تصوير الشارع", "حياة يومية", "لحظات"]
    },

    {
      id: 9,
      slug: "food-photography-basics",
      title: "تصوير الطعام: كيف تجعل أطباقك تبدو شهية",
      excerpt: "تعلم أساسيات تصوير الطعام والإضاءة والتكوين للحصول على صور شهية واحترافية.",
      content: "تصوير الطعام يعتمد على الإضاءة والتكوين والألوان لإظهار الطبق بأفضل صورة ممكنة.",
      category: "إضاءة",
      author: {
        name: "هاني الشمري",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        role: "مصور طعام"
      },
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop",
      date: "2025-12-25",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["تصوير الطعام", "طعام", "إضاءة"]
    },

    {
      id: 10,
      slug: "wildlife-photography-tips",
      title: "تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",
      excerpt: "نصائح عملية لتصوير الحيوانات والطبيعة مع الحفاظ على الأمان والحصول على صور مميزة.",
      content: "تصوير الحياة البرية يحتاج إلى الصبر والمعرفة بسلوك الحيوانات واختيار المعدات المناسبة.",
      category: "مناظر طبيعية",
      author: {
        name: "عمر الراشد",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور حياة برية"
      },
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",
      date: "2025-12-22",
      readTime: "8 دقائق للقراءة",
      featured: true,
      tags: ["حياة برية", "حيوانات", "طبيعة"]
    },

    {
      id: 11,
      slug: "black-white-photography",
      title: "التصوير بالأبيض والأسود: فن الضوء والظل",
      excerpt: "اكتشف كيف يمكن للأبيض والأسود تحويل الصور العادية إلى أعمال فنية قوية ومؤثرة.",
      content: "التصوير بالأبيض والأسود يعتمد على الضوء والظل والتباين لإيصال المشاعر بدون الاعتماد على الألوان.",
      category: "تقنيات",
      author: {
        name: "فارس العلي",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "فنان فوتوغرافي"
      },
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",
      date: "2025-12-20",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["أبيض وأسود", "فن", "تباين"]
    },

    {
      id: 12,
      slug: "photo-editing-lightroom",
      title: "أساسيات تعديل الصور في Lightroom",
      excerpt: "تعلم أساسيات تعديل الصور باستخدام Lightroom وتحسين الإضاءة والألوان والتفاصيل.",
      content: "يعد Lightroom من أشهر أدوات تعديل الصور ويمنح المصور تحكماً واسعاً في الألوان والإضاءة.",
      category: "تقنيات",
      author: {
        name: "سامي الحربي",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
        role: "خبير تعديل صور"
      },
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=400&fit=crop",
      date: "2025-12-18",
      readTime: "9 دقائق للقراءة",
      featured: false,
      tags: ["Lightroom", "تعديل الصور", "ألوان"]
    },

    {
      id: 13,
      slug: "macro-photography-world",
      title: "عالم التصوير الماكرو: اكتشف التفاصيل الخفية",
      excerpt: "ادخل إلى عالم التصوير الماكرو واكتشف تفاصيل صغيرة لا تراها العين بسهولة.",
      content: "التصوير الماكرو يكشف عالماً من التفاصيل الدقيقة ويحول الأشياء الصغيرة إلى موضوعات مذهلة.",
      category: "معدات",
      author: {
        name: "رامي الخطيب",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مصور ماكرو"
      },
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800&h=400&fit=crop",
      date: "2025-12-15",
      readTime: "7 دقائق للقراءة",
      featured: false,
      tags: ["ماكرو", "تفاصيل", "عدسات"]
    },

    {
      id: 14,
      slug: "long-exposure-photography",
      title: "التعريض الطويل: كيف تصور الحركة والزمن",
      excerpt: "تعلم استخدام التعريض الطويل لإنشاء تأثيرات إبداعية للحركة والمياه والضوء.",
      content: "التعريض الطويل يسمح للمصور بتسجيل الحركة عبر الزمن وإنتاج صور ذات طابع فني مميز.",
      category: "تقنيات",
      author: {
        name: "باسم المصري",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور فني"
      },
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=400&fit=crop",
      date: "2025-12-12",
      readTime: "8 دقائق للقراءة",
      featured: true,
      tags: ["تعريض طويل", "حركة", "إبداع"]
    },

    {
      id: 15,
      slug: "wedding-photography-guide",
      title: "تصوير حفلات الزفاف: دليل المصور المحترف",
      excerpt: "دليل عملي لتصوير حفلات الزفاف والتعامل مع اللحظات المهمة والإضاءة واللقطات العفوية.",
      content: "تصوير حفلات الزفاف يجمع بين التخطيط والسرعة والقدرة على التقاط اللحظات المهمة في الوقت المناسب.",
      category: "بورتريه",
      author: {
        name: "منصور الزهراني",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
        role: "مصور زفاف"
      },
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",
      date: "2025-12-10",
      readTime: "9 دقائق للقراءة",
      featured: false,
      tags: ["زفاف", "حفلات", "بورتريه"]
    },

    {
      id: 16,
      slug: "drone-photography-basics",
      title: "التصوير بالدرون: منظور جديد للعالم",
      excerpt: "تعلم أساسيات التصوير الجوي باستخدام الدرون وكيفية اختيار الزوايا المناسبة.",
      content: "التصوير بالدرون يمنح المصور منظوراً مختلفاً ويسمح برؤية الأماكن والمناظر من زوايا غير تقليدية.",
      category: "معدات",
      author: {
        name: "فيصل الدوسري",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور جوي"
      },
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
      date: "2025-12-08",
      readTime: "7 دقائق للقراءة",
      featured: false,
      tags: ["درون", "تصوير جوي", "منظور"]
    },

    {
      id: 17,
      slug: "product-photography-essentials",
      title: "تصوير المنتجات: أساسيات التصوير التجاري",
      excerpt: "تعلم كيفية تصوير المنتجات بطريقة احترافية تناسب المتاجر الإلكترونية والإعلانات.",
      content: "تصوير المنتجات يحتاج إلى إضاءة دقيقة وخلفية مناسبة وتكوين يبرز تفاصيل المنتج.",
      category: "تقنيات",
      author: {
        name: "لؤي الصالح",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مصور تجاري"
      },
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",
      date: "2025-12-05",
      readTime: "8 دقائق للقراءة",
      featured: false,
      tags: ["تصوير منتجات", "تجارة إلكترونية", "إضاءة"]
    },

    {
      id: 18,
      slug: "architecture-photography",
      title: "تصوير العمارة: كيف تلتقط روح المباني",
      excerpt: "اكتشف تقنيات تصوير المباني والهندسة المعمارية وإظهار الخطوط والتفاصيل بطريقة فنية.",
      content: "تصوير العمارة يعتمد على الخطوط والمنظور والهندسة لإظهار جمال المباني وتفاصيلها.",
      category: "مناظر طبيعية",
      author: {
        name: "طارق النعيمي",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
        role: "مصور معماري"
      },
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop",
      date: "2025-12-02",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["عمارة", "مباني", "هندسة"]
    },

    {
      id: 19,
      slug: "sports-action-photography",
      title: "تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",
      excerpt: "تعلم كيفية تصوير الحركة السريعة والرياضات باستخدام إعدادات مناسبة للغالق والتركيز.",
      content: "تصوير الرياضة يتطلب سرعة في التركيز واختيار سرعة غالق مناسبة لتجميد اللحظة الحاسمة.",
      category: "تقنيات",
      author: {
        name: "أحمد الشهري",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        role: "مصور رياضي"
      },
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
      date: "2025-11-28",
      readTime: "8 دقائق للقراءة",
      featured: false,
      tags: ["رياضة", "حركة", "سرعة الغالق"]
    },

    {
      id: 20,
      slug: "flash-photography-basics",
      title: "أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",
      excerpt: "تعلم كيفية استخدام الفلاش والتحكم في اتجاه الضوء وقوته للحصول على صور احترافية.",
      content: "الفلاش أداة مهمة يمكن استخدامها لصناعة إضاءة مميزة والتحكم في شكل الصورة النهائي.",
      category: "إضاءة",
      author: {
        name: "ماجد القحطاني",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مصور استوديو"
      },
      image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a1b?w=800&h=400&fit=crop",
      date: "2025-11-25",
      readTime: "7 دقائق للقراءة",
      featured: false,
      tags: ["فلاش", "إضاءة", "استوديو"]
    },

    {
      id: 21,
      slug: "travel-photography-tips",
      title: "تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",
      excerpt: "نصائح لتصوير السفر واختيار المعدات واللحظات التي تستحق التوثيق.",
      content: "تصوير السفر هو طريقة رائعة لتوثيق الأماكن والثقافات واللحظات التي تعيشها أثناء رحلاتك.",
      category: "مناظر طبيعية",
      author: {
        name: "ياسر العتيبي",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور رحالة"
      },
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
      date: "2025-11-22",
      readTime: "6 دقائق للقراءة",
      featured: true,
      tags: ["سفر", "رحلات", "تصوير"]
    },

    {
      id: 22,
      slug: "color-theory-photography",
      title: "نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",
      excerpt: "تعلم أساسيات نظرية الألوان وكيفية استخدامها لصناعة صور متناسقة ومؤثرة.",
      content: "الألوان عنصر أساسي في الصورة ويمكن استخدامها لصناعة التباين والتوازن والمشاعر.",
      category: "تقنيات",
      author: {
        name: "دحام الحسيني",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        role: "فنان بصري"
      },
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",
      date: "2025-11-20",
      readTime: "7 دقائق للقراءة",
      featured: false,
      tags: ["ألوان", "نظرية الألوان", "تكوين"]
    },

    {
      id: 23,
      slug: "newborn-baby-photography",
      title: "تصوير المواليد: فن التقاط البراءة",
      excerpt: "تعلم أساسيات تصوير المواليد وكيفية التعامل مع الإضاءة والخلفيات واللحظات الطبيعية.",
      content: "تصوير المواليد يحتاج إلى الهدوء والصبر والاهتمام بالتفاصيل والإضاءة الناعمة.",
      category: "بورتريه",
      author: {
        name: "نايف المطيري",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
        role: "مصور مواليد"
      },
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=400&fit=crop",
      date: "2025-11-18",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["مواليد", "أطفال", "بورتريه"]
    },

    {
      id: 24,
      slug: "real-estate-photography",
      title: "تصوير العقارات: كيف تجعل المنزل يبيع نفسه",
      excerpt: "تعلم تقنيات تصوير العقارات وإظهار المساحات والإضاءة والتفاصيل بأفضل شكل.",
      content: "التصوير العقاري يساعد على إبراز جمال المكان ومساحاته ويعد جزءاً مهماً من التسويق العقاري.",
      category: "تقنيات",
      author: {
        name: "عبدالله الغامدي",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور عقارات"
      },
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=400&fit=crop",
      date: "2025-11-15",
      readTime: "7 دقائق للقراءة",
      featured: false,
      tags: ["عقارات", "منازل", "تصوير داخلي"]
    },

    {
      id: 25,
      slug: "raw-vs-jpeg-explained",
      title: "RAW مقابل JPEG: متى تستخدم كلاً منهما",
      excerpt: "تعرف على الفرق بين RAW وJPEG ومتى يكون استخدام كل صيغة هو الخيار الأنسب.",
      content: "RAW وJPEG صيغتان شائعتان لحفظ الصور ولكل منهما مزايا واستخدامات مختلفة.",
      category: "معدات",
      author: {
        name: "كريم الفهد",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
        role: "خبير تقني"
      },
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=400&fit=crop",
      date: "2025-11-12",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["RAW", "JPEG", "صيغة الصور"]
    },

    {
      id: 26,
      slug: "self-portrait-photography",
      title: "تصوير البورتريه الذاتي: كن موضوعك الخاص",
      excerpt: "تعلم كيف تلتقط صور بورتريه ذاتية احترافية باستخدام الإضاءة والتركيب المناسب.",
      content: "البورتريه الذاتي يمنحك الحرية الكاملة في اختيار الفكرة والإضاءة والتعبير.",
      category: "بورتريه",
      author: {
        name: "سلطان الراجحي",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "فنان تصوير"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=400&fit=crop",
      date: "2025-11-10",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["بورتريه", "تصوير ذاتي", "إبداع"]
    },

    {
      id: 27,
      slug: "lens-guide-beginners",
      title: "دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",
      excerpt: "تعرف على أنواع العدسات الأساسية وكيف تختار العدسة المناسبة لأسلوب التصوير الخاص بك.",
      content: "اختيار العدسة المناسبة من أهم القرارات التي يتخذها المصور، ويعتمد الاختيار على نوع التصوير والنتيجة المطلوبة.",
      category: "معدات",
      author: {
        name: "فهد السبيعي",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        role: "مراجع معدات"
      },
      image: "https://images.unsplash.com/photo-1606986628253-5c2e0c4f0f3b?w=800&h=400&fit=crop",
      date: "2025-11-08",
      readTime: "8 دقائق للقراءة",
      featured: true,
      tags: ["عدسات", "معدات", "كاميرات"]
    },

    {
      id: 28,
      slug: "minimalist-photography",
      title: "التصوير البسيط (Minimalist): قوة الفراغ",
      excerpt: "اكتشف جمال التصوير البسيط وكيف يمكن استخدام المساحات الفارغة لصناعة صور قوية.",
      content: "التصوير البسيط يعتمد على إزالة العناصر غير الضرورية والتركيز على الموضوع الأساسي داخل الصورة.",
      category: "تقنيات",
      author: {
        name: "راشد الجاسر",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
        role: "فنان بصري"
      },
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=400&fit=crop",
      date: "2025-11-05",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["Minimalist", "بساطة", "تكوين"]
    }
  ],
   categories: [
    { name: 'إضاءة', count: 3, color: 'emerald' },
    { name: 'بورتريه', count: 3, color: 'purple' },
    { name: 'مناظر طبيعية', count: 2, color: 'blue' },
    { name: 'تقنيات', count: 5, color: 'orange' },
    { name: 'معدات', count: 3, color: 'emerald' }
  ],

  siteInfo: {
    name: 'عدسة',
    tagline: 'عالم التصوير الفوتوغرافي',
    description:
      'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.',
    email: 'hello@adasah.com',
    social: {
      twitter: 'https://twitter.com/adasah',
      github: 'https://github.com/adasah',
      linkedin: 'https://linkedin.com/company/adasah',
      youtube: 'https://youtube.com/@adasah'
    }
  }
}


