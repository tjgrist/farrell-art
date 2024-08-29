"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/embla.css";

const EmblaCarousel = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [slideHeights, setSlideHeights] = useState([]);
  
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);
  
    const onResize = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.reInit();
      setSlideHeights([]);
    }, [emblaApi]);
  
    useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      onResize();
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);
      window.addEventListener('resize', onResize);
      return () => {
        emblaApi.off('select', onSelect);
        window.removeEventListener('resize', onResize);
      };
    }, [emblaApi, onSelect, onResize]);
  
    const onImageLoad = (event, index) => {
      const height = event.target.offsetHeight;
      setSlideHeights(prev => {
        const newHeights = [...prev];
        newHeights[index] = height;
        return newHeights;
      });
    };
  
    const maxHeight = Math.max(...slideHeights, 0);
  
    return (
      <div className="embla" style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={slide.src}
                    alt={slide.alt}
                    onLoad={(event) => onImageLoad(event, index)}
                    width={slide.width}
                    height={slide.height}
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="embla__button embla__button--prev" onClick={scrollPrev} disabled={!prevBtnEnabled}>
          &lt;
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext} disabled={!nextBtnEnabled}>
          &gt;
        </button>
      </div>
    );
  };
  
  export default EmblaCarousel;
