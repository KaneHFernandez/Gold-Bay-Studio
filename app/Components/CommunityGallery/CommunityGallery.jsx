import Image from 'next/image';
import './CommunityGallery.css';

const SPAN_PATTERN = [5, 4, 3, 3, 4, 5, 6, 6];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

export default function CommunityGallery({ images = [], heading = 'From the Community' }) {
  return (
    <section className="community-gallery">
      <h2 className="community-gallery__heading">{heading}</h2>
      <div className="community-gallery__grid">
        {images.map((item, i) => {
          const isInstagram = item.href?.includes('instagram');
          return (
            <div
              key={i}
              className="community-gallery__card"
              style={{ '--span': SPAN_PATTERN[i % SPAN_PATTERN.length] }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="community-gallery__link"
                aria-label={item.alt || (isInstagram ? 'View on Instagram' : 'View photographer portfolio')}
              >
                <Image
                 loading="lazy"
                  src={item.src}
                  alt=""
                  width={600}
                  height={285}
                  className="community-gallery__image"
                />
                <div className="community-gallery__overlay" />
                <div className="community-gallery__icon">
                  {isInstagram ? <InstagramIcon /> : <GlobeIcon />}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
