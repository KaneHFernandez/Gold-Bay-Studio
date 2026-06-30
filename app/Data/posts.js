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
  {
    slug: 'how-mclaren-created-the-perfect-drivers-car',
    date: '2026-06-30',
    eyebrow: '30/06/2026 in Car Stories',
    title: 'How McLaren Created the Perfect Driver\'s Car',
    excerpt:
      'The McLaren F1 was built around one idea: the driver comes first. Here\'s how a small team turned that into the best car of the 20th century.',
    coverImage: '/Mclaren-F1-blog/Mcalren F1 front-single.jpg',
    coverImageAlt: 'McLaren F1 front view',
    content: [
      {
        type: 'paragraph',
        text: 'McLaren made its name on the track. Decades of racing built a reputation as a technical leader, the kind of team that solved problems other people said could not be solved. So when McLaren set out to build a road car, it was never going to be ordinary. It aimed to build the best car in the world, and most people who know cars will tell you it did exactly that.',
      },
      {
        type: 'heading',
        text: 'The Idea Behind It',
      },
      {
        type: 'paragraph',
        text: 'The F1 started with one man\'s vision. Gordon Murray wanted a car that was perfect on engineering and perfect as a driver\'s car. That is why the driver sits in the middle, with two passenger seats set slightly back on either side. It puts you at the heart of the car, the way a single-seater race car does.',
      },
      {
        type: 'image',
        src: '/Mclaren-F1-blog/Mcalren F1 side-driving.jpg',
        alt: 'McLaren F1 driving, side profile',
      },
      {
        type: 'heading',
        text: 'No Driver Aids, On Purpose',
      },
      {
        type: 'paragraph',
        text: 'Murray believed anything you put between the tires and the driver\'s hands and feet takes something away from the experience. So the F1 has no power steering, no brake assist, no traction control, and no semi-automatic gearbox. They considered all of it and turned it down.',
      },
      {
        type: 'heading',
        text: 'The Engine',
      },
      {
        type: 'paragraph',
        text: 'Murray refused to compromise on the heart of the car. He wanted a naturally aspirated V12, and he set a target nobody had hit in a production car before: 100 horsepower per litre. BMW Motorsport and engine legend Paul Rosche built a custom 6.1 litre V12 just for the F1. It produced around 620 horsepower and 479 lb-ft of torque, and pulled cleanly from low in the rev range.',
      },
      {
        type: 'image',
        src: '/Mclaren-F1-blog/Mcalren F1 rear-sky.jpg',
        alt: 'McLaren F1 rear view',
      },
      {
        type: 'heading',
        text: 'Built From the Inside Out',
      },
      {
        type: 'paragraph',
        text: 'Most cars are designed from the outside in. The F1 was the opposite. The team started with the driver and worked outward, fitting a V12, three seats, air conditioning and luggage space into a package that still came in around a ton. Every material was chosen for a reason. The engine bay runs so hot that they lined it with gold foil, because gold was simply the best material for reflecting that heat.',
      },
      {
        type: 'heading',
        text: 'The Record',
      },
      {
        type: 'paragraph',
        text: 'On 31 March 1998, test driver Andy Wallace took the F1 to an independently measured 240.1 mph, making it the fastest production car in the world. That record held for about seven years. No naturally aspirated production car has beaten it since.',
      },
      {
        type: 'image',
        src: '/Mclaren-F1-blog/Mcalren F1 front-side-driving copy.jpg',
        alt: 'McLaren F1 front side, driving',
      },
      {
        type: 'quote',
        text: 'It was stable enough that I could walk by the side of it. The best car ever built.',
      },
    ],
  },
  {
    slug: 'why-your-website-is-losing-leads',
    date: '2025-01-15',
    eyebrow: 'Strategy',
    title: 'Why Your Website Is Losing Qualified Leads (And How to Fix It)',
    excerpt:
      'Most automotive lifestyle brands have websites that look good but convert at under 1%. Here\'s what\'s actually going wrong.',
    coverImage: '/img/blog/cover-losing-leads.jpg',
    coverImageAlt: 'Supercar on track',
    content: [
      {
        type: 'paragraph',
        text: 'The average website in the luxury automotive space converts at 0.2–0.5%. That means for every 1,000 visitors, fewer than 5 people reach out. If your site is getting traffic but not leads, the design isn\'t the problem — the strategy is.',
      },
      {
        type: 'heading',
        text: 'The Real Problem: No Clear Path',
      },
      {
        type: 'paragraph',
        text: 'Visitors land on your site and immediately face a decision: scroll, click a menu item, or leave. Without a clear visual hierarchy that guides them toward one specific action, most choose the easiest option — leaving.',
      },
      {
        type: 'image',
        src: '/img/blog/conversion-path.jpg',
        alt: 'Website conversion path diagram',
      },
      {
        type: 'heading',
        text: 'What a Strategy-Backed Site Looks Like',
      },
      {
        type: 'paragraph',
        text: 'Every section on the page has a job. The hero qualifies the visitor. The social proof builds trust. The services section clarifies what you offer. And the CTA makes the next step obvious. When each section does its job, conversion rates climb.',
      },
      {
        type: 'quote',
        text: 'We took a local business from 0.2% to 6.99% conversion in 30 days — not by redesigning the visuals, but by redesigning the strategy.',
      },
    ],
  },
  {
    slug: 'what-qualified-leads-actually-look-like',
    date: '2025-02-03',
    eyebrow: 'Lead Generation',
    title: 'What Qualified Leads Actually Look Like for Automotive Lifestyle Brands',
    excerpt:
      'Not all enquiries are worth your time. Here\'s how to attract people who are already pre-sold before they reach out.',
    coverImage: '/img/blog/cover-qualified-leads.jpg',
    coverImageAlt: 'Driver in supercar',
    content: [
      {
        type: 'paragraph',
        text: 'A qualified lead already knows what you offer, believes it\'s worth the price, and is ready to take the next step. The goal of your website isn\'t to explain what you do — it\'s to confirm that you\'re the right choice.',
      },
      {
        type: 'heading',
        text: 'Filtering at the Top',
      },
      {
        type: 'paragraph',
        text: 'Your hero section is a filter, not an introduction. It should speak directly to your ideal customer and subtly repel everyone else. Vague headlines attract curious browsers. Specific headlines attract serious buyers.',
      },
      {
        type: 'image',
        src: '/img/blog/hero-example.jpg',
        alt: 'Example of a high-converting hero section',
      },
    ],
  },
]

/**
 * Helper: get a single post by slug
 */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
