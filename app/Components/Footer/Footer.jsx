import Link from 'next/link'
import './Footer.css'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer({
  email = 'info@goldbay.studio',
  links = NAV_LINKS,
  className = '',
}) {
  return (
    <footer className={['footer', className].filter(Boolean).join(' ')}>
      <div className="footer__inner">
        <Link href="/" className="footer__logo">
          <img
            loading="lazy"
            src="/GOLDBAY_LOGO_TRANSPARENT.svg"
            alt="Gold Bay"
            className="footer__logo-img"
          />
        </Link>


        <a href={`mailto:${email}`} className="footer__email">
          {email}
        </a>
      </div>
    </footer>
  )
}
