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
{
    slug: 'the-ultimate-ferrari-laferrari',
    date: '2026-07-09',
    eyebrow: '09/07/2026 in Car Stories',
    title: 'The Ultimate Ferrari',
    // excerpt:
    //   'LaFerrari means "the Ferrari." It was the first flagship Ferrari designed inside its own studio, and the first with an F1 style hybrid. Here is the story.',
    coverImage: '/LaFerrari-blog/Ferrari LaFerrari side-front.jpg',
    coverImageAlt: 'Red Ferrari LaFerrari, front three-quarter in the mountains',
    content: [
      {
        type: 'paragraph',
        text: 'Ferrari does not build a car like this often. Every couple of decades it puts everything it knows into one halo car, sells a tiny number of them, and lets that car define the era. The LaFerrari is the fifth. It arrived in 2013, and it was the first of these cars to use a hybrid system. It is also the first one Ferrari named after itself.',
      },
      {
        type: 'heading',
        text: 'The Name Says Everything',
      },
      {
        type: 'paragraph',
        text: 'LaFerrari means "the Ferrari." Not a code like F40 or a number like 288. Ferrari looked at this car and called it the definitive one. For more than sixty years, Ferrari road cars were styled by Pininfarina. The LaFerrari broke that. Ferrari ran a design contest between Pininfarina and its own studio, the Centro Stile, led by Flavio Manzoni, and management picked the Ferrari team\'s design. So the most important modern Ferrari was also the first flagship the company designed on its own.',
      },
      {
        type: 'image',
        src: '/LaFerrari-blog/Ferrari LaFerrari close-side-front.jpg',
        alt: 'Red LaFerrari front three-quarter, close side view',
      },
      {
        type: 'heading',
        text: 'Where It Sits in the Family',
      },
      {
        type: 'paragraph',
        text: 'The LaFerrari is the fifth in a bloodline of halo cars. It follows the 288 GTO and the F40, then the F50 and the Enzo. Each one was the best Ferrari could do at the time, and each one set the tone for the cars that came after it. When it launched, you could not simply buy one. Ferrari invited its most loyal owners, and only 499 coupes were made.',
      },
      {
        type: 'image',
        src: '/LaFerrari-blog/Ferrari LaFerrari front-doors.jpg',
        alt: 'Red LaFerrari with both doors open, front view',
      },
      {
        type: 'heading',
        text: 'The Engine and the Hybrid',
      },
      {
        type: 'paragraph',
        text: 'In the middle sits a 6.3 liter V12 making around 789 horsepower on its own, which is already a huge number for a naturally aspirated engine. Then there is the hybrid. An electric motor and battery add short bursts of extra power that push the total to about 950 horsepower, with 664 lb ft of torque combined. Top speed is around 220 mph. Zero to 60 comes in about 2.6 seconds. You cannot drive it on electricity alone. The system works like the KERS unit on a Formula 1 car. It captures energy that would normally be wasted under braking and hands it back as a shove of power when you want it.',
      },
      {
        type: 'image',
        src: '/LaFerrari-blog/Ferrari LaFerrari sky-front.jpg',
        alt: 'Red LaFerrari from above, cabin and rear deck',
      },
      {
        type: 'heading',
        text: 'The Details You Only Catch Up Close',
      },
      {
        type: 'paragraph',
        text: 'The mirrors look like little pods floating on stalks. The body is much wider than the cabin, so a normal mirror would sit too far away to be useful. Ferrari put them on long arms to bring them back into view, and only the mirror head folds in while the carbon fiber post stays fixed. Look at the door and you will spot the Ferrari shield sitting right on it. On almost every other Ferrari the shield lives on the front fender, but on this car there is no flat piece of fender to hold it.',
      },
      {
        type: 'image',
        src: '/LaFerrari-blog/Ferrari LaFerrari side-front-doors.jpg',
        alt: 'Red LaFerrari with doors open, side front view in the mountains',
      },
      {
        type: 'heading',
        text: 'Getting In',
      },
      {
        type: 'paragraph',
        text: 'There is no obvious door handle. You slide your hand up into the intake gap on the side of the car and pull the release hidden in there. Next to it is a keyhole, in case your fob battery dies. The door lifts up like a wing. Open it and you can see a wide gap between the door and the edge of the cabin, which tells you how much wider the outside of the car is than the space you sit in. Part of the reason the door is so deep is that it carries an air channel feeding that side intake.',
      },
      {
        type: 'image',
        src: '/LaFerrari-blog/Ferrari LaFerrari far-side-front.jpg',
        alt: 'Red LaFerrari on a mountain road above a village',
      },
      {
        type: 'heading',
        text: 'Inside',
      },
      {
        type: 'paragraph',
        text: 'The steering wheel is not round. It is closer to a square, which gives you a better place to hold on when you are working hard. The wheel carries the windshield controls and the drive mode selector, the turn signals are buttons on it, and there is a round red engine start button. The horn is the strange one. It is not in the center of the wheel but up near the top of one spoke. Ferrari does not want you taking your hands off the wheel when you do not have to, so the controls come to your thumbs instead. The seats are fixed to the tub, so the pedals move to you on a lever instead.',
      },
      {
        type: 'image',
        src: '/LaFerrari-blog/Ferrari LaFerrari rear.jpg',
        alt: 'Red LaFerrari rear three-quarter view',
      },
      {
        type: 'heading',
        text: 'Why It Matters',
      },
      {
        type: 'paragraph',
        text: 'The LaFerrari landed at a turning point. Hybrid power was arriving in racing and everyone knew it was coming to the road. Ferrari could have hidden that behind old ideas. Instead it built its definitive car around the new technology, styled it inside its own studio for the first time in decades, and put its own name on the result. A car that cost about 1.4 million dollars new now trades somewhere around 5 to 6 million.',
      },
      // {
      //   type: 'quote',
      //   text: 'They called it the Ferrari. After the 288 GTO, the F40, the F50 and the Enzo, this was the one that got the name.',
      // },
    ],
  },
  {
  slug: 'the-pagani-zonda-c12-how-one-man-built-his-dream',
  date: '2026-07-13',
  eyebrow: '13/07/2026 in Car Stories',
  title: 'The Pagani Zonda C12: How One Man Built His Dream',
  // excerpt: 'No racing history and no famous badge. Just Horacio Pagani, a workshop near Modena, and the first Zonda. Here is how the C12 came to be.',
  coverImage: '/Zonda-C12-blog/Pagani-Zonda-front.jpg',
  coverImageAlt: 'Silver Pagani Zonda C12 parked in a Modena piazza at sunset',
  content: [
    { type: 'paragraph', text: 'Some cars arrive with decades of racing behind them. The Pagani Zonda C12 arrived with none of that. No motorsport trophies. No famous badge. Just one man, a small workshop near Modena, and a promise that art and engineering belong in the same object. When it debuted at the 1999 Geneva Motor Show, it made everyone else look outdated.' },
    { type: 'heading', text: 'The man before the car' },
    { type: 'paragraph', text: 'Horacio Pagani was born in Casilda, a small town in Argentina, in 1955. As a kid he built things. A minibike from scrap parts at fourteen. A dune buggy out of a wrecked Renault while he was still in school. He studied engineering and art, and he never really saw them as separate subjects. He liked to quote Leonardo da Vinci, who believed art and science could walk hand in hand. That idea became the whole point of Pagani the company.' },
    { type: 'paragraph', text: 'In his twenties he built his own single seat race car and caught the attention of Juan Manuel Fangio, the five time Formula One champion and fellow Argentine. Fangio became a mentor and opened doors. His recommendation letters helped Pagani get to Italy, the home of the exotic car. In 1983 Pagani took a job at Lamborghini, started near the bottom, and worked up to running the new composite materials group.' },
    { type: 'paragraph', text: 'Then came the disagreement that started everything. Pagani wanted Lamborghini to buy an autoclave, the oven used to cure carbon fiber parts in house. Lamborghini said no. So he bought his own. He left in 1991 and founded Modena Design, making carbon parts for other manufacturers. Pagani Automobili followed in 1992. The goal was always to build a car with his own name on the back.' },
    { type: 'image', src: '/Zonda-C12-blog/Pagani-Zonda-side.jpg', alt: 'Silver Pagani Zonda C12 side profile in front of a Modena palazzo' },
    { type: 'heading', text: 'Naming the car' },
    { type: 'paragraph', text: 'The project began under the name Fangio F1, a tribute to his friend and mentor. When Fangio passed away in 1995, Pagani dropped the tribute name out of respect. The car became the Zonda instead, named after the warm, dry wind that flows down from the Andes in Argentina. The C stands for Cristina, his wife. The 12 is the cylinder count. Simple, and personal.' },
    { type: 'heading', text: 'Six years to first light' },
    { type: 'paragraph', text: 'Pagani spent six years developing the car. He put in his own money and reportedly remortgaged his house to keep it alive. Many people doubted a small, unknown shop could take on Ferrari and Lamborghini. He had one real advantage, and it was carbon fiber. While most of the industry still leaned on steel and aluminum, Pagani built the Zonda around a full carbon composite tub. The design borrowed from the Sauber-Mercedes Group C racers of the late 1980s, the silver cars that dominated sports car racing.' },
    { type: 'heading', text: 'The engine' },
    { type: 'paragraph', text: 'Pagani wanted a Mercedes V12, and he got one. The C12 uses the M120, a naturally aspirated 6.0 liter V12 supplied by AMG. In the original C12 the motor produces around 394 horsepower and 420 lb ft of torque, sent to the rear wheels through a manual gearbox. Three pedals and a proper gated shifter. Pagani cared more about how the engine sounded than about chasing the biggest power figure, and that priority set the tone for every Zonda that followed.' },
    { type: 'image', src: '/Zonda-C12-blog/Pagani-Zonda-rear.jpg', alt: 'Rear of the silver Pagani Zonda C12 showing the four central exhaust pipes' },
    { type: 'heading', text: 'The way it looks' },
    { type: 'paragraph', text: 'The body is carbon fiber, formed in as few pieces as possible. The front and rear clamshells lift at each end and are held down with leather straps, a signature Pagani touch. The nose carries two pairs of round headlights in exposed carbon surrounds. At the back sits the feature everyone remembers. Four exhaust pipes stacked in a tight circle in the center of the tail, ringed by mesh. On the original C12 the rear wing is a single piece unit. The later C12 S introduced the split wing.' },
    { type: 'heading', text: 'How few there are' },
    { type: 'paragraph', text: 'Only five C12 cars were built with the 6.0 liter engine. One was used for crash testing and homologation. One served as the demonstrator and show car. The rest went to customers. Three were painted silver in tribute to the Mercedes Group C racers. One was left in exposed carbon. One was yellow. Demand was far bigger than five, and that interest is what kept the company alive and led straight to the C12 S, the F, the Cinque, the R, and everything since.' },
    { type: 'heading', text: 'Chassis 001 lives again' },
    { type: 'paragraph', text: 'The very first C12, chassis 001, was the car sacrificed to the crash test barrier so the model could be certified for the road. It was not thrown away. For the Zonda twentieth anniversary in 2019, Pagani in house restoration program, Pagani Rinascimento, rebuilt it and showed it again at the Geneva Motor Show, on the same stage where the Zonda first appeared in 1999.' },
    { type: 'paragraph', text: 'The Zonda C12 is proof that a single person with a clear idea can build something the giants cannot. It paired cutting edge carbon fiber with leather straps and hand stitched seats, and made that combination feel natural. Everything Pagani sells today grew from this car.' },
  ],
}
]

/**
 * Helper: get a single post by slug
 */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
