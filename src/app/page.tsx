'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AboutSection from './components/aboutSection';
import SkillsSection from './components/skillsSection';
import Landing from './components/landing';
import PortfolioSection from './components/portfolioSection';
import NavButton from './components/navButton';
import ContactSection from './components/contactSection';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="bg-lightBlue fixed flex h-[64px] w-[450px] flex-row items-center justify-center rounded-2xl drop-shadow-xl">
        <NavButton text="Home" onClick={() => scrollToSection('home')} />
        <NavButton text="About" onClick={() => scrollToSection('about')} />
        <NavButton text="Skills" onClick={() => scrollToSection('skills')} />
        <NavButton text="Portfolio" onClick={() => scrollToSection('portfolio')} />
        <NavButton text="Contact" onClick={() => scrollToSection('contact')} />
      </div>
      <div id="home"></div>
      <Landing />
      <div className="absolute top-[700px] w-full" id="about"></div>
      <AboutSection />
      <div id="skills"></div>
      <SkillsSection />
      <div className="absolute top-[2180px] w-full" id="portfolio"></div>
      <PortfolioSection />
      <div id="contact"></div>
      <ContactSection />

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
