'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../Button/Button'
import './Header.css'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
]

export default function Header({
  links = NAV_LINKS,
  ctaLabel = 'Contact',
  ctaHref = '/contact',
  className = '',
}) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  function closeMenu() {
    setIsClosing(true)
  }

  function handleAnimationEnd() {
    if (isClosing) {
      setMenuOpen(false)
      setIsClosing(false)
    }
  }

  return (
    <>
      <header className={['header', className].filter(Boolean).join(' ')}>
        <div className="header__inner">
          <Link href="/" className="header__logo" onClick={() => setMenuOpen(false)}>
            <img
              src="/GOLDBAY_WORDMARK.svg"
              alt="Gold Bay"
              className="header__logo-img"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="header__nav">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={[
                  'header__link',
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'header__link--active'
                    : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button href={ctaHref} className="header__cta-btn">
            {ctaLabel}
          </Button>

          {/* Mobile hamburger */}
          <button
            className={['header__hamburger', menuOpen ? 'header__hamburger--open' : ''].filter(Boolean).join(' ')}
            onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className={['mobile-menu', isClosing ? 'mobile-menu--closing' : ''].filter(Boolean).join(' ')}
          onClick={closeMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          id="mobile-menu"
        >
          <div
            className={['mobile-menu__panel', isClosing ? 'mobile-menu__panel--closing' : ''].filter(Boolean).join(' ')}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={handleAnimationEnd}
          >
            <button
              className="mobile-menu__close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>

            <nav className="mobile-menu__nav">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                className="mobile-menu__link"
                onClick={closeMenu}
              >
                {ctaLabel}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
