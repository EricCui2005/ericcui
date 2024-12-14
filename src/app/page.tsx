'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <>
      <div className="flex h-[200vh] flex-col items-center justify-center border border-red-400">
        <ParallaxProvider scrollAxis="vertical">
          <div className="relative z-20">
            <Parallax speed={-5}>
              <div className="relative z-20 border border-blue-400 bg-red-600">Test 1</div>
            </Parallax>
          </div>
          <div className="relative z-10">
            <Parallax speed={5}>
              <div className="relative z-10 border border-green-400 bg-red-600">Test 2</div>
            </Parallax>
          </div>
        </ParallaxProvider>
      </div>
    </>
  );
}
