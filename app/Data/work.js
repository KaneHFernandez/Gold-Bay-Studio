/**
 * Data/work.js
 * One object per project. Order here = order on /work.
 *
 * slug         → URL: /work/[slug]  (lowercase, hyphens)
 * title        → heading on the project page
 * description  → array of paragraphs (each string = one paragraph)
 * thumbnail    → image shown on the /work grid
 * images       → carousel images on the project page (484.8 × 605.55 each)
 *
 * Put image files in /public/work/[slug]/ and reference them as "/work/...".
 */
export const work = [
  {
slug: 'porsche-club-of-america-logo-redesign',
title: 'Porsche Club Of America Spec Logo Redesign',
    thumbnail: '/PCA-Presentation/PCA-Logo-Redesign-Back.png',
    thumbnailAlt: 'Porsche Club of America crest redesign',
    description: [
      'Gold Bay presents a self initiated redesign of the Porsche Club Of America crest.',
      'We set ourselves one goal. Bring the PCA mark into the present without losing what members already recognize in it.',
      "We started by developing three directions. Each one is built around a historic Porsche livery and ties it back to the club's roots and its home country.",
      'One direction was chosen and taken further. It draws on the Porsche crest, the 917 "Hippie" livery, and the American flag. From there we developed a full set of colorways for real use: a default version, two mono versions, and a dark mode. The final mark was then placed in mockups to show how the crest would live in the physical world.',
      'Gold Bay led the concept and design from start to finish to build a crest that stays rooted in the club and draws on its history at the track.',
      'A self initiated concept. Gold Bay is not affiliated with or endorsed by Porsche Club of America.',
    ],
    images: [
      { src: '/PCA-Presentation/PCA-Logo-Redesign-Front.png', alt: 'PCA crest on white' },
      { src: '/PCA-Presentation/PCA-Logo-Redesign-Directions.png', alt: 'PCA colorways' },
      { src: '/PCA-Presentation/PCA-Logo-Redesign-Inspo.png', alt: 'PCA logo mockups' },
      { src: '/PCA-Presentation/PCA-Logo-Redesign-Colorway.png', alt: 'PCA crest on a 911' },
      { src: '/PCA-Presentation/PCA-Logo-Redesign-Mockup.png', alt: 'PCA crest on a 911' },
      { src: '/PCA-Presentation/PCA-Logo-Redesign-Back.png', alt: 'PCA crest on a 911' },
    ],
  },
  {
  slug: 'sonoma-raceway-website-refresh',
title: 'Sonoma Raceway Spec Website Refresh',
    thumbnail: '/Sonoma-Presentation/Sonoma-Website-Refresh-Home.png',
    thumbnailAlt: 'Sonoma Raceway website refresh home page',
    description: [
      'Gold Bay presents a self initiated refresh of the Sonoma Raceway website.',
      'We set ourselves one goal. Improve conversions, accessibility, and overall user experience without losing what already works for fans who visit every season.',
      'We started by studying circuit and raceway sites across the industry to see what works and what gets in the way, then carried the strongest patterns forward and left the rest behind.',
      'The refresh leads with the events and gives each one a clear, direct path to act on. Considered hierarchy and accessible design run throughout, so fans reach what they need without digging for it.',
      'Gold Bay led the concept and design from start to finish to build a site that puts the racing first and makes the next step obvious.',
      'A self initiated concept. Gold Bay is not affiliated with or endorsed by Sonoma Raceway.',
    ],
    images: [
      { src: '/Sonoma-Presentation/Sonoma-Website-Refresh-Home.png', alt: 'Sonoma Raceway home page' },
      { src: '/Sonoma-Presentation/Sonoma-Website-Refresh-Events.png', alt: 'Sonoma Raceway events page' },
      { src: '/Sonoma-Presentation/Sonoma-Website-Refresh-Mockup.png', alt: 'Sonoma Raceway site shown in a device mockup' },
    ],
  },
]

export function getWork(slug) {
  return work.find((item) => item.slug === slug)
}
