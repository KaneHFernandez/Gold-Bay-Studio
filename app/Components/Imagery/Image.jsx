import './Image.css';

/**
 * Image
 *
 * Matches the Design System Base Template "Imagry" component.
 * Supports all 6 aspect ratio variants from the design system.
 *
 * Props:
 *   src        {string}   Image source URL
 *   alt        {string}   Alt text (required for accessibility)
 *   ratio      {string}   "2:1" | "3:2" | "5:4" | "1:1" | "4:5" | "16:9"  (default: "16:9")
 *   objectFit  {string}   "cover" | "contain" | "fill"  (default: "cover")
 *   className  {string}   Extra class names
 */
export default function Image({
  src,
  alt = '',
  ratio = '16:9',
  objectFit = 'cover',
  className = '',
}) {
  const ratioClass = `img--${ratio.replace(':', 'x')}`;

  const classes = ['img-wrapper', ratioClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {src ? (
        <img
         loading="lazy"
          src={src}
          alt={alt}
          className="img-media"
          style={{ objectFit }}
        />
      ) : (
        <div className="img-placeholder" aria-label={alt || 'Image placeholder'}>
          <span className="img-placeholder__label">{ratio}</span>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Usage examples

   // 16:9 (default)
   <Image src="/photo.jpg" alt="A racing car on track" />

   // Square
   <Image src="/photo.jpg" alt="Driver portrait" ratio="1:1" />

   // Portrait
   <Image src="/photo.jpg" alt="Car side profile" ratio="4:5" />

   // No src — shows placeholder with ratio label
   <Image ratio="3:2" alt="Coming soon" />

   // Custom fit
   <Image src="/logo.png" alt="Logo" ratio="2:1" objectFit="contain" />
────────────────────────────────────────────── */
