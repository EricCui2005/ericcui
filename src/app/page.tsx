'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <>
      <div className="items-centerborder flex h-[200vh] flex-col border-red-400">
        <div className="mt-64 flex h-96 w-full flex-row items-center justify-center bg-gray-400">
          Eric Cui
        </div>

        {/* <ParallaxProvider scrollAxis="vertical">
          <div className="relative z-20">
            <Parallax speed={-5}>
              <div className="border border-blue-400 bg-red-600">Test 1</div>
            </Parallax>
          </div>
          <div className="relative z-10">
            <Parallax speed={5}>
              <div className="border border-green-400 bg-red-600">Test 2</div>
            </Parallax>
          </div>
        </ParallaxProvider> */}
      </div>
    </>
  );
}
