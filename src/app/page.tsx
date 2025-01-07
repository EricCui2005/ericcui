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
      <Landing />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
