'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Section from './components/section';

export default function Home() {
  return (
    <>
      <div className="items-centerborder flex h-[200vh] flex-col border-red-400">
        <Section>
          <h1>Eric Cui</h1>
          <p>I am an undergraduate at Stanford University studying computer science</p>
        </Section>
        <Section>
          <h1>About</h1>
          <p>I am an undergraduate at Stanford University studying computer science</p>
        </Section>
        <Section>Experience</Section>
        <Section>Projects</Section>
        <Section>Footer</Section>

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
