import {
  AboutUsData,
  BlogData,
  CollectionsData,
  ContentPageData,
  FAQData,
  HeroBannerData,
  MidBannerData,
  VariantColorData,
  BlogPost,
} from 'types/strapi'

export const MOCK_HERO_BANNER: HeroBannerData = {
  data: {
    HeroBanner: {
      Headline: 'Welcome to Carmela Art',
      Text: 'Discover exquisite artworks that bring beauty to your space.',
      CTA: {
        id: 1,
        BtnText: 'Shop Now',
        BtnLink: '/store',
      },
      Image: {
        url: 'https://ugkfivuhxnkmtcbdfiox.supabase.co/storage/v1/object/public/carmelart/Gemini_Generated_Image_8rqajm8rqajm8rqa.png',
        alternativeText: 'Hero Banner',
      },
    },
  },
}

export const MOCK_MID_BANNER: MidBannerData = {
  data: {
    MidBanner: {
      Headline: 'New Artworks',
      Text: 'Explore our latest artistic creations.',
      CTA: {
        id: 1,
        BtnText: 'View Collection',
        BtnLink: '/store',
      },
      Image: {
        url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80',
        alternativeText: 'Mid Banner',
      },
    },
  },
}

export const MOCK_COLLECTIONS: CollectionsData = {
  data: [],
}

export const MOCK_BLOG_DATA: BlogData = {
  data: [],
  meta: {
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 1,
      total: 0,
    },
  },
}

export const MOCK_VARIANT_COLORS: VariantColorData = {
  data: [
    {
      id: 1,
      Name: 'Black',
      Type: [{ Color: '#000000' }],
    },
    {
      id: 2,
      Name: 'White',
      Type: [{ Color: '#FFFFFF' }],
    },
    {
      id: 3,
      Name: 'Blue',
      Type: [{ Color: '#0000FF' }],
    },
  ],
}

export const MOCK_ABOUT_US: AboutUsData = {
  data: {
    id: 1,
    documentId: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    locale: 'en',
    Banner: [],
    OurStory: {
      id: 1,
      Title: 'Meet Zeynep',
      Text: "I’m Zeynep, a 27-year-old freelance illustrator with a heart full of stories and hands ready to bring them to life. My work is a celebration of warmth and imagination, crafting vibrant illustrations that do more than just decorate—they speak. From the whimsical pages of children's books to the curated corners of interior design, my focus is on visual storytelling that resonates. I create with a singular intention: to set a mood, inspire creativity, and infuse your space with a distinct, artistic soul that feels uniquely yours.",
      Image: {
        id: 1,
        name: 'story',
        width: 800,
        height: 600,
        size: 100,
        url: 'https://ugkfivuhxnkmtcbdfiox.supabase.co/storage/v1/object/public/carmelart/zey-logo.jpg',
        alternativeText: 'Our Story',
      },
    },
    WhyUs: {
      id: 1,
      Title: 'Why Choose Us?',
      Tile: [
        {
          id: 1,
          Title: 'Authentic Art',
          Text: 'Every piece is carefully curated for quality and authenticity.',
          Image: {
            id: 2,
            name: 'quality',
            width: 100,
            height: 100,
            size: 10,
            url: '',
            alternativeText: 'Quality',
          },
        },
      ],
    },
    OurCraftsmanship: {
      id: 1,
      Title: 'Artistry',
      Text: 'Each artwork is selected for its unique character and artistic excellence.',
      Image: {
        id: 3,
        name: 'craft',
        width: 800,
        height: 600,
        size: 100,
        url: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&q=80',
        alternativeText: 'Craftsmanship',
      },
    },
    Numbers: [],
  },
}

export const MOCK_FAQ: FAQData = {
  data: {
    FAQSection: [
      {
        id: 1,
        Title: 'Shipping',
        Bookmark: 'shipping',
        Question: [
          {
            id: 1,
            Title: 'Do you ship internationally?',
            Text: 'Yes, we carefully ship artworks worldwide with secure packaging.',
          },
        ],
      },
    ],
  },
}

export const MOCK_CONTENT_PAGE: ContentPageData = {
  data: {
    id: 1,
    documentId: '1',
    PageContent: '<h1>Policy</h1><p>This is a placeholder policy page.</p>',
  },
}

export const MOCK_BLOG_POST: BlogPost = {
  Title: 'The Art of Collecting',
  Slug: 'art-of-collecting',
  Content: 'Discover tips and insights about building your art collection.',
  FeaturedImage: {
    url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80',
    alternativeText: 'Example',
  },
  createdAt: new Date().toISOString(),
}
