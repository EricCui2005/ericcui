import PortfolioCarousel from '../components/portfolioCarousel';
import { useEffect, useRef, useState } from 'react';

export default function PortfolioSection() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);

      checkScroll();
    }
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);
  return (
    <>
      <div
        id="portfolio"
        className="flex h-auto w-full flex-col items-center justify-center gap-8 pt-28"
      >
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        <div className="flex h-full w-full flex-row items-center justify-center gap-8 px-[4.6rem]">
          <div className="w-4">{showLeftArrow && <div className="arrow left"></div>}</div>
          <div
            ref={scrollContainerRef}
            className="items-top flex h-full w-full flex-row gap-8 overflow-x-auto scrollbar-hide"
          >
            <PortfolioCarousel />
          </div>
          <div className="w-4">{showRightArrow && <div className="arrow right"></div>}</div>
        </div>
      </div>
    </>
  );
}
