import './Content.css';
import Button from '../Button/Button';

/**
 * Content
 *
 * Matches the Design System Base Template "Content" component.
 * Structure: Eyebrow → H3 Heading → Paragraph → Double CTA
 *
 * Props:
 *   eyebrow      {string}    Small label above heading
 *   heading      {string}    H3 heading text
 *   paragraph    {string}    Body paragraph text
 *   primaryCta   {object}    { label, href, onClick } — primary (solid) button
 *   secondaryCta {object}    { label, href, onClick } — link button with arrow
 *   align        {string}    "left" | "center"  (default: "left")
 *   className    {string}    Extra class names
 */
export default function Content({
  eyebrow,
  heading,
  paragraph,
  primaryCta,
  secondaryCta,
  align = 'left',
  className = '',
}) {
  const classes = ['content', `content--${align}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {/* Eyebrow + Heading */}
      <div className="content__heading-block">
        {eyebrow && (
          <p className="content__eyebrow">{eyebrow}</p>
        )}
        {heading && (
          <h2 className="content__heading">{heading}</h2>
        )}
      </div>

      {/* Paragraph */}
      {paragraph && (
        <p className="content__paragraph">{paragraph}</p>
      )}

      {/* Double CTA */}
      {(primaryCta || secondaryCta) && (
        <div className="content__cta-group">
          {primaryCta && (
            <Button
              variant="primary"
              href={primaryCta.href}
              onClick={primaryCta.onClick}
            >
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button
              variant="link"
              href={secondaryCta.href}
              onClick={secondaryCta.onClick}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Usage examples

   <Content
     eyebrow="sit amet"
     heading="Lorem ipsum dolor"
     paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
     primaryCta={{ label: 'Get Started', href: '/contact' }}
     secondaryCta={{ label: 'Learn More', href: '/about' }}
   />

   // Center-aligned
   <Content
     eyebrow="Our Services"
     heading="What we build"
     paragraph="Strategy and proof behind every decision."
     primaryCta={{ label: 'Book a Call', href: '/book' }}
     align="center"
   />

   // No CTAs
   <Content
     heading="About us"
     paragraph="We build websites that convert."
   />
────────────────────────────────────────────── */
