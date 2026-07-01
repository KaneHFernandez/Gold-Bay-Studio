import "./globals.css";
import Header from "./Components/Navbar/Header";
import Footer from "./Components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  
  metadataBase: new URL('https://goldbay.studio'),

  title: {
    default: 'Gold Bay — Premium Automotive Brand Studio',
    template: '%s — Gold Bay',
  },

  description:
    'Gold Bay is the only brand development studio built exclusively for the premium automotive world. Strategy, identity, and positioning for supercar clubs, luxury dealerships, track day operators, and niche manufacturers.',

  keywords: [
    'automotive brand agency',
    'premium automotive branding',
    'supercar brand studio',
    'luxury automotive marketing',
    'motorsport brand identity',
    'automotive brand strategy',
    'hypercar branding',
    'track day brand development',
  ],

  authors: [{ name: 'Gold Bay Studio', url: 'https://goldbay.studio' }],

  creator: 'Gold Bay Studio',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goldbay.studio',
    siteName: 'Gold Bay',
    title: 'Gold Bay — Premium Automotive Brand Studio',
    description:
      'The only brand development studio built exclusively for the premium automotive world.',
    images: [
      {
        url: '/og-image.jpg', // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Gold Bay — Premium Automotive Brand Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gold Bay — Premium Automotive Brand Studio',
    description:
      'The only brand development studio built exclusively for the premium automotive world.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
}


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Gold Bay Studio',
  url: 'https://goldbay.studio',
  email: 'info@goldbay.studio',
  description: 'Brand development studio built exclusively for the premium automotive world. Strategy, identity, and positioning for supercar clubs, luxury dealerships, track day operators, and niche manufacturers.',
  knowsAbout: ['Automotive Branding', 'Brand Strategy', 'Premium Automotive', 'Supercar Branding'],
  serviceType: ['Brand Development', 'Web Design', 'Graphic Design'],
  areaServed: 'Worldwide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="day" data-scroll-behavior="smooth">
      <Analytics/>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
