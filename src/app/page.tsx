'use client';
import AboutSection from './sections/aboutSection';
import SkillsSection from './sections/skillsSection';
import Landing from './sections/landing';
import PortfolioSection from './sections/portfolioSection';
import NavBar from './components/navBar';
import ContactSection from './sections/contactSection';
import CustomHead from './components/customHead';

export default function Home() {
  return (
    <>
      <CustomHead />
      <NavBar />
      <div id="home"></div>
      <Landing />
      <div className="absolute top-[85%] w-full" id="about"></div>
      <AboutSection />
      <div id="skills"></div>
      <SkillsSection />
      <div className="absolute top-[261%] w-full" id="portfolio"></div>
      <PortfolioSection />
      <div id="contact"></div>
      <ContactSection />
    </>
  );
}
