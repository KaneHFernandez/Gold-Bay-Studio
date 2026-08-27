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

// export const posts = [
//   {
//     slug: 'how-mclaren-created-the-perfect-drivers-car',
//     date: '2026-06-30',
//     eyebrow: '30/06/2026 in Car Stories',
//     title: 'How McLaren Created the Perfect Driver\'s Car',
//     // excerpt:
//     //   'The McLaren F1 was built around one idea: the driver comes first. Here\'s how a small team turned that into the best car of the 20th century.',
//     coverImage: '/Mclaren-F1-blog/Mcalren F1 front-single.jpg',
//     coverImageAlt: 'McLaren F1 front view',
//     content: [
//       {
//         type: 'paragraph',
//         text: 'McLaren made its name on the track. Decades of racing built a reputation as a technical leader, the kind of team that solved problems other people said could not be solved. So when McLaren set out to build a road car, it was never going to be ordinary. It aimed to build the best car in the world, and most people who know cars will tell you it did exactly that.',
//       },
//       {
//         type: 'heading',
//         text: 'The Idea Behind It',
//       },
//       {
//         type: 'paragraph',
//         text: 'The F1 started with one man\'s vision. Gordon Murray wanted a car that was perfect on engineering and perfect as a driver\'s car. That is why the driver sits in the middle, with two passenger seats set slightly back on either side. It puts you at the heart of the car, the way a single-seater race car does.',
//       },
//       {
//         type: 'image',
//         src: '/Mclaren-F1-blog/Mcalren F1 side-driving.jpg',
//         alt: 'McLaren F1 driving, side profile',
//       },
//       {
//         type: 'heading',
//         text: 'No Driver Aids, On Purpose',
//       },
//       {
//         type: 'paragraph',
//         text: 'Murray believed anything you put between the tires and the driver\'s hands and feet takes something away from the experience. So the F1 has no power steering, no brake assist, no traction control, and no semi-automatic gearbox. They considered all of it and turned it down.',
//       },
//       {
//         type: 'heading',
//         text: 'The Engine',
//       },
//       {
//         type: 'paragraph',
//         text: 'Murray refused to compromise on the heart of the car. He wanted a naturally aspirated V12, and he set a target nobody had hit in a production car before: 100 horsepower per litre. BMW Motorsport and engine legend Paul Rosche built a custom 6.1 litre V12 just for the F1. It produced around 620 horsepower and 479 lb-ft of torque, and pulled cleanly from low in the rev range.',
//       },
//       {
//         type: 'image',
//         src: '/Mclaren-F1-blog/Mcalren F1 rear-sky.jpg',
//         alt: 'McLaren F1 rear view',
//       },
//       {
//         type: 'heading',
//         text: 'Built From the Inside Out',
//       },
//       {
//         type: 'paragraph',
//         text: 'Most cars are designed from the outside in. The F1 was the opposite. The team started with the driver and worked outward, fitting a V12, three seats, air conditioning and luggage space into a package that still came in around a ton. Every material was chosen for a reason. The engine bay runs so hot that they lined it with gold foil, because gold was simply the best material for reflecting that heat.',
//       },
//       {
//         type: 'heading',
//         text: 'The Record',
//       },
//       {
//         type: 'paragraph',
//         text: 'On 31 March 1998, test driver Andy Wallace took the F1 to an independently measured 240.1 mph, making it the fastest production car in the world. That record held for about seven years. No naturally aspirated production car has beaten it since.',
//       },
//       {
//         type: 'image',
//         src: '/Mclaren-F1-blog/Mcalren F1 front-side-driving copy.jpg',
//         alt: 'McLaren F1 front side, driving',
//       },
//     ],
//   },
//   {
//     slug: 'the-de-tomaso-p72-explained',
//     date: '2026-07-07',
//     eyebrow: '07/07/2026 in Car Stories',
//     title: 'The De Tomaso P72, Explained',
//     // excerpt:
//     //   'De Tomaso is back. The P72 is a 1.8 million dollar supercar with three pedals, no touchscreen and a supercharged Ford V8. Only 72 will be made.',
//     coverImage: '/De-Tomaso-P72-blog/De Tomaso P72 front-doors.jpg',
//     coverImageAlt: 'Light blue De Tomaso P72 with both doors open',
//     content: [
//       {
//         type: 'paragraph',
//         text: 'Most new supercars are in a numbers race with each other. The De Tomaso P72 walks the other way. It has three pedals and a gated shifter. There is no touchscreen. The factory exhaust is capped at a polite 63 decibels. It costs around 1.6 million euros, which lands close to 1.8 million dollars, and only 72 will be made. It is expensive and slow to build and it feels like it came from another era. That is the whole point.',
//       },
//       {
//         type: 'heading',
//         text: 'The Name Has More History Than Most People Know',
//       },
//       {
//         type: 'paragraph',
//         text: 'De Tomaso is an Italian brand with an Argentine heart. It was founded in Modena in 1959 by Alejandro de Tomaso, an Argentine racing driver who left Buenos Aires after getting tangled up in politics against Juan Perón and settled in Italy. He gave the world the Pantera and the Mangusta, both of them powered by Ford. That Argentine root is why the P72 badge is blue and white, the colors of the flag, milled from solid aluminum.',
//       },
//       {
//         type: 'image',
//         src: '/De-Tomaso-P72-blog/De Tomaso P72 front.jpg',
//         alt: 'De Tomaso P72 front three-quarter view',
//       },
//       {
//         type: 'heading',
//         text: 'The Car It Is Pretending to Be',
//       },
//       {
//         type: 'paragraph',
//         text: 'The P72 is an homage to the 1965 De Tomaso P70. The P70 has one of the great what if stories in racing. Alejandro de Tomaso developed it with Carroll Shelby, the Texan behind the Cobra and the GT40 program. The plan was a De Tomaso chassis with Shelby power. The partnership fell apart before it amounted to much. So the P72 is not just styled after an old prototype. It finishes a sentence that got cut off sixty years ago.',
//       },
//       {
//         type: 'heading',
//         text: 'The Man Who Brought It Back',
//       },
//       {
//         type: 'paragraph',
//         text: 'The modern De Tomaso exists because of Norman Choi, a Hong Kong businessman who acquired the marque in 2014. He is a serial supercar owner, and a lot of the P72\'s stubbornness comes from him. He describes the car as a moving theater. He is the reason there are no paddle shifters. He even specified the supercharger pulley to whine as little as possible, because he wanted a blown engine that still sounds naturally aspirated.',
//       },
//       {
//         type: 'image',
//         src: '/De-Tomaso-P72-blog/De Tomaso P72 rear-drive.jpg',
//         alt: 'De Tomaso P72 driving past the lake',
//       },
//       {
//         type: 'heading',
//         text: 'The Look',
//       },
//       {
//         type: 'paragraph',
//         text: 'The body was drawn by Jowyn Wong of Wyn Design, who came out of McLaren and also penned the Apollo Intensa Emozione. Every panel is carbon fiber. The main reference was the 1965 P70, but you can also catch the Ferrari 330 P3 in the surfaces, plus the Lola T70 and the original Porsche 917. The whole shape is built around low drag, so it reads as one clean piece. There are no popup aero elements and no air brake. Lead designer Jakub Jodlowski has said the roofline sits so low that regulations would not allow it in a few years.',
//       },
//       {
//         type: 'heading',
//         text: 'The Engine, and Why It Is "Only" 700 Horsepower',
//       },
//       {
//         type: 'paragraph',
//         text: 'Like the Pantera and Mangusta before it, the P72 runs Ford power. In the middle sits a 5.0 liter Coyote V8, heavily reworked by Roush and topped with a bespoke supercharger. It makes about 700 horsepower and roughly 605 lb ft of torque. The engineers say only the block is still recognizably American. By 2025 standards that is modest, and Choi is fine with it. He sees the P72 as a timepiece meant to be passed down, so it has to stay reliable and easy to maintain for decades. A proven Ford V8 does that in a way a highly strung V12 does not.',
//       },
//       {
//         type: 'image',
//         src: '/De-Tomaso-P72-blog/De Tomaso P72 rear.jpg',
//         alt: 'De Tomaso P72 rear three-quarter view by the lake',
//       },
//       {
//         type: 'heading',
//         text: 'Who Actually Builds It',
//       },
//       {
//         type: 'paragraph',
//         text: 'The P72 is assembled in Affalterbach, Germany, by HWA. HWA was founded by Hans Werner Aufrecht, the "A" in AMG, and it works out of the same small town where AMG grew up. So the final recipe is unusual. The heritage is Italian and Argentine. The power is American. The design came from a team trained in Britain. The engineering and the build are German. Only 72 will be made.',
//       },
//       {
//         type: 'quote',
//         text: '"Sometimes it is nice to be on the fast lane, but sometimes it is also very nice to be on the slow one just to enjoy the moment." - Norman Choi',
//       },
//     ],
//   },
// {
//     slug: 'the-ultimate-ferrari-laferrari',
//     date: '2026-07-09',
//     eyebrow: '09/07/2026 in Car Stories',
//     title: 'The Ultimate Ferrari',
//     // excerpt:
//     //   'LaFerrari means "the Ferrari." It was the first flagship Ferrari designed inside its own studio, and the first with an F1 style hybrid. Here is the story.',
//     coverImage: '/LaFerrari-blog/Ferrari LaFerrari side-front.jpg',
//     coverImageAlt: 'Red Ferrari LaFerrari, front three-quarter in the mountains',
//     content: [
//       {
//         type: 'paragraph',
//         text: 'Ferrari does not build a car like this often. Every couple of decades it puts everything it knows into one halo car, sells a tiny number of them, and lets that car define the era. The LaFerrari is the fifth. It arrived in 2013, and it was the first of these cars to use a hybrid system. It is also the first one Ferrari named after itself.',
//       },
//       {
//         type: 'heading',
//         text: 'The Name Says Everything',
//       },
//       {
//         type: 'paragraph',
//         text: 'LaFerrari means "the Ferrari." Not a code like F40 or a number like 288. Ferrari looked at this car and called it the definitive one. For more than sixty years, Ferrari road cars were styled by Pininfarina. The LaFerrari broke that. Ferrari ran a design contest between Pininfarina and its own studio, the Centro Stile, led by Flavio Manzoni, and management picked the Ferrari team\'s design. So the most important modern Ferrari was also the first flagship the company designed on its own.',
//       },
//       {
//         type: 'image',
//         src: '/LaFerrari-blog/Ferrari LaFerrari close-side-front.jpg',
//         alt: 'Red LaFerrari front three-quarter, close side view',
//       },
//       {
//         type: 'heading',
//         text: 'Where It Sits in the Family',
//       },
//       {
//         type: 'paragraph',
//         text: 'The LaFerrari is the fifth in a bloodline of halo cars. It follows the 288 GTO and the F40, then the F50 and the Enzo. Each one was the best Ferrari could do at the time, and each one set the tone for the cars that came after it. When it launched, you could not simply buy one. Ferrari invited its most loyal owners, and only 499 coupes were made.',
//       },
//       {
//         type: 'image',
//         src: '/LaFerrari-blog/Ferrari LaFerrari front-doors.jpg',
//         alt: 'Red LaFerrari with both doors open, front view',
//       },
//       {
//         type: 'heading',
//         text: 'The Engine and the Hybrid',
//       },
//       {
//         type: 'paragraph',
//         text: 'In the middle sits a 6.3 liter V12 making around 789 horsepower on its own, which is already a huge number for a naturally aspirated engine. Then there is the hybrid. An electric motor and battery add short bursts of extra power that push the total to about 950 horsepower, with 664 lb ft of torque combined. Top speed is around 220 mph. Zero to 60 comes in about 2.6 seconds. You cannot drive it on electricity alone. The system works like the KERS unit on a Formula 1 car. It captures energy that would normally be wasted under braking and hands it back as a shove of power when you want it.',
//       },
//       {
//         type: 'image',
//         src: '/LaFerrari-blog/Ferrari LaFerrari sky-front.jpg',
//         alt: 'Red LaFerrari from above, cabin and rear deck',
//       },
//       {
//         type: 'heading',
//         text: 'The Details You Only Catch Up Close',
//       },
//       {
//         type: 'paragraph',
//         text: 'The mirrors look like little pods floating on stalks. The body is much wider than the cabin, so a normal mirror would sit too far away to be useful. Ferrari put them on long arms to bring them back into view, and only the mirror head folds in while the carbon fiber post stays fixed. Look at the door and you will spot the Ferrari shield sitting right on it. On almost every other Ferrari the shield lives on the front fender, but on this car there is no flat piece of fender to hold it.',
//       },
//       {
//         type: 'image',
//         src: '/LaFerrari-blog/Ferrari LaFerrari side-front-doors.jpg',
//         alt: 'Red LaFerrari with doors open, side front view in the mountains',
//       },
//       {
//         type: 'heading',
//         text: 'Getting In',
//       },
//       {
//         type: 'paragraph',
//         text: 'There is no obvious door handle. You slide your hand up into the intake gap on the side of the car and pull the release hidden in there. Next to it is a keyhole, in case your fob battery dies. The door lifts up like a wing. Open it and you can see a wide gap between the door and the edge of the cabin, which tells you how much wider the outside of the car is than the space you sit in. Part of the reason the door is so deep is that it carries an air channel feeding that side intake.',
//       },
//       {
//         type: 'image',
//         src: '/LaFerrari-blog/Ferrari LaFerrari far-side-front.jpg',
//         alt: 'Red LaFerrari on a mountain road above a village',
//       },
//       {
//         type: 'heading',
//         text: 'Inside',
//       },
//       {
//         type: 'paragraph',
//         text: 'The steering wheel is not round. It is closer to a square, which gives you a better place to hold on when you are working hard. The wheel carries the windshield controls and the drive mode selector, the turn signals are buttons on it, and there is a round red engine start button. The horn is the strange one. It is not in the center of the wheel but up near the top of one spoke. Ferrari does not want you taking your hands off the wheel when you do not have to, so the controls come to your thumbs instead. The seats are fixed to the tub, so the pedals move to you on a lever instead.',
//       },
//       {
//         type: 'image',
//         src: '/LaFerrari-blog/Ferrari LaFerrari rear.jpg',
//         alt: 'Red LaFerrari rear three-quarter view',
//       },
//       {
//         type: 'heading',
//         text: 'Why It Matters',
//       },
//       {
//         type: 'paragraph',
//         text: 'The LaFerrari landed at a turning point. Hybrid power was arriving in racing and everyone knew it was coming to the road. Ferrari could have hidden that behind old ideas. Instead it built its definitive car around the new technology, styled it inside its own studio for the first time in decades, and put its own name on the result. A car that cost about 1.4 million dollars new now trades somewhere around 5 to 6 million.',
//       },
//       // {
//       //   type: 'quote',
//       //   text: 'They called it the Ferrari. After the 288 GTO, the F40, the F50 and the Enzo, this was the one that got the name.',
//       // },
//     ],
//   },
//   {
//   slug: 'the-pagani-zonda-c12-how-one-man-built-his-dream',
//   date: '2026-07-13',
//   eyebrow: '13/07/2026 in Car Stories',
//   title: 'The Pagani Zonda C12: How One Man Built His Dream',
//   // excerpt: 'No racing history and no famous badge. Just Horacio Pagani, a workshop near Modena, and the first Zonda. Here is how the C12 came to be.',
//   coverImage: '/Zonda-C12-blog/Pagani-Zonda-front.jpg',
//   coverImageAlt: 'Silver Pagani Zonda C12 parked in a Modena piazza at sunset',
//   content: [
//     { type: 'paragraph', text: 'Some cars arrive with decades of racing behind them. The Pagani Zonda C12 arrived with none of that. No motorsport trophies. No famous badge. Just one man, a small workshop near Modena, and a promise that art and engineering belong in the same object. When it debuted at the 1999 Geneva Motor Show, it made everyone else look outdated.' },
//     { type: 'heading', text: 'The man before the car' },
//     { type: 'paragraph', text: 'Horacio Pagani was born in Casilda, a small town in Argentina, in 1955. As a kid he built things. A minibike from scrap parts at fourteen. A dune buggy out of a wrecked Renault while he was still in school. He studied engineering and art, and he never really saw them as separate subjects. He liked to quote Leonardo da Vinci, who believed art and science could walk hand in hand. That idea became the whole point of Pagani the company.' },
//     { type: 'paragraph', text: 'In his twenties he built his own single seat race car and caught the attention of Juan Manuel Fangio, the five time Formula One champion and fellow Argentine. Fangio became a mentor and opened doors. His recommendation letters helped Pagani get to Italy, the home of the exotic car. In 1983 Pagani took a job at Lamborghini, started near the bottom, and worked up to running the new composite materials group.' },
//     { type: 'paragraph', text: 'Then came the disagreement that started everything. Pagani wanted Lamborghini to buy an autoclave, the oven used to cure carbon fiber parts in house. Lamborghini said no. So he bought his own. He left in 1991 and founded Modena Design, making carbon parts for other manufacturers. Pagani Automobili followed in 1992. The goal was always to build a car with his own name on the back.' },
//     { type: 'image', src: '/Zonda-C12-blog/Pagani-Zonda-side.jpg', alt: 'Silver Pagani Zonda C12 side profile in front of a Modena palazzo' },
//     { type: 'heading', text: 'Naming the car' },
//     { type: 'paragraph', text: 'The project began under the name Fangio F1, a tribute to his friend and mentor. When Fangio passed away in 1995, Pagani dropped the tribute name out of respect. The car became the Zonda instead, named after the warm, dry wind that flows down from the Andes in Argentina. The C stands for Cristina, his wife. The 12 is the cylinder count. Simple, and personal.' },
//     { type: 'heading', text: 'Six years to first light' },
//     { type: 'paragraph', text: 'Pagani spent six years developing the car. He put in his own money and reportedly remortgaged his house to keep it alive. Many people doubted a small, unknown shop could take on Ferrari and Lamborghini. He had one real advantage, and it was carbon fiber. While most of the industry still leaned on steel and aluminum, Pagani built the Zonda around a full carbon composite tub. The design borrowed from the Sauber-Mercedes Group C racers of the late 1980s, the silver cars that dominated sports car racing.' },
//     { type: 'heading', text: 'The engine' },
//     { type: 'paragraph', text: 'Pagani wanted a Mercedes V12, and he got one. The C12 uses the M120, a naturally aspirated 6.0 liter V12 supplied by AMG. In the original C12 the motor produces around 394 horsepower and 420 lb ft of torque, sent to the rear wheels through a manual gearbox. Three pedals and a proper gated shifter. Pagani cared more about how the engine sounded than about chasing the biggest power figure, and that priority set the tone for every Zonda that followed.' },
//     { type: 'image', src: '/Zonda-C12-blog/Pagani-Zonda-rear.jpg', alt: 'Rear of the silver Pagani Zonda C12 showing the four central exhaust pipes' },
//     { type: 'heading', text: 'The way it looks' },
//     { type: 'paragraph', text: 'The body is carbon fiber, formed in as few pieces as possible. The front and rear clamshells lift at each end and are held down with leather straps, a signature Pagani touch. The nose carries two pairs of round headlights in exposed carbon surrounds. At the back sits the feature everyone remembers. Four exhaust pipes stacked in a tight circle in the center of the tail, ringed by mesh. On the original C12 the rear wing is a single piece unit. The later C12 S introduced the split wing.' },
//     { type: 'heading', text: 'How few there are' },
//     { type: 'paragraph', text: 'Only five C12 cars were built with the 6.0 liter engine. One was used for crash testing and homologation. One served as the demonstrator and show car. The rest went to customers. Three were painted silver in tribute to the Mercedes Group C racers. One was left in exposed carbon. One was yellow. Demand was far bigger than five, and that interest is what kept the company alive and led straight to the C12 S, the F, the Cinque, the R, and everything since.' },
//     { type: 'heading', text: 'Chassis 001 lives again' },
//     { type: 'paragraph', text: 'The very first C12, chassis 001, was the car sacrificed to the crash test barrier so the model could be certified for the road. It was not thrown away. For the Zonda twentieth anniversary in 2019, Pagani in house restoration program, Pagani Rinascimento, rebuilt it and showed it again at the Geneva Motor Show, on the same stage where the Zonda first appeared in 1999.' },
//     { type: 'paragraph', text: 'The Zonda C12 is proof that a single person with a clear idea can build something the giants cannot. It paired cutting edge carbon fiber with leather straps and hand stitched seats, and made that combination feel natural. Everything Pagani sells today grew from this car.' },
//   ],
// }
// ]

