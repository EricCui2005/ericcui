'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Section from './components/section';
import Image from 'next/image';
import RoundedImage from './components/roundedImage';
import React, { useEffect, useState } from 'react';
import NavButton from './components/navButton';
import AboutSection from './components/aboutSection';
import SkillCard from './components/skillCard';

export default function Home() {
  return (
    <>
      <div className="relative flex h-[100vh] flex-col items-center justify-center">
        <h1 className="text-5xl text-white">
          Hello, I'm <b>Eric</b>
        </h1>
        <div className="arrow down absolute bottom-[160px]"></div>
      </div>
      <div className="bg-lightBlue fixed flex h-[64px] w-[450px] flex-row items-center justify-center rounded-2xl">
        <NavButton text="Home" />
        <NavButton text="About" />
        <NavButton text="Skills" />
        <NavButton text="Portfolio" />
        <NavButton text="Contact" />
      </div>
      <div className="flex h-[200vh] flex-col items-center">
        <AboutSection />
        <div className="debug relative flex h-[125vh] w-full flex-col items-center justify-center">
          <h1 className="absolute top-[150px] text-[36px] font-bold text-white">Skills</h1>
          <div className="flex flex-row gap-8">
            <SkillCard title="Languages" />
            <SkillCard title="Technologies" />
            <SkillCard title="Developer Tools" />
          </div>
        </div>

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
      </div>
    </>
  );
}
