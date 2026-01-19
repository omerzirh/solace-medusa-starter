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
      Headline: 'Welcome to Solace',
      Text: 'Discover our premium collection of furniture.',
      CTA: {
        id: 1,
        BtnText: 'Shop Now',
        BtnLink: '/store',
      },
      Image: {
        url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80',
        alternativeText: 'Hero Banner',
      },
    },
  },
}

export const MOCK_MID_BANNER: MidBannerData = {
  data: {
    MidBanner: {
      Headline: 'New Arrivals',
      Text: 'Check out our latest additions.',
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
      Title: 'Our Story',
      Text: 'Solace was born from the idea that furniture should be both beautiful and functional.',
      Image: {
        id: 1,
        name: 'story',
        width: 800,
        height: 600,
        size: 100,
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
        alternativeText: 'Our Story',
      },
    },
    WhyUs: {
      id: 1,
      Title: 'Why Choose Us?',
      Tile: [
        {
          id: 1,
          Title: 'Quality',
          Text: 'We use only the finest materials.',
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
      Title: 'Craftsmanship',
      Text: 'Every piece is handmade with care.',
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
            Text: 'Yes, we ship to most countries.',
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
  Title: 'Example Post',
  Slug: 'example-post',
  Content: 'This is an example blog post.',
  FeaturedImage: {
    url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80',
    alternativeText: 'Example',
  },
  createdAt: new Date().toISOString(),
}
