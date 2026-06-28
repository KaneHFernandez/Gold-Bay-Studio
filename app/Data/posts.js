/**
 * Blog Posts Data
 *
 * To add a new post:
 * 1. Copy one of the objects below
 * 2. Give it a unique `slug` (used in the URL: /blog/your-slug)
 * 3. Fill in the fields
 * 4. Add content blocks in the `content` array:
 *    - { type: 'heading', text: '...' }
 *    - { type: 'paragraph', text: '...' }
 *    - { type: 'image', src: '/img/your-image.jpg', alt: 'description' }
 *    - { type: 'quote', text: '...' }
 */

export const posts = [
  // {
  //   slug: 'lamborghini-countach',
  //   date: '2025-01-15',
  //   eyebrow: '16/06/2026 in Market and Auction',
  //   title: 'THE LAST HOPE',
  //   // excerpt:
  //   //   'Most automotive lifestyle brands have websites that look good but convert at under 1%. Here\'s what\'s actually going wrong.',
  //   coverImage: "/Lamborghini Countach.jpg",
  //   coverImageAlt: 'Supercar on track',
  //   content: [
  //     {
  //       type: 'paragraph',
  //       text: 'The average website in the luxury automotive space converts at 0.2–0.5%. That means for every 1,000 visitors, fewer than 5 people reach out. If your site is getting traffic but not leads, the design isn\'t the problem — the strategy is.',
  //     },
  //     {
  //       type: 'heading',
  //       text: 'The Real Problem: No Clear Path',
  //     },
  //     {
  //       type: 'paragraph',
  //       text: 'Visitors land on your site and immediately face a decision: scroll, click a menu item, or leave. Without a clear visual hierarchy that guides them toward one specific action, most choose the easiest option — leaving.',
  //     },
  //     {
  //       type: 'image',
  //       src: "/Mcalren F1 close-front-duo.jpg",
  //       alt: 'Website conversion path diagram',
  //     },
  //     {
  //       type: 'heading',
  //       text: 'What a Strategy-Backed Site Looks Like',
  //     },
  //     {
  //       type: 'paragraph',
  //       text: 'Every section on the page has a job. The hero qualifies the visitor. The social proof builds trust. The services section clarifies what you offer. And the CTA makes the next step obvious. When each section does its job, conversion rates climb.',
  //     },
  //     {
  //       type: 'quote',
  //       text: 'We took a local business from 0.2% to 6.99% conversion in 30 days — not by redesigning the visuals, but by redesigning the strategy.',
  //     },
  //   ],
  // },
  // {
  //   slug: 'mclaren-720s',
  //   date: '2025-01-15',
  //   eyebrow: '16/06/2026 in Market and Auction',
  //   title: 'MCLAREN RACING PEAK',
  //   // excerpt:
  //   //   'Most automotive lifestyle brands have websites that look good but convert at under 1%. Here\'s what\'s actually going wrong.',
  //   coverImage: "/Mclaren 720s.jpg",
  //   coverImageAlt: 'Supercar on track',
  //   content: [
  //     {
  //       type: 'paragraph',
  //       text: 'The average website in the luxury automotive space converts at 0.2–0.5%. That means for every 1,000 visitors, fewer than 5 people reach out. If your site is getting traffic but not leads, the design isn\'t the problem — the strategy is.',
  //     },
  //     {
  //       type: 'heading',
  //       text: 'The Real Problem: No Clear Path',
  //     },
  //     {
  //       type: 'paragraph',
  //       text: 'Visitors land on your site and immediately face a decision: scroll, click a menu item, or leave. Without a clear visual hierarchy that guides them toward one specific action, most choose the easiest option — leaving.',
  //     },
  //     {
  //       type: 'image',
  //       src: "/Mcalren F1 close-front-duo.jpg",
  //       alt: 'Website conversion path diagram',
  //     },
  //     {
  //       type: 'heading',
  //       text: 'What a Strategy-Backed Site Looks Like',
  //     },
  //     {
  //       type: 'paragraph',
  //       text: 'Every section on the page has a job. The hero qualifies the visitor. The social proof builds trust. The services section clarifies what you offer. And the CTA makes the next step obvious. When each section does its job, conversion rates climb.',
  //     },
  //     {
  //       type: 'quote',
  //       text: 'We took a local business from 0.2% to 6.99% conversion in 30 days — not by redesigning the visuals, but by redesigning the strategy.',
  //     },
  //   ],
  // },
  //  {
  //   slug: 'porsche-917',
  //   date: '2025-01-15',
  //   eyebrow: '16/06/2026 in Market and Auction',
  //   title: 'THE LAST PORSCHE',
  //   // excerpt:
  //   //   'Most automotive lifestyle brands have websites that look good but convert at under 1%. Here\'s what\'s actually going wrong.',
  //   coverImage: "/Porsche 917.jpg",
  //   coverImageAlt: 'Supercar on track',
  //   content: [
  //     {
  //       type: 'paragraph',
  //       text: 'The average website in the luxury automotive space converts at 0.2–0.5%. That means for every 1,000 visitors, fewer than 5 people reach out. If your site is getting traffic but not leads, the design isn\'t the problem — the strategy is.',
  //     },
  //     {
  //       type: 'heading',
  //       text: 'The Real Problem: No Clear Path',
  //     },
  //     {
  //       type: 'paragraph',
  //       text: 'Visitors land on your site and immediately face a decision: scroll, click a menu item, or leave. Without a clear visual hierarchy that guides them toward one specific action, most choose the easiest option — leaving.',
  //     },
  //     {
  //       type: 'image',
  //       src: "/Mcalren F1 close-front-duo.jpg",
  //       alt: 'Website conversion path diagram',
  //     },
  //     {
  //       type: 'heading',
  //       text: 'What a Strategy-Backed Site Looks Like',
  //     },
  //     {
  //       type: 'paragraph',
  //       text: 'Every section on the page has a job. The hero qualifies the visitor. The social proof builds trust. The services section clarifies what you offer. And the CTA makes the next step obvious. When each section does its job, conversion rates climb.',
  //     },
  //     {
  //       type: 'quote',
  //       text: 'We took a local business from 0.2% to 6.99% conversion in 30 days — not by redesigning the visuals, but by redesigning the strategy.',
  //     },
  //   ],
  // },
]

/**
 * Helper: get a single post by slug
 */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
