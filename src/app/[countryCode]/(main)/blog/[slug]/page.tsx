import { notFound } from 'next/navigation'

import { getAllBlogSlugs, getBlogPostBySlug } from '@lib/data/fetch'
import { listRegions } from '@lib/data/regions'
import { StoreRegion } from '@medusajs/types'
import BlogPostTemplate from '@modules/blog/templates/blogPostTemplate'

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs().catch(() => [])

  if (!slugs || slugs.length === 0) {
    return []
  }

  let countryCodes: string[] = []

  try {
    const regions = await listRegions()
    if (regions) {
      countryCodes = regions
        .map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter((c) => !!c) as string[]
    }
  } catch (error) {
    console.warn(
      'Failed to fetch regions during static param generation. Skipping static generation for blog posts.'
    )
  }

  if (countryCodes.length === 0) {
    return []
  }

  return slugs.flatMap((slug) =>
    countryCodes.map((countryCode) => ({
      slug,
      countryCode,
    }))
  )
}

export async function generateMetadata(props) {
  const params = await props.params
  const article = await getBlogPostBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.Title,
  }
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string; countryCode: string }>
}) {
  const params = await props.params
  const { slug, countryCode } = params
  const article = await getBlogPostBySlug(slug)

  if (!article) {
    notFound()
  }

  return <BlogPostTemplate article={article} countryCode={countryCode} />
}
