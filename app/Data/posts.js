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
  {
    slug: 'the-de-tomaso-p72-explained',
    date: '2026-07-07',
    eyebrow: '07/07/2026 in Car Stories',
    title: 'The De Tomaso P72, Explained',
    // excerpt:
    //   'De Tomaso is back. The P72 is a 1.8 million dollar supercar with three pedals, no touchscreen and a supercharged Ford V8. Only 72 will be made.',
    coverImage: '/De-Tomaso-P72-blog/De Tomaso P72 front-doors.jpg',
    coverImageAlt: 'Light blue De Tomaso P72 with both doors open',
    content: [
      {
        type: 'paragraph',
        text: 'Most new supercars are in a numbers race with each other. The De Tomaso P72 walks the other way. It has three pedals and a gated shifter. There is no touchscreen. The factory exhaust is capped at a polite 63 decibels. It costs around 1.6 million euros, which lands close to 1.8 million dollars, and only 72 will be made. It is expensive and slow to build and it feels like it came from another era. That is the whole point.',
      },
      {
        type: 'heading',
        text: 'The Name Has More History Than Most People Know',
      },
      {
        type: 'paragraph',
        text: 'De Tomaso is an Italian brand with an Argentine heart. It was founded in Modena in 1959 by Alejandro de Tomaso, an Argentine racing driver who left Buenos Aires after getting tangled up in politics against Juan Perón and settled in Italy. He gave the world the Pantera and the Mangusta, both of them powered by Ford. That Argentine root is why the P72 badge is blue and white, the colors of the flag, milled from solid aluminum.',
      },
      {
        type: 'image',
        src: '/De-Tomaso-P72-blog/De Tomaso P72 front.jpg',
        alt: 'De Tomaso P72 front three-quarter view',
      },
      {
        type: 'heading',
        text: 'The Car It Is Pretending to Be',
      },
      {
        type: 'paragraph',
        text: 'The P72 is an homage to the 1965 De Tomaso P70. The P70 has one of the great what if stories in racing. Alejandro de Tomaso developed it with Carroll Shelby, the Texan behind the Cobra and the GT40 program. The plan was a De Tomaso chassis with Shelby power. The partnership fell apart before it amounted to much. So the P72 is not just styled after an old prototype. It finishes a sentence that got cut off sixty years ago.',
      },
      {
        type: 'heading',
        text: 'The Man Who Brought It Back',
      },
      {
        type: 'paragraph',
        text: 'The modern De Tomaso exists because of Norman Choi, a Hong Kong businessman who acquired the marque in 2014. He is a serial supercar owner, and a lot of the P72\'s stubbornness comes from him. He describes the car as a moving theater. He is the reason there are no paddle shifters. He even specified the supercharger pulley to whine as little as possible, because he wanted a blown engine that still sounds naturally aspirated.',
      },
      {
        type: 'image',
        src: '/De-Tomaso-P72-blog/De Tomaso P72 rear-drive.jpg',
        alt: 'De Tomaso P72 driving past the lake',
      },
      {
        type: 'heading',
        text: 'The Look',
      },
      {
        type: 'paragraph',
        text: 'The body was drawn by Jowyn Wong of Wyn Design, who came out of McLaren and also penned the Apollo Intensa Emozione. Every panel is carbon fiber. The main reference was the 1965 P70, but you can also catch the Ferrari 330 P3 in the surfaces, plus the Lola T70 and the original Porsche 917. The whole shape is built around low drag, so it reads as one clean piece. There are no popup aero elements and no air brake. Lead designer Jakub Jodlowski has said the roofline sits so low that regulations would not allow it in a few years.',
      },
      {
        type: 'heading',
        text: 'The Engine, and Why It Is "Only" 700 Horsepower',
      },
      {
        type: 'paragraph',
        text: 'Like the Pantera and Mangusta before it, the P72 runs Ford power. In the middle sits a 5.0 liter Coyote V8, heavily reworked by Roush and topped with a bespoke supercharger. It makes about 700 horsepower and roughly 605 lb ft of torque. The engineers say only the block is still recognizably American. By 2025 standards that is modest, and Choi is fine with it. He sees the P72 as a timepiece meant to be passed down, so it has to stay reliable and easy to maintain for decades. A proven Ford V8 does that in a way a highly strung V12 does not.',
      },
      {
        type: 'image',
        src: '/De-Tomaso-P72-blog/De Tomaso P72 rear.jpg',
        alt: 'De Tomaso P72 rear three-quarter view by the lake',
      },
      {
        type: 'heading',
        text: 'Who Actually Builds It',
      },
      {
        type: 'paragraph',
        text: 'The P72 is assembled in Affalterbach, Germany, by HWA. HWA was founded by Hans Werner Aufrecht, the "A" in AMG, and it works out of the same small town where AMG grew up. So the final recipe is unusual. The heritage is Italian and Argentine. The power is American. The design came from a team trained in Britain. The engineering and the build are German. Only 72 will be made.',
      },
      {
        type: 'quote',
        text: '"Sometimes it is nice to be on the fast lane, but sometimes it is also very nice to be on the slow one just to enjoy the moment." - Norman Choi',
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
