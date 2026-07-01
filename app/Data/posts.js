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
    // excerpt:
    //   'The McLaren F1 was built around one idea: the driver comes first. Here\'s how a small team turned that into the best car of the 20th century.',
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
    ],
  },
]

/**
 * Helper: get a single post by slug
 */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