export const posts = [
  {
    slug: 'how-mclaren-created-the-perfect-drivers-car',
    date: '2026-06-30',
    updated: '2026-06-30',
    eyebrow: '30/06/2026 in Car Stories',
    title: 'How McLaren Created the Perfect Driver\'s Car',
    metaTitle: 'McLaren F1: How One Team Built the Perfect Driver\'s Car',
    metaDescription: 'The McLaren F1 put the driver in the middle, ran a BMW V12, and hit 240 mph. Here is how a small team built the best car of the 20th century.',
    focusKeyword: 'McLaren F1',
    // excerpt:
    //   'The McLaren F1 was built around one idea: the driver comes first. Here\'s how a small team turned that into the best car of the 20th century.',
    coverImage: '/Mclaren-F1-blog/Mcalren F1 front-single.jpg',
    coverImageAlt: 'McLaren F1 front view, silver, parked',
    content: [
      {
        type: 'paragraph',
        text: 'The McLaren F1 came from a company that had made its name on the track. Decades of racing built a reputation as a technical leader, the kind of team that solved problems other people said could not be solved. So when McLaren set out to build a road car, it was never going to be ordinary. It aimed to build the best car in the world, and most people who know cars will tell you the McLaren F1 did exactly that.',
      },
      {
        type: 'heading',
        text: 'The Idea Behind the McLaren F1',
      },
      {
        type: 'paragraph',
        text: 'The F1 started with one man\'s vision. Gordon Murray wanted a car that was perfect on engineering and perfect as a driver\'s car. That is why the driver sits in the middle, with two passenger seats set slightly back on either side. It puts you at the heart of the car, the way a single seat race car does.',
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
        text: 'Murray believed anything you put between the tires and the driver\'s hands and feet takes something away from the experience. So the F1 has no power steering, no brake assist, no traction control, and no semi automatic gearbox. They considered all of it and turned it down.',
      },
      {
        type: 'heading',
        text: 'What Engine Is in the McLaren F1',
      },
      {
        type: 'paragraph',
        text: 'Murray refused to compromise on the heart of the car. He wanted a naturally aspirated V12, and he set a target nobody had hit in a production car before: 100 horsepower per liter. BMW Motorsport and engine legend Paul Rosche built a custom 6.1 liter V12 just for the F1. It produced around 620 horsepower and 479 lb ft of torque, and pulled cleanly from low in the rev range.',
      },
      {
        type: 'image',
        src: '/Mclaren-F1-blog/Mcalren F1 rear-sky.jpg',
        alt: 'McLaren F1 rear view against the sky',
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
        text: 'The McLaren F1 Top Speed Record',
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
    faq: [
      { q: 'How fast is the McLaren F1?', a: 'It reached an independently measured 240.1 mph in 1998, which made it the fastest production car in the world at the time.' },
      { q: 'What engine is in the McLaren F1?', a: 'A 6.1 liter naturally aspirated V12 built by BMW Motorsport, making around 620 horsepower.' },
      { q: 'How many McLaren F1s were made?', a: 'Just 106 in total across every version, including 64 road cars.' },
    ],
    relatedPosts: ['the-ultimate-ferrari-laferrari', 'the-pagani-zonda-c12-how-one-man-built-his-dream'],
  },
  {
    slug: 'the-de-tomaso-p72-explained',
    date: '2026-07-07',
    updated: '2026-07-07',
    eyebrow: '07/07/2026 in Car Stories',
    title: 'The De Tomaso P72, Explained',
    metaTitle: 'De Tomaso P72: The Analog Supercar, Explained',
    metaDescription: 'The De Tomaso P72 is a 1.8 million dollar supercar with three pedals, no touchscreen, and a supercharged Ford V8. Only 72 will be made. Here is the story.',
    focusKeyword: 'De Tomaso P72',
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
        text: 'The Car the P72 Is Pretending to Be',
      },
      {
        type: 'paragraph',
        text: 'The P72 is an homage to the 1965 De Tomaso P70. The P70 has one of the great what if stories in racing. Alejandro de Tomaso developed it with Carroll Shelby, the Texan behind the Cobra and the GT40 program. The plan was a De Tomaso chassis with Shelby power. The partnership fell apart before it amounted to much. So the P72 is not just styled after an old prototype. It finishes a sentence that got cut off sixty years ago.',
      },
      {
        type: 'heading',
        text: 'The Man Who Brought De Tomaso Back',
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
        text: 'The De Tomaso P72 Engine, and Why It Is "Only" 700 Horsepower',
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
    faq: [
      { q: 'How much does the De Tomaso P72 cost?', a: 'Around 1.6 million euros, which is close to 1.8 million dollars.' },
      { q: 'How many De Tomaso P72 will be made?', a: 'Only 72.' },
      { q: 'What engine does the De Tomaso P72 use?', a: 'A supercharged 5.0 liter Ford Coyote V8 reworked by Roush, making about 700 horsepower.' },
    ],
    relatedPosts: ['how-mclaren-created-the-perfect-drivers-car', 'the-ultimate-ferrari-laferrari'],
  },
  {
    slug: 'the-ultimate-ferrari-laferrari',
    date: '2026-07-09',
    updated: '2026-07-09',
    eyebrow: '09/07/2026 in Car Stories',
    title: 'The Ultimate Ferrari',
    metaTitle: 'Ferrari LaFerrari: The Ultimate Ferrari, Explained',
    metaDescription: 'Ferrari LaFerrari means the Ferrari. The first flagship designed in house, with an F1 style hybrid and a 6.3 liter V12. Here is the full story.',
    focusKeyword: 'Ferrari LaFerrari',
    // excerpt:
    //   'LaFerrari means "the Ferrari." It was the first flagship Ferrari designed inside its own studio, and the first with an F1 style hybrid. Here is the story.',
    coverImage: '/LaFerrari-blog/Ferrari LaFerrari side-front.jpg',
    coverImageAlt: 'Red Ferrari LaFerrari, front three-quarter in the mountains',
    content: [
      {
        type: 'paragraph',
        text: 'Ferrari does not build a car like this often. Every couple of decades it puts everything it knows into one halo car, sells a tiny number of them, and lets that car define the era. The Ferrari LaFerrari is the fifth. It arrived in 2013, and it was the first of these cars to use a hybrid system. It is also the first one Ferrari named after itself.',
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
        alt: 'Red Ferrari LaFerrari front three-quarter, close side view',
      },
      {
        type: 'heading',
        text: 'Where the LaFerrari Sits in the Family',
      },
      {
        type: 'paragraph',
        text: 'The LaFerrari is the fifth in a bloodline of halo cars. It follows the 288 GTO and the F40, then the F50 and the Enzo. Each one was the best Ferrari could do at the time, and each one set the tone for the cars that came after it. When it launched, you could not simply buy one. Ferrari invited its most loyal owners, and only 499 coupes were made.',
      },
      {
        type: 'image',
        src: '/LaFerrari-blog/Ferrari LaFerrari front-doors.jpg',
        alt: 'Red Ferrari LaFerrari with both doors open, front view',
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
        alt: 'Red Ferrari LaFerrari from above, cabin and rear deck',
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
        alt: 'Red Ferrari LaFerrari with doors open, side front view in the mountains',
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
        alt: 'Red Ferrari LaFerrari on a mountain road above a village',
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
        alt: 'Red Ferrari LaFerrari rear three-quarter view',
      },
      {
        type: 'heading',
        text: 'Why the LaFerrari Matters',
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
    faq: [
      { q: 'How much is a Ferrari LaFerrari worth?', a: 'It cost about 1.4 million dollars new and now trades somewhere around 5 to 6 million.' },
      { q: 'How many LaFerrari were made?', a: '499 coupes, followed later by a run of open top Aperta models.' },
      { q: 'How much power does the LaFerrari have?', a: 'About 950 horsepower combined from a 6.3 liter V12 and an F1 style hybrid system.' },
    ],
    relatedPosts: ['how-mclaren-created-the-perfect-drivers-car', 'the-pagani-zonda-c12-how-one-man-built-his-dream'],
  },
  {
    slug: 'the-pagani-zonda-c12-how-one-man-built-his-dream',
    date: '2026-07-13',
    updated: '2026-07-13',
    eyebrow: '13/07/2026 in Car Stories',
    title: 'The Pagani Zonda C12: How One Man Built His Dream',
    metaTitle: 'Pagani Zonda C12: How One Man Built His Dream',
    metaDescription: 'The Pagani Zonda C12 was the first Pagani ever built. Its AMG 6.0 V12, why only five were made, and how it launched the brand. Here is the story.',
    focusKeyword: 'Pagani Zonda C12',
    // excerpt: 'No racing history and no famous badge. Just Horacio Pagani, a workshop near Modena, and the first Zonda. Here is how the C12 came to be.',
    coverImage: '/Zonda-C12-blog/Pagani-Zonda-front.jpg',
    coverImageAlt: 'Silver Pagani Zonda C12 parked in a Modena piazza at sunset',
    content: [
      { type: 'paragraph', text: 'Some cars arrive with decades of racing behind them. The Pagani Zonda C12 arrived with none of that. No motorsport trophies. No famous badge. Just one man, a small workshop near Modena, and a promise that art and engineering belong in the same object. When the Pagani Zonda C12 debuted at the 1999 Geneva Motor Show, it made everyone else look outdated.' },
      { type: 'heading', text: 'The man before the car' },
      { type: 'paragraph', text: 'Horacio Pagani was born in Casilda, a small town in Argentina, in 1955. As a kid he built things. A minibike from scrap parts at fourteen. A dune buggy out of a wrecked Renault while he was still in school. He studied engineering and art, and he never really saw them as separate subjects. He liked to quote Leonardo da Vinci, who believed art and science could walk hand in hand. That idea became the whole point of Pagani the company.' },
      { type: 'paragraph', text: 'In his twenties he built his own single seat race car and caught the attention of Juan Manuel Fangio, the five time Formula One champion and fellow Argentine. Fangio became a mentor and opened doors. His recommendation letters helped Pagani get to Italy, the home of the exotic car. In 1983 Pagani took a job at Lamborghini, started near the bottom, and worked up to running the new composite materials group.' },
      { type: 'paragraph', text: 'Then came the disagreement that started everything. Pagani wanted Lamborghini to buy an autoclave, the oven used to cure carbon fiber parts in house. Lamborghini said no. So he bought his own. He left in 1991 and founded Modena Design, making carbon parts for other manufacturers. Pagani Automobili followed in 1992. The goal was always to build a car with his own name on the back.' },
      { type: 'image', src: '/Zonda-C12-blog/Pagani-Zonda-side.jpg', alt: 'Silver Pagani Zonda C12 side profile in front of a Modena palazzo' },
      { type: 'heading', text: 'Where the Zonda name came from' },
      { type: 'paragraph', text: 'The project began under the name Fangio F1, a tribute to his friend and mentor. When Fangio passed away in 1995, Pagani dropped the tribute name out of respect. The car became the Zonda instead, named after the warm, dry wind that flows down from the Andes in Argentina. The C stands for Cristina, his wife. The 12 is the cylinder count. Simple, and personal.' },
      { type: 'heading', text: 'Six years to first light' },
      { type: 'paragraph', text: 'Pagani spent six years developing the car. He put in his own money and reportedly remortgaged his house to keep it alive. Many people doubted a small, unknown shop could take on Ferrari and Lamborghini. He had one real advantage, and it was carbon fiber. While most of the industry still leaned on steel and aluminum, Pagani built the Zonda around a full carbon composite tub. The design borrowed from the Sauber Mercedes Group C racers of the late 1980s, the silver cars that dominated sports car racing.' },
      { type: 'heading', text: 'What engine the Zonda C12 uses' },
      { type: 'paragraph', text: 'Pagani wanted a Mercedes V12, and he got one. The Zonda C12 uses the M120, a naturally aspirated 6.0 liter V12 supplied by AMG. In the original C12 the motor produces around 394 horsepower and 420 lb ft of torque, sent to the rear wheels through a manual gearbox. Three pedals and a proper gated shifter. Pagani cared more about how the engine sounded than about chasing the biggest power figure, and that priority set the tone for every Zonda that followed.' },
      { type: 'image', src: '/Zonda-C12-blog/Pagani-Zonda-rear.jpg', alt: 'Rear of the silver Pagani Zonda C12 showing the four central exhaust pipes' },
      { type: 'heading', text: 'The way it looks' },
      { type: 'paragraph', text: 'The body is carbon fiber, formed in as few pieces as possible. The front and rear clamshells lift at each end and are held down with leather straps, a signature Pagani touch. The nose carries two pairs of round headlights in exposed carbon surrounds. At the back sits the feature everyone remembers. Four exhaust pipes stacked in a tight circle in the center of the tail, ringed by mesh. On the original C12 the rear wing is a single piece unit. The later C12 S introduced the split wing.' },
      { type: 'heading', text: 'How many Zonda C12 were built' },
      { type: 'paragraph', text: 'Only five C12 cars were built with the 6.0 liter engine. One was used for crash testing and homologation. One served as the demonstrator and show car. The rest went to customers. Three were painted silver in tribute to the Mercedes Group C racers. One was left in exposed carbon. One was yellow. Demand was far bigger than five, and that interest is what kept the company alive and led straight to the C12 S, the F, the Cinque, the R, and everything since.' },
      { type: 'heading', text: 'Chassis 001 lives again' },
      { type: 'paragraph', text: 'The very first C12, chassis 001, was the car sacrificed to the crash test barrier so the model could be certified for the road. It was not thrown away. For the Zonda twentieth anniversary in 2019, Pagani in house restoration program, Pagani Rinascimento, rebuilt it and showed it again at the Geneva Motor Show, on the same stage where the Zonda first appeared in 1999.' },
      { type: 'paragraph', text: 'The Zonda C12 is proof that a single person with a clear idea can build something the giants cannot. It paired cutting edge carbon fiber with leather straps and hand stitched seats, and made that combination feel natural. Everything Pagani sells today grew from this car.' },
    ],
    faq: [
      { q: 'How many Pagani Zonda C12 were built?', a: 'Only five with the 6.0 liter engine.' },
      { q: 'What engine does the Pagani Zonda C12 use?', a: 'An AMG supplied Mercedes M120 6.0 liter V12, making around 394 horsepower.' },
      { q: 'Who built the Pagani Zonda C12?', a: 'Horacio Pagani, an Argentine engineer who founded Pagani Automobili in Modena in 1992.' },
    ],
    relatedPosts: ['how-mclaren-created-the-perfect-drivers-car', 'the-ultimate-ferrari-laferrari'],
  },
  {
  slug: 'lamborghini-huracan-the-best-selling-lamborghini-ever-made',
  date: '2026-07-14',
  updated: '2026-07-14',
  eyebrow: '14/07/2026 in Car Stories',
  title: 'Lamborghini Huracán: The Best Selling Lamborghini Ever Made',
  metaTitle: 'Lamborghini Huracán: The Best Selling Lamborghini Ever Made',
  metaDescription: 'The Lamborghini Huracán replaced the Gallardo, became the best selling Lambo ever, and ended the naturally aspirated V10 era. Here is the story.',
  focusKeyword: 'Lamborghini Huracán',
  // excerpt: 'The Huracán had to follow the Gallardo and keep the drama alive. It did both, and became the last naturally aspirated V10 Lamborghini.',
  coverImage: '/Huracan-blog/Lamborghini Hurican side-driving.jpg',
  coverImageAlt: 'Pink Lamborghini Huracán on track, side profile in motion',
  content: [
    { type: 'paragraph', text: 'The Lamborghini Huracán had a hard job from the start. It replaced the Gallardo, the best selling car Lamborghini had ever made, and it had to do that without losing the drama that makes a Lamborghini a Lamborghini. It managed both. Over a ten year run it became the most produced Lamborghini in history, and when it went out of production in 2024 it took the naturally aspirated V10 with it. There will not be another one like it.' },
    { type: 'heading', text: 'Filling the Gallardo\'s shoes' },
    { type: 'paragraph', text: 'The Gallardo was the car that saved Lamborghini. It was the first model built under Audi ownership, it was reliable in a way old Lamborghinis were not, and it sold in numbers the company had never seen. When it came time to replace it in 2014, the pressure was obvious. The Huracán had to be faster and more modern without feeling watered down. It worked. Buyers who would never have risked an old Italian supercar walked into a dealership and drove out in a Huracán, confident it would start every morning.' },
    { type: 'heading', text: 'Where the name comes from' },
    { type: 'paragraph', text: 'Lamborghini names its cars after fighting bulls. Huracán was a bull known for its courage that fought in 1879. The word also means hurricane in Spanish, which suits the car fine, but the bull came first. It is the same tradition that gave us the Miura, the Diablo, and the Aventador.' },
    { type: 'heading', text: 'What engine the Lamborghini Huracán uses' },
    { type: 'paragraph', text: 'At the center of the car is a 5.2 liter naturally aspirated V10. No turbos. No hybrid assistance for most of its life. Just ten cylinders that pull hard all the way to 8,500 rpm and make a noise turbocharged rivals cannot match. In the launch LP 610-4 it produced 602 horsepower and 413 lb ft of torque, enough for a 0 to 62 mph time of around 3.2 seconds and a top speed of 202 mph. As the industry moved to turbos and batteries, this high revving V10 became the thing people wanted most.' },
    { type: 'image', src: '/Huracan-blog/Lamborghini Hurican rear-driving.jpg', alt: 'Pink Lamborghini Huracán cornering on a race track' },
    { type: 'heading', text: 'Audi underneath' },
    { type: 'paragraph', text: 'Here is the part that surprises people. The Huracán is closely related to the Audi R8. The two cars share a platform and the same basic V10, and the Huracán\'s chassis is actually built by Audi in Neckarsulm, Germany, before it travels to Sant\'Agata Bolognese in Italy for final assembly. That German engineering is why the car is so usable. The seven speed dual clutch gearbox is the same unit Audi uses in the R8, smooth enough to sit in traffic and sharp enough to bang through gears on a track.' },
    { type: 'heading', text: 'How it drives' },
    { type: 'paragraph', text: 'The car has three main modes, chosen with a switch on the steering wheel. Strada is the calm daily setting. Sport loosens things up and lets the tail move around. Corsa is the sharpest track mode. A system called ANIMA manages the engine, gearbox, all wheel drive, suspension, and stability control to match whichever mode you pick. The suspension uses magnetic dampers that change firmness almost instantly, so the car rides well on a bad road and still turns into a weapon when you want it to.' },
    { type: 'heading', text: 'The variants that matter' },
    { type: 'paragraph', text: 'Lamborghini built a long list of Huracán versions. The LP 580-2 sent less power to the rear wheels only and became the purist\'s choice. The Performante turned everything up, made 631 horsepower, added the ALA active aero system, and lapped the Nürburgring in 6 minutes 52 seconds. The EVO took that engine and added rear wheel steering. The STO was the road legal version of Lamborghini\'s GT3 race car. The Tecnica split the difference for daily use.' },
    { type: 'heading', text: 'The one that went off road' },
    { type: 'paragraph', text: 'The strangest Huracán is the Sterrato. In 2023 Lamborghini took its low slung supercar, raised the suspension, widened the track, bolted on skid plates and all terrain tires, and added a Rally mode. It is a V10 supercar built to slide across gravel. Only 1,499 were made, and it was the last non hybrid model Lamborghini launched.' },
    { type: 'heading', text: 'Why the Lamborghini Huracán matters' },
    { type: 'paragraph', text: 'The Huracán is the car that proved the Gallardo was not a fluke. It became the best selling Lamborghini ever made and brought a whole new group of buyers to the brand, without losing the noise and drama people expect from Sant\'Agata. Its replacement, the Temerario, uses a twin turbo V8 with hybrid power. That is the future, and it will be quick. But it will not sound like a naturally aspirated V10 screaming to 8,500 rpm, because almost nothing will again.' },
  ],
  faq: [
    { q: 'What engine does the Lamborghini Huracán have?', a: 'A 5.2 liter naturally aspirated V10, making 602 horsepower in the launch LP 610-4 and up to 631 in the Performante, EVO, and STO.' },
    { q: 'How fast is the Lamborghini Huracán?', a: 'The LP 610-4 hits 62 mph in about 3.2 seconds and tops out at 202 mph. The Performante reaches 62 mph in 2.9 seconds.' },
    { q: 'Why did the Lamborghini Huracán stop production?', a: 'It ended in 2024 after a ten year run and was replaced by the twin turbo hybrid Temerario. It was the last naturally aspirated V10 Lamborghini.' },
    { q: 'Is the Lamborghini Huracán reliable?', a: 'Yes. It shares its platform and drivetrain with the Audi R8, which makes it one of the more dependable supercars to own.' },
  ],
  relatedPosts: ['how-mclaren-created-the-perfect-drivers-car', 'the-ultimate-ferrari-laferrari', 'the-pagani-zonda-c12-how-one-man-built-his-dream'],
},
{

  slug: 'pagani-zonda-revolucion-the-wildest-zonda-ever-built',

  date: '2026-07-14',

  updated: '2026-07-14',

  eyebrow: '14/07/2026 in Car Stories',

  title: 'The Pagani Zonda Revolución: The Wildest Zonda Ever Built',

  metaTitle: 'Pagani Zonda Revolución: The Wildest Zonda Ever Built',

  metaDescription: 'The Pagani Zonda Revolución is the last and most extreme Zonda. An 800 PS AMG V12, F1 style DRS, carbon titanium, and only five made. Here is the story.',

  focusKeyword: 'Pagani Zonda Revolución',

  // excerpt: 'Pagani kept saying the Zonda was finished. Then it built the Revolución, an 800 PS track weapon with F1 aero, and proved it did not mean it.',

  coverImage: '/Zonda-Revolucion-blog/Track-Only Pagani Zonda Revolución front-building.jpg',

  coverImageAlt: 'Black carbon Pagani Zonda Revolución with gold wheels parked in a Modena piazza',

  content: [

    { type: 'paragraph', text: 'Pagani kept saying the Zonda was finished. It said it with the Zonda R. It said it again with the Tricolore. Then in 2013 it built the Zonda Revolución and proved it did not mean any of it. This was the last and most extreme version of the Zonda, a track car with 800 PS, Formula 1 aero, and a carbon titanium tub. Only five were made. It is the Zonda pushed as far as Pagani could push it.' },

    { type: 'heading', text: 'The car that would not end' },

    { type: 'paragraph', text: 'To understand the Revolución you have to follow the Zonda R first. In 2009 Pagani built the Zonda R, a track only version of its road car that shared only about ten percent of its parts with the Zonda F. In 2010 it lapped the Nürburgring in 6 minutes 47 seconds and set a production based record. It was already the fastest Pagani ever made. The Revolución is the end of that story. The name is a play on words, R evolution, and it took the Zonda R and turned everything up one final time.' },

    { type: 'image', src: '/Zonda-Revolucion-blog/Track-Only Pagani Zonda Revolución front-far.jpg', alt: 'Pagani Zonda Revolución side profile showing the large rear wing and gold wheels' },

    { type: 'heading', text: 'What makes it different' },

    { type: 'paragraph', text: 'The heart of the car is its monocoque, made from carbon titanium. Weaving titanium into the carbon fiber makes the structure stronger without adding weight. The result is a car that weighs just 1,070 kilograms. For reference, that is lighter than a Mini Cooper and around a hundred pounds lighter than a Mazda Miata. Every part of the Revolución exists to make it faster through a corner, not just faster in a straight line.' },

    { type: 'heading', text: 'What engine the Zonda Revolución uses' },

    { type: 'paragraph', text: 'Behind the driver sits the same basic engine that powered every great Zonda, the Mercedes AMG 6.0 liter V12. In the Revolución it was pushed to 800 PS, about 789 horsepower, with 538 lb ft of torque. It breathes through a Formula 1 style exhaust and revs to the sky. Paired with that light body, it gives a power to weight ratio that beats a Bugatti Veyron. Power goes to the rear wheels through a six speed sequential gearbox that changes gear in 20 milliseconds.' },

    { type: 'image', src: '/Zonda-Revolucion-blog/Track-Only Pagani Zonda Revolución front-close.jpg', alt: 'Pagani Zonda Revolución front view among other Paganis in a Modena square' },

    { type: 'heading', text: 'Formula 1 in a road car company\'s workshop' },

    { type: 'paragraph', text: 'The Revolución borrowed heavily from racing. The rear wing carries a DRS, a drag reduction system like the one on a Formula 1 car. The driver can work it manually with a button on the wheel, or hold that button and let the car manage the wing on its own. It opens for less drag on the straights and closes for more grip in the corners. The brakes are Brembo CCMR carbon ceramic discs derived from Formula 1, 15 percent lighter than the Zonda R\'s, and the Bosch traction control offers 12 settings.' },

    { type: 'heading', text: 'Track only, with one exception' },

    { type: 'paragraph', text: 'The Revolución was never meant for the road. It has no plate, no comfort, and none of the systems a street car needs. There is one exception. In 2021 the British firm Lanzante, the same company that made the McLaren P1 GTR road legal, converted one Revolución for the street. It was serious work, because the Revolución is far closer to a race car than to the road going Zonda it resembles.' },

    { type: 'heading', text: 'How rare, and how much' },

    { type: 'paragraph', text: 'Only five Zonda Revolucións were built, not counting the prototype. Each one cost 2.2 million euros before taxes, which landed close to 2.9 million dollars. Values have climbed hard since. One Zonda R in Revolución specification sold for more than 5 million dollars in the United States, then sold again for around 11 million in Australia.' },

    { type: 'heading', text: 'Why the Zonda Revolución matters' },

    { type: 'paragraph', text: 'The Revolución is the Zonda taken to its absolute limit. It is the last chapter of a car that started as one man\'s dream in 1999 and ended as an 800 PS track weapon with Formula 1 technology. Pagani could have let the Zonda fade out quietly. Instead it built the hardest, fastest, most extreme version of all and used it to say goodbye.' },

  ],

  faq: [

    { q: 'How many Pagani Zonda Revolucións were built?', a: 'Only five, not counting the prototype.' },

    { q: 'How much power does the Zonda Revolución have?', a: 'Around 800 PS, about 789 horsepower, from a 6.0 liter AMG V12, with 538 lb ft of torque.' },

    { q: 'How much did the Zonda Revolución cost?', a: '2.2 million euros before taxes, close to 2.9 million dollars new. Values are far higher now.' },

    { q: 'Is the Pagani Zonda Revolución road legal?', a: 'No, it is a track only car. One example was later converted for the road by Lanzante in 2021.' },

  ],

  relatedPosts: ['the-pagani-zonda-c12-how-one-man-built-his-dream', 'the-ultimate-ferrari-laferrari', 'lamborghini-huracan-the-best-selling-lamborghini-ever-made'],

},
{
  slug: 'mclaren-f1-gtr-the-road-car-that-won-le-mans',
  date: '2026-07-20',
  updated: '2026-07-20',
  eyebrow: '20/07/2026 in Car Stories',
  title: 'The McLaren F1 GTR: The Road Car That Won Le Mans',
  metaTitle: 'McLaren F1 GTR: The Road Car That Won Le Mans',
  metaDescription: 'The McLaren F1 GTR was never meant to race. It won Le Mans outright on its first attempt in 1995, beating purpose built prototypes. Here is the story.',
  focusKeyword: 'McLaren F1 GTR',
  // excerpt: 'Gordon Murray never wanted the F1 to race. Customers pushed, McLaren gave in, and a modified road car beat the prototypes at Le Mans on its first try.',
  coverImage: '/Mclaren-F1-GTR-blog/Mclaren F1 Gtr Multi Color front.jpg',
  coverImageAlt: 'McLaren F1 GTR in Gulf livery, front view against a dark background',
  content: [
    { type: 'paragraph', text: 'The McLaren F1 GTR was never supposed to exist. Gordon Murray built the F1 as the ultimate road car and had no interest in racing it. Ron Dennis publicly said it would not happen. Then customers started asking, McLaren gave in, and eight months later a lightly modified road car beat purpose built prototypes to win the 24 Hours of Le Mans outright. It is one of the great upsets in motorsport, and it happened on the first try.' },
    { type: 'heading', text: 'The customers who forced it' },
    { type: 'paragraph', text: 'The F1 was designed to be the best road car in the world. Murray did not want it turned into a race car. But the BPR Global GT Series started up in 1994, and teams wanted something faster for the top GT1 class. Two F1 owners, racing driver Ray Bellm and German banker Thomas Bscher, pushed McLaren to build a competition version. McLaren said no at first, so Bellm went straight to Ron Dennis, an old friend. That worked. With only a few months before the season, McLaren agreed to build a small run of racing chassis.' },
    { type: 'heading', text: 'How little they had to change' },
    { type: 'paragraph', text: 'Here is the part that tells you how good the original car was. Turning the F1 into a race car took surprisingly little work. The team added cooling ducts, a big adjustable rear wing, a steel roll cage, and carbon brakes. They quickened the steering and stripped the interior. The center driving position stayed. The butterfly doors stayed. Even the standard gearbox stayed. The engine actually lost power. Series rules forced an air restrictor on the BMW V12, capping it at around 600 PS, which is less than the road car made. The GTR was still faster, because it was lighter and it had real downforce.' },
    { type: 'image', src: '/Mclaren-F1-GTR-blog/Mclaren F1 Gtr Multi Color far-side-ocean.jpg', alt: 'McLaren F1 GTR in Gulf livery on a lake ferry beside a road going McLaren F1' },
    { type: 'heading', text: 'How the McLaren F1 GTR won Le Mans in 1995' },
    { type: 'paragraph', text: 'Nobody expected a road car to win. The prototypes in the top class were purpose built machines with no relation to anything on the street. Then it rained for sixteen of the twenty four hours. The prototypes hit trouble. The McLarens did not. JJ Lehto drove the middle of the night in conditions that terrified most of the field, posting lap times up to twenty seconds faster than his rivals. He shared the winning car with Yannick Dalmas and Masanori Sekiya, running as Kokusai Kaihatsu Racing under the Ueno Clinic banner, prepared by a team new to Le Mans called Lanzante Motorsport.' },
    { type: 'paragraph', text: 'Chassis 01R took the overall win. Of the seven F1 GTRs that started, five finished, taking first, third, fourth, fifth, and thirteenth. McLaren won Le Mans on its first attempt as a manufacturer. It was also a first Le Mans win for a Finnish driver, for a Japanese driver, and for BMW power. To mark the result, McLaren built five special F1 LM road cars, one for each finisher.' },
    { type: 'image', src: '/Mclaren-F1-GTR-blog/Mclaren F1 Gtr side.jpg', alt: 'Black McLaren F1 GTR Longtail side profile showing the extended tail and rear wing' },
    { type: 'heading', text: 'The Longtail' },
    { type: 'paragraph', text: 'By 1997 the landscape had changed. Porsche showed up with the 911 GT1, a race car reverse engineered into a road car. Mercedes came with the CLK GTR. These were not modified road cars. They were prototypes wearing just enough disguise to qualify. McLaren answered with the 1997 car, known as the Longtail. The nose and tail were stretched dramatically for downforce, the tail running a full meter past the rear axle, which was the maximum the rules allowed. A roof snorkel fed the engine. The gearbox became an X-trac six speed sequential unit.' },
    { type: 'paragraph', text: 'The weight numbers tell the story. The 1995 car weighed 1,050 kg. The 1996 car was 1,012 kg. The Longtail came in at 915 kg, despite being longer and wider. To make it legal, McLaren had to build a road going version too, the F1 GT, of which only three exist. The Longtail took second and third overall at Le Mans in 1997, first and second in GT1.' },
    { type: 'image', src: '/Mclaren-F1-GTR-blog/Mclaren F1 Gtr front-driving.jpg', alt: 'Black McLaren F1 GTR driving through an Italian village' },
    { type: 'heading', text: 'How many McLaren F1 GTRs were built' },
    { type: 'paragraph', text: 'Twenty eight GTRs were built in total. Nine to 1995 spec, nine to 1996 spec, and ten Longtails. Across a decade of racing the car took 38 wins and three constructors championships. It won the 1995 Global GT Championship and the Japanese GT500 teams title in 1996 with Team Lark. It raced on in privateer hands until 2005, when the last chassis was finally retired.' },
    { type: 'heading', text: 'What a McLaren F1 GTR is worth now' },
    { type: 'paragraph', text: 'The GTR has become one of the most valuable racing cars in the world. Around sixteen were later converted for road use, which makes them the lightest and rawest F1s anyone can drive on the street. Chassis 11R, the papaya car that Mercedes borrowed to help develop the CLK GTR, reportedly traded for 30 million euros. Chassis 10R, owned by Pink Floyd drummer Nick Mason since 1999, is heading to auction with a stated value above 35 million dollars.' },
    { type: 'heading', text: 'Why the McLaren F1 GTR matters' },
    { type: 'paragraph', text: 'The F1 GTR won Le Mans because the road car underneath it was engineered properly in the first place. It did not need a purpose built race chassis, because Murray had already built something close to one and put a license plate on it. That is the whole point. A team of people who refused to compromise made a road car so good that a mildly reworked version beat cars designed to do nothing else.' },
    { type: 'quote', text: '"Winning Le Mans is more difficult than winning an F1 championship. It\'s a whole season\'s worth of races without stopping." - Gordon Murray' },
  ],
  faq: [
    { q: 'How many McLaren F1 GTRs were built?', a: '28 in total. Nine to 1995 spec, nine to 1996 spec, and ten of the 1997 Longtail.' },
    { q: 'Did the McLaren F1 GTR win Le Mans?', a: 'Yes. Chassis 01R won the 1995 24 Hours of Le Mans outright on McLaren\'s first attempt, beating purpose built prototypes.' },
    { q: 'How much power does the McLaren F1 GTR have?', a: 'Around 600 PS from its BMW V12, which is actually less than the road car because racing rules required an air restrictor.' },
    { q: 'What is a McLaren F1 GTR worth?', a: 'Tens of millions. One chassis reportedly traded for 30 million euros, and another is heading to auction valued above 35 million dollars.' },
  ],
  relatedPosts: ['how-mclaren-created-the-perfect-drivers-car', 'the-pagani-zonda-c12-how-one-man-built-his-dream', 'the-ultimate-ferrari-laferrari'],
},
{
  slug: 'pagani-huayra-codalunga-simplicity-as-the-luxury',
  date: '2026-07-26',
  updated: '2026-07-26',
  eyebrow: '26/07/2026 in Car Stories',
  title: 'The Pagani Huayra Codalunga: Simplicity as the Luxury',
  metaTitle: 'Pagani Huayra Codalunga: Simplicity as the Luxury',
  metaDescription: 'The Pagani Huayra Codalunga is a long tail hypercar built around less, not more. Only five made, an AMG V12, and a 7 million euro price. Here is the story.',
  focusKeyword: 'Pagani Huayra Codalunga',
  // excerpt: 'A client asked Pagani for less, not more. The result was the Huayra Codalunga, a long tail hypercar limited to five cars and sold out before its reveal.',
  coverImage: '/Huayra-Codalunga-blog/Pagani Huayra Codalunga front.jpg',
  coverImageAlt: 'Silver Pagani Huayra Codalunga front three-quarter view in a Modena piazza',
  content: [
    { type: 'paragraph', text: 'The Pagani Huayra Codalunga is what happens when a client with unlimited means asks for less, not more. It started in 2018 with two customers who wanted a long tail Huayra styled after the endurance racers of the 1960s. Four years later Pagani delivered it. Only five coupes were made, every one sold before the car was shown, each starting around 7 million euros. It is one of the most expensive and most restrained cars the company has ever built.' },
    { type: 'heading', text: 'What Codalunga means' },
    { type: 'paragraph', text: 'Codalunga is Italian for long tail. The name points straight at the cars that inspired it, the streamlined Le Mans prototypes of the 1960s that stretched their bodywork far past the rear wheels to cut through the air. Horacio Pagani has said his favorite car is the Porsche 917, and you can feel that here. The Codalunga is a modern read on that era, not a copy of it.' },
    { type: 'image', src: '/Huayra-Codalunga-blog/Pagani Huayra Codalunga left-side.jpg', alt: 'Silver Pagani Huayra Codalunga side profile between two other Paganis in Modena' },
    { type: 'heading', text: 'The idea: taking away, not adding' },
    { type: 'paragraph', text: 'Most hypercars fight to add more. More wings, more vents, more carbon on display. The Codalunga went the other way. Pagani describes the whole project as taking away rather than adding, and that is the hard part. It is easy to pile on features. It is much harder to remove them and end up with something that still works and still moves you. The car was built by Pagani Grandi Complicazioni, the small special projects division that handles the company\'s most personal commissions.' },
    { type: 'heading', text: 'The long tail and the exposed exhaust' },
    { type: 'paragraph', text: 'The heart of the design is the rear. The engine cover runs about 360mm longer than a standard Huayra, and it tapers to a soft point before it lifts slightly at the very end. There is no rear grille. That choice lets Pagani leave the exhaust fully exposed, four titanium pipes arranged in a tight square, with the tail lights sitting around them. The whole exhaust system weighs under ten pounds. The result reads as one continuous shape, as if the car was always meant to be this way.' },
    { type: 'heading', text: 'What engine the Huayra Codalunga uses' },
    { type: 'paragraph', text: 'Under the long tail sits the engine Pagani has used for years, the AMG built twin turbo 6.0 liter V12. In the Codalunga it makes around 829 horsepower and 811 lb ft of torque. Power goes to the rear wheels through a seven speed sequential gearbox from Xtrac. Top speed is quoted at roughly 217 mph. Pagani did not build the Codalunga to chase a lap record. It built it to be driven and admired, which is why so much attention went to weight and sound rather than raw output.' },
    { type: 'image', src: '/Huayra-Codalunga-blog/Pagani Huayra Codalunga right-side.jpg', alt: 'Silver Pagani Huayra Codalunga side profile showing the long tapered tail' },
    { type: 'heading', text: 'Light, by obsession' },
    { type: 'paragraph', text: 'The Codalunga has a dry weight of about 1,280 kilograms, which is roughly 70 kilograms less than a standard Huayra. That comes from carbon titanium and carbon triax construction, the exotic composite blends Pagani developed to be strong and light at the same time. Every part is chosen to save weight without looking stripped out, because a Pagani interior still has to feel like a jewel box.' },
    { type: 'heading', text: 'Inside' },
    { type: 'paragraph', text: 'The cabin is pure Pagani. Hammered and hand stitched leather. Metal parts milled from solid billet, each one finished like a small sculpture. Exposed linkage on the gear lever so you can watch the mechanism work. There is a fabric made specially for the car, embroidered rather than printed, with a circular pattern that echoes the four pipe exhaust. Pagani says each embroidered piece takes around 450,000 stitches.' },
    { type: 'heading', text: 'The Speedster that followed' },
    { type: 'paragraph', text: 'In 2025 Pagani did with the Codalunga what it always does with a car it loves. It made another version. The Huayra Codalunga Speedster dropped the roof, added a removable hard top with a clear panel, and offered the AMG V12 with either a seven speed automated manual or a true manual. Only ten Speedsters will be built, twice the run of the coupe but still tiny. Both cars are fully road legal around the world.' },
    { type: 'heading', text: 'Why the Huayra Codalunga matters' },
    { type: 'paragraph', text: 'The Codalunga is proof that restraint can be the most expensive thing a company sells. Anyone can add downforce and horsepower. Very few can remove parts, simplify a shape, and make the result feel more special rather than less. Pagani did that, sold all five before anyone outside the room had seen them, and reminded everyone that its real product is not speed. It is craft.' },
  ],
  faq: [
    { q: 'How many Pagani Huayra Codalunga were built?', a: 'Only five coupes, all sold before the car was revealed. A later Codalunga Speedster is limited to ten.' },
    { q: 'How much does the Pagani Huayra Codalunga cost?', a: 'Prices started around 7 million euros, roughly 7.4 million dollars.' },
    { q: 'What engine does the Huayra Codalunga use?', a: 'An AMG built twin turbo 6.0 liter V12, making around 829 horsepower and 811 lb ft of torque.' },
    { q: 'What does Codalunga mean?', a: 'It is Italian for long tail, a nod to the streamlined Le Mans racers of the 1960s.' },
  ],
  relatedPosts: ['pagani-zonda-revolucion-the-wildest-zonda-ever-built', 'the-pagani-zonda-c12-how-one-man-built-his-dream', 'the-ultimate-ferrari-laferrari'],
},
{
  slug: 'maserati-mc12-gt1-the-race-car-that-came-first',
  date: '2026-08-27',
  updated: '2026-08-27',
  eyebrow: '27/08/2026 in Car Stories',
  title: 'Maserati MC12 GT1: The Race Car That Came First',
  metaTitle: 'Maserati MC12 GT1: The Race Car That Came First',
  metaDescription: 'The Maserati MC12 GT1 story. Why the race car came first, what separates it from the road car, its 40 wins from 94 races, and why it never raced at Le Mans.',
  focusKeyword: 'Maserati MC12 GT1',
  // excerpt: 'Maserati did not build a hypercar and then take it racing. It built a GT1 car, then produced 50 road versions because the rulebook said it had to.',
  coverImage: '/2004-Maserati-MC12-GT1-blog/2004 Maserati MC12 GT1 front.jpg',
  coverImageAlt: 'Maserati MC12 GT1 in blue and white race livery, front view',
  content: [
    { type: 'paragraph', text: 'The Maserati MC12 GT1 is one of the rare supercars where the road car is the footnote. Maserati did not build a hypercar and then decide to take it racing. It built a GT1 car first, then produced 50 road versions because the rulebook said it had to. Almost everything odd about the MC12 makes sense once you know which way around it happened.' },
    { type: 'paragraph', text: 'Between 2004 and 2010 the MC12 GT1 entered 94 races and won 40 of them. Six teams\' championships. Six drivers\' championships. Two manufacturers\' cups. For most of that stretch it was simply the car everyone else in GT1 was trying to beat.' },
    { type: 'heading', text: 'Why Maserati built the MC12' },
    { type: 'paragraph', text: 'Maserati had not won an international championship since 1967, when Pedro Rodriguez took the South African Grand Prix in a Cooper running a Maserati V12. Thirty seven years is a long time to sit out.' },
    { type: 'paragraph', text: 'Ferrari took control of Maserati in 1999 and spent the next few years rebuilding the road car range. The racing opening came in 2004, when the FIA loosened the GT Championship rules in a way that suited manufacturers building in small numbers. Maserati had access to the Enzo. It had a parent company with a race department. It went.' },
    { type: 'paragraph', text: 'Giorgio Ascanelli ran the project. Internally the race car was the MCC, short for Maserati Corse Competizione, with a road version called the MCS. Frank Stephenson handled most of the body styling, working from a shape that began as a Giugiaro idea and was then developed in the wind tunnel. Andrea Bertolini did the bulk of the test driving. Michael Schumacher put in laps at Fiorano.' },
    { type: 'paragraph', text: 'The entry price for FIA GT was 25 road cars. Maserati built 25 in 2004, then another 25 in 2005 after the FIA cut the maximum permitted length. Fifty road cars, plus the racers, and that was the whole run.' },
    { type: 'heading', text: 'What is the difference between the MC12 and the MC12 GT1' },
    { type: 'paragraph', text: 'They share a spine. Both use a carbon and Nomex monocoque derived from the Enzo, with aluminum subframes front and rear, double wishbone suspension at both ends operated by push rods, and a 6.0 liter Ferrari derived V12 sitting behind the cabin.' },
    { type: 'paragraph', text: 'After that they separate. The road car, the Stradale, makes 630 PS (621 hp) at 7,500 rpm and 481 lb ft at 5,500 rpm, sent through the six speed Cambiocorsa automated manual. It weighs 1,500 kg and tops out at 205 mph.' },
    { type: 'paragraph', text: 'The GT1 swaps the Cambiocorsa for a proper sequential gearbox and runs a 31.2 mm air restrictor, which the regulations demanded and which pulls output down to roughly 600 hp. It also sheds about 250 kg. Depending on the series it raced in, it sat between 1,200 and 1,250 kg. Cast iron discs replaced anything more exotic, again because of the rulebook.' },
    { type: 'paragraph', text: 'The shape is the same either way, and the shape is the story. The MC12 is 5,143 mm long and 2,096 mm wide, which makes it wider and longer than a Hummer H2. The rear wing spans two meters and is only 30 mm thick. The floor is flat, the rear bumper carries diffusers, and the air scoop sits on the roof rather than the shoulders. There is no rear window at all. None of that was styling. It was a car built to make downforce with a road car draped over the top.' },
    { type: 'image', src: '/2004-Maserati-MC12-GT1-blog/2004 Maserati MC12 GT1 top.jpg', alt: 'Overhead view of the Maserati MC12 GT1 showing its length, width and two meter rear wing' },
    { type: 'heading', text: 'The 2004 debut and the homologation fight' },
    { type: 'paragraph', text: 'The MC12 GT1 arrived at Imola in September 2004 under AF Corse, with chassis 003 and 006 as the lead cars. The FIA refused to let them score points because the homologation was still disputed. The cars finished second and third anyway.' },
    { type: 'paragraph', text: 'At the next round, Oschersleben, Bertolini and Mika Salo won outright. It was the car\'s second race.' },
    { type: 'paragraph', text: 'By the final round at Zhuhai the FIA had agreed to homologate the MC12s and let them score. They finished first and second. Four races into its existence, and with points allowed in only one of them, the MC12 was seventh in the teams\' championship.' },
    { type: 'heading', text: 'How many races did the Maserati MC12 GT1 win' },
    { type: 'paragraph', text: 'The 2005 season answered the question about whether the debut was a fluke. Maserati took the FIA GT Manufacturers\' Cup with 239 points, nearly double Ferrari\'s 125. Vitaphone Racing and JMB Racing finished first and second in the Team Cup. Vitaphone also won the Spa 24 Hours, with a JMB MC12 second.' },
    { type: 'paragraph', text: 'The drivers\' title was the one that got away. Four MC12 drivers went into the Bahrain finale within striking distance, and Gabriele Gardel beat all of them in an older Ferrari 550 Maranello. Every Maserati driver finished within four points of first.' },
    { type: 'paragraph', text: 'They fixed that. Vitaphone won the GT1 Teams\' Championship every year from 2005 through 2009. Michael Bartels and Andrea Bertolini shared the drivers\' title in 2006, 2008 and 2009, with Thomas Biagi taking it in 2007. When the series became the FIA GT1 World Championship in 2010, Vitaphone won five races and took both the drivers\' and teams\' world titles.' },
    { type: 'paragraph', text: 'Six seasons. Forty wins from 94 starts.' },
    { type: 'heading', text: 'Why the Maserati MC12 never raced at Le Mans' },
    { type: 'paragraph', text: 'This is the part people forget, and it is the reason the MC12 sits slightly outside the canon.' },
    { type: 'paragraph', text: 'The ACO, which runs Le Mans and sanctioned the Le Mans Endurance Series and the American Le Mans Series, had length and width limits. The MC12 broke both. Maserati shortened the nose by 201 mm to try to comply. The car was still 66 mm too wide. The ACO did not move, and the MC12 was locked out of its series.' },
    { type: 'paragraph', text: 'IMSA took a different view for 2005 and allowed the MC12 into the ALMS as a guest, carrying a weight penalty and barred from scoring championship points. Some teams objected on the grounds that a shunt with a Maserati could wreck their Le Mans campaign. The car ran anyway.' },
    { type: 'paragraph', text: 'Maserati sent one entry, chassis 003, under the Maserati Corse banner with Risi Competizione running it and Bertolini driving the full season. At Sebring it finished ninth overall and fifth in GT1. The rest of the year was a run of steady class results without a win, and the season ended badly at Laguna Seca, where contact with another car led to a long pit stop and then a broken radiator after the cold tires let go over a curb.' },
    { type: 'paragraph', text: 'In 2007 Fredy Lienhard and Didier Theys brought an ex FIA GT car back to the ALMS with Doran Racing. IMSA let them score points and run a full width rear wing. They took third in class at Road America and put the car on the GT1 pole at Petit Le Mans.' },
    { type: 'paragraph', text: 'The comparison writes itself. The McLaren F1 was a road car that got talked into racing and won Le Mans on its first attempt. The MC12 was a purpose built race car that was never allowed through the gate.' },
    { type: 'heading', text: 'The Super GT chapter almost nobody remembers' },
    { type: 'paragraph', text: 'In 2006, Team Goh took an MC12 GT1 to Japan. This was a serious outfit, the team that had won Le Mans outright in 2004 with an Audi R8, and it planned to run the Maserati in Super GT with Jan Magnussen and 2004 Le Mans winner Seiji Ara.' },
    { type: 'paragraph', text: 'Magnussen fell ill before the official test at Suzuka and returned to Denmark. The car ran anyway and could not get near the front, lapping around 1:55.3 against a quickest GT500 time in the low 1:53s. The pattern was consistent across both test days. The MC12 was quick on the straights and gave all of it back in the corners, losing the most time in the fast stuff. Team Goh pulled the entry before the season started.' },
    { type: 'paragraph', text: 'A car built for long European GT circuits did not translate to Suzuka. That is a fair reading of the MC12 in general.' },
    { type: 'heading', text: 'How many Maserati MC12 GT1s were built' },
    { type: 'paragraph', text: 'Twelve race cars by most counts, with some registries listing thirteen. Add the 50 road cars and the total production of the MC12 in all forms is 62.' },
    { type: 'paragraph', text: 'There is one more variant worth knowing. In 2006 Maserati built the MC12 Versione Corse, a track only car derived from the GT1 that won the 2005 Manufacturers\' Cup. Free of the air restrictor, its V12 made 755 hp, more than either the road car or the racer. Twelve went to selected customers at around one million euros each, with a prototype and a couple of publicity cars alongside. Like the Ferrari FXX, Maserati stored and maintained them and the owners drove them on organized track days.' },
    { type: 'heading', text: 'What is a Maserati MC12 GT1 worth' },
    { type: 'paragraph', text: 'Public sales are thin, which makes the number soft.' },
    { type: 'paragraph', text: 'Chassis 003, the factory car that raced at Imola and then ran Maserati\'s entire 2005 ALMS season, was offered at Gooding & Company\'s Pebble Beach auction in 2015 against a $2,000,000 to $2,500,000 estimate. It did not sell. A 2006 MC12 GT1 sold at RM Sotheby\'s in London in October 2019 for £2,050,000.' },
    { type: 'paragraph', text: 'The road cars have since moved past that. A 2005 MC12 Stradale carried a $4,800,000 to $5,500,000 estimate at Broad Arrow\'s Monterey sale in 2025. The car built as paperwork now trades higher than the car it was built to legalize, which is a fair reflection of how few people can actually run a GT1 racer and how many can enjoy a road car.' },
    { type: 'heading', text: 'Why the Maserati MC12 GT1 still matters' },
    { type: 'paragraph', text: 'It is the last time Maserati was the car to beat at anything. Not a strong showing, not a competitive entry. The benchmark, for six seasons, in the most contested GT class of its era.' },
    { type: 'paragraph', text: 'It also sits at the far end of a spectrum from the other homologation heroes. The McLaren F1 GTR came from a road car that was never meant to race. The MC12 GT1 came first, and 50 people got a road car out of the deal because the FIA required it. Both approaches produced something great. Only one of them was aiming at it.' },
  ],
  faq: [
    { q: 'How many Maserati MC12 GT1s were built?', a: 'Twelve race cars by most counts, with some registries listing thirteen. Including the 50 road cars, total MC12 production was 62.' },
    { q: 'What is the difference between the MC12 and the MC12 GT1?', a: 'The GT1 uses a sequential gearbox instead of the road car\'s Cambiocorsa, runs a 31.2 mm air restrictor that limits it to around 600 hp, and weighs roughly 250 kg less. The chassis, engine architecture and bodywork are shared.' },
    { q: 'Why was the Maserati MC12 not allowed to race at Le Mans?', a: 'It was too long and too wide for ACO regulations. Maserati shortened the nose by 201 mm and the car was still 66 mm over on width. IMSA allowed it into the 2005 ALMS only as a guest entry with a weight penalty and no championship points.' },
    { q: 'How much is a Maserati MC12 GT1 worth?', a: 'A 2006 example sold at RM Sotheby\'s London in 2019 for £2,050,000. Factory chassis 003 failed to sell at Gooding in 2015 against a $2,000,000 to $2,500,000 estimate. Public sales are rare enough that the market is hard to read.' },
  ],
  relatedPosts: ['mclaren-f1-gtr-the-road-car-that-won-le-mans', 'the-ultimate-ferrari-laferrari', 'how-mclaren-created-the-perfect-drivers-car'],
}

]

/**
 * Helper: get a single post by slug
 */
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}











