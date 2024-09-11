"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ImageWithSkeleton from "../components/imageWithSkeleton";
import "../styles/embla.css";

const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [slideHeights, setSlideHeights] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

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
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    window.addEventListener("resize", onResize);
    return () => {
      emblaApi.off("select", onSelect);
      window.removeEventListener("resize", onResize);
    };
  }, [emblaApi, onSelect, onResize]);

  const onImageLoad = (event, index) => {
    const height = event.target.naturalHeight;
    setSlideHeights((prev) => {
      const newHeights = [...prev];
      newHeights[index] = height;
      return newHeights;
    });
  };

  const maxHeight = Math.max(...slideHeights, 0);

  return (
    <div
      className="embla"
      style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <ImageWithSkeleton
                  className="embla__slide__img"
                  onLoadingComplete={(event) => onImageLoad(event, index)}
                  priority={index === 0}
                  {...slide}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.39c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0a5994246.277 5994246.277 0 0 1 229.332 229.454 35.065 35.065 0 0 0 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default EmblaCarousel;
