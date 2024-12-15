'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AboutSection from './components/aboutSection';
import SkillsSection from './components/skillsSection';
import Landing from './components/landing';
import PortfolioSection from './components/portfolioSection';

export default function Home() {
  return (
    <>
      <Landing />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />

      {/* <ParallaxProvider scrollAxis="vertical">
          <div className="relative z-20">
            <Parallax speed={-5}>
              <div className="border border-red-400 bg-red-600">Test 1</div>
            </Parallax>
          </div>
          <div className="relative z-10">
            <Parallax speed={5}>
              <div className="border border-green-400 bg-red-600">Test 2</div>
            </Parallax>
          </div>
        </ParallaxProvider> */}
    </>
  );
}
