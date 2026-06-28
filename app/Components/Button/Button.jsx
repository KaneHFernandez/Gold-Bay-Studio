import './Button.css';

/**
 * Button
 *
 * Matches the Design System Base Template button components:
 *   - variant="primary"  → solid black, white text (Button/Cta State=Primary)
 *   - variant="outline"  → transparent bg, black border (Button/Cta State=Outline)
 *   - variant="link"     → text + arrow icon (Button State=Default)
 *
 * Props:
 *   label       {string}   Button text
 *   variant     {string}   "primary" | "outline" | "link"  (default: "primary")
 *   disabled    {boolean}  Disabled state
 *   onClick     {function} Click handler
 *   href        {string}   If provided, renders an <a> tag instead of <button>
 *   type        {string}   HTML button type — "button" | "submit" | "reset"  (default: "button")
 *   className   {string}   Extra class names
 */
export default function Button({
  children,
  label,
  variant = 'primary',
  disabled = false,
  onClick,
  href,
  type = 'button',
  className = '',
}) {
  const text = children ?? label ?? 'CTA Copy';
  const classes = [
    'btn',
    `btn--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const sharedProps = {
    className: classes,
    'aria-disabled': disabled || undefined,
    onClick: disabled ? undefined : onClick,
  };

  const content = (
   <span className="link-hover">
      {text}
      {/* {variant === 'link' && (
        <span className="btn__icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      )} */}
    </span>
  );

  if (href) {
    return (
      <a href={disabled ? undefined : href} {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} {...sharedProps}>
      {content}
    </button>
  );
}


/* ──────────────────────────────────────────────
   Usage examples

   // Primary (solid black)
   <Button label="Get Started" variant="primary" onClick={() => {}} />

   // Outline
   <Button label="Learn More" variant="outline" onClick={() => {}} />

   // Link with arrow
   <Button label="See all work" variant="link" href="/work" />

   // Disabled states
   <Button label="Unavailable" variant="primary" disabled />
   <Button label="Unavailable" variant="outline" disabled />

   // As a link tag
   <Button label="Book a Call" variant="primary" href="https://cal.com/yourlink" />
────────────────────────────────────────────── */
