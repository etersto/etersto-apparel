"use client";

import { useEffect, useState } from "react";

type HeroSlide = {
  title: string;
  caption: string;
  image?: string;
  tone: string;
};

const slides: HeroSlide[] = [
  {
    title: "Our Factory",
    caption: "It is located in Suning County, Cangzhou City, Hebei Province, China.",
    image: "../images/hero/factory-floor.jpeg",
    tone: "factory"
  },
  {
    title: "Production Workshop",
    caption: "custom logo to any position you prefer with your chosen printing technique.",
    image: "../images/hero/tshirt-production.jpg",
    tone: "production"
  },
  {
    title: "Packing",
    caption: "Ample production capacity to fulfill your orders.",
    image: "../images/hero/quality-packing.jpg",
    tone: "quality"
  }
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <div
      className={`hero-carousel hero-carousel-${slide.tone}`}
      aria-label="Factory image carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slide.image ? (
        <img className="hero-carousel-image" src={slide.image} alt={slide.title} />
      ) : (
        <div
          className="hero-carousel-placeholder"
          role="img"
          aria-label={`${slide.title} placeholder`}
        />
      )}

      <div className="hero-carousel-overlay">
        <p>{slide.title}</p>
        <span>{slide.caption}</span>
      </div>

      <div className="hero-carousel-controls" aria-label="Choose carousel slide">
        {slides.map((item, index) => (
          <button
            aria-label={`Show ${item.title}`}
            aria-pressed={active === index}
            className={active === index ? "active" : ""}
            key={item.title}
            onClick={() => setActive(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}