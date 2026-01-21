import { Metadata } from 'next'

import { getAboutUs } from '@lib/data/fetch'
import { Banner } from '@modules/content/components/banner'
import { BasicContentSection } from '@modules/content/components/basic-content-section'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet me, the artist behind Carmela Art. Discover the story of warmth, imagination, and visual storytelling.',
}

export default async function AboutUsPage() {
  const {
    data: { Banner: bannerData, OurStory },
  } = await getAboutUs()

  return (
    <>
      {OurStory && <BasicContentSection data={OurStory} />}
    </>
  )
}
