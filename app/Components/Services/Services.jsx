'use client';

import { useState } from 'react';
import Image from 'next/image';
import './Services.css';
import Button from '../Button/Button';

const DEFAULT_SERVICES = [
  {
    title: 'BRAND STRATEGY',
    description:
      'Everything your brand needs, built from the strategy up. Positioning that earns credibility, design that holds its standard, and a brand that performs where it counts.',
    href: '#',
    imageSrc: '/images/brand-strategy.jpg',
  },
  {
    title: 'WEB DESIGN',
    description:
      'Sites built to convert. Clean structure, sharp visual language, and interactions that feel considered — not just functional.',
    href: '#',
    imageSrc: '/images/web-design.jpg',
  },
  {
    title: 'GRAPHIC DESIGN',
    description:
      'Visual work that carries weight. From identity systems to one-off campaigns, every output is crafted to hold its own.',
    href: '#',
    imageSrc: '/images/graphic-design.jpg',
  },
];

export default function Services({
  heading = 'OUR CRAFT',
  services = DEFAULT_SERVICES,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleTap(i) {
    // On mobile, tap toggles — tap again to deactivate
    setActiveIndex(prev => (prev === i ? -1 : i));
  }

  return (
    <section
      className={['services-section', className].filter(Boolean).join(' ')}
    >
      <h2 className="services-section__heading">{heading}</h2>

      <div
        className="services-section__grid"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {services.map((service, i) => (
          <div
            key={i}
            className={[
              'services-section__panel',
              i === activeIndex ? 'services-section__panel--active' : '',
              i < services.length - 1 ? 'services-section__panel--bordered' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() => handleTap(i)}
          >
            {service.imageSrc && (
              <div className="services-section__bg">
                <Image
                  loading="lazy"
                  src={service.imageSrc}
                  alt=""
                  fill
                  className="services-section__bg-image"
                />
                <div className="services-section__bg-overlay" />
              </div>
            )}

            <p className="services-section__description">
              {service.description}
            </p>

            <div className="services-section__footer">
              <h3 className="services-section__title">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
