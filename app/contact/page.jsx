import ContactSection from '../Components/Contact/ContactSection'
import './page.css'

export const metadata = {
  title: 'Contact',
  description:
    'Gold Bay works with premium automotive businesses that have outgrown their brand and want a partner who will treat the rebuild with the same seriousness they bring to everything else.',
  openGraph: {
    title: 'Contact — Gold Bay',
    description:
      'Ready to build a brand the premium automotive world respects? Let\'s talk.',
    url: 'https://goldbay.studio/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <ContactSection
        heading="LETS WORK TOGETHER"
        paragraph="Let's talk about where your brand is now and where it needs to go."
        eyebrow="Get in touch"
        subheading="info@goldbay.studio"
        imageSrc={"/1954–1955 Ferrari 750 Monza Spider.jpg"}
      />
    </main>
  )
}
