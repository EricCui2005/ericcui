'use client';
import AboutSection from './components/aboutSection';
import SkillsSection from './components/skillsSection';
import Landing from './components/landing';
import PortfolioSection from './components/portfolioSection';
import NavButton from './components/navButton';
import ContactSection from './components/contactSection';
import Head from 'next/head';

// Home page
export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Head>
        <title>Eric Cui</title>
        <meta
          name="description"
          content="Eric Cui's personal web page. Eric is an computer science major at Stanford University looking to write practical code and build impactful tools."
        />
        <meta
          name="keywords"
          content="Stanford, Stanford University, Computer Science, Eric Cui, Software Engineer"
        />
        <meta name="author" content="Eric Cui" />
      </Head>
      <div className="fixed flex h-[64px] w-[450px] flex-row items-center justify-center rounded-2xl bg-lightBlue drop-shadow-xl">
        <NavButton text="Home" ref="home" />
        <NavButton text="About" ref="about" />
        <NavButton text="Skills" ref="skills" />
        <NavButton text="Portfolio" ref="portfolio" />
        <NavButton text="Contact" ref="contact" />
      </div>
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
