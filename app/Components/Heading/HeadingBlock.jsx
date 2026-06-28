import './HeadingBlock.css';
import Button from '../Button/Button';

/**
 * HeadingBlock
 *
 * Matches the Design System Base Template "Content/Heading-Block" component.
 * Structure: h2 Heading → Paragraph → Optional CTA Button
 *
 * Props:
 *   heading     {string}   H3 heading text
 *   paragraph   {string}   Body paragraph text
 *   cta         {object}   { label, href, onClick } — optional primary button
 *   showButton  {boolean}  Show/hide the CTA button (default: true)
 *   align       {string}   "center" | "left"  (default: "center")
 *   className   {string}   Extra class names
 */
export default function HeadingBlock({
  heading,
  paragraph,
  cta,
  showButton = true,
  align = 'center',
  className = '',
}) {
  const classes = ['heading-block', `heading-block--${align}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {heading && (
        <h2 className="heading-block__heading">{heading}</h2>
      )}

      {paragraph && (
        <p className="heading-block__paragraph">{paragraph}</p>
      )}

      {showButton && cta && (
        <Button
          variant="primary"
          href={cta.href}
          onClick={cta.onClick}
        >
          {cta.label}
        </Button>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Usage examples

   // Center-aligned (default) with CTA
   <HeadingBlock
     heading="Lorem ipsum dolor"
     paragraph="Sed ut perspiciatis unde omnis iste natus."
     cta={{ label: 'Get Started', href: '/contact' }}
   />

   // Left-aligned, no button
   <HeadingBlock
     heading="Our Services"
     paragraph="We build strategy-backed websites."
     align="left"
     showButton={false}
   />

   // Center, hide button conditionally
   <HeadingBlock
     heading="What we do"
     paragraph="Strategy and proof behind every decision."
     cta={{ label: 'Book a Call', href: '/book' }}
     showButton={false}
   />
────────────────────────────────────────────── */
