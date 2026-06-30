'use client';
import { useRef, useEffect } from 'react';
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
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!wrapper || !section || !inner) return;

    function setup() {
      wrapper.style.height = `${inner.scrollHeight}px`;
    }

    const stickyTop = parseFloat(getComputedStyle(section).top) || 0;

    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const visibleH = section.getBoundingClientRect().height;
        const scrolled = Math.max(0, -(wrapper.getBoundingClientRect().top - stickyTop));
        const maxScroll = Math.max(0, inner.scrollHeight - visibleH);
        inner.style.transform = `translateY(${-Math.min(scrolled, maxScroll)}px)`;
      });
    }

    const ro = new ResizeObserver(setup);
    ro.observe(inner);
    setup();

    window.addEventListener('scroll', onScroll, { passive: true });

    // Only make the footer sticky while the gallery is in the viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle('gallery-active', entry.isIntersecting);
      },
      { threshold: 0 }
    );
    io.observe(wrapper);

    return () => {
      window.removeEventListener('scroll', onScroll);
      ro.disconnect();
      io.disconnect();
      document.documentElement.classList.remove('gallery-active');
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="community-gallery-wrapper">
      <section ref={sectionRef} className="community-gallery">
        <div ref={innerRef} className="community-gallery__inner">
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
        </div>
      </section>
    </div>
  );
}
