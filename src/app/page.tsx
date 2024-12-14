'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  const SlowAndFast = () => (
    <>
      <Parallax speed={-5}>
        <div className="slow">Hello</div>
      </Parallax>
      <Parallax speed={5}>
        <div className="fast">Hello</div>
      </Parallax>
    </>
  );

  return (
    <>
      {/* <ParallaxProvider scrollAxis="vertical">
        <SlowAndFast></SlowAndFast>
      </ParallaxProvider> */}
      <div className="h-full border border-black">Testing</div>
    </>
  );
}
