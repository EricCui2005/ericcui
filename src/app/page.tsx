'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Section from './components/section';
import Image from 'next/image';
import RoundedImage from './components/roundedImage';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useState } from 'react';
import NavButton from './components/navButton';

export default function Home() {
  return (
    <>
      <div className="relative flex h-[100vh] flex-col items-center justify-center">
        <h1 className="text-5xl text-white">Hello, I'm Eric.</h1>
        <div className="arrow down absolute bottom-24"></div>
      </div>
      <div className="bg-lightBlue fixed flex h-[64px] w-[450px] flex-row items-center justify-center rounded-2xl">
        <NavButton text="Home" />
        <NavButton text="About" />
        <NavButton text="Skills" />
        <NavButton text="Portfolio" />
        <NavButton text="Contact" />
      </div>
      <div className="flex h-[200vh] flex-col items-center">
        <Section>
          <RoundedImage image="/Eric.jpeg" />
          <h1>
            <div className="h-12">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={['', 0, 'Hi! My name is Eric!']}
                speed={10}
                style={{ fontSize: '2em' }}
              />
            </div>
          </h1>
        </Section>
        <Section>
          <h1>
            <b>About</b>
          </h1>
          <p className="w-3/4">
            Hi there! I’m Eric Cui, an undergraduate Computer Science student at Stanford University
            specializing in Artificial Intelligence. I’m passionate about creating innovative
            solutions at the intersection of deep learning, full-stack development, and cutting-edge
            AI research. My experience spans building scalable web applications, integrating natural
            language processing systems, and managing robust API services. I’m always eager to
            tackle challenging projects and collaborate with others to make an impact. Let’s connect
            at ericcui[at]stanford.edu!
          </p>
        </Section>
        <Section>
          <h1>
            <b>Experience</b>
          </h1>
          <p className="w-3/4">Talk about Wise-Sales</p>
        </Section>
        <Section>Skills</Section>
        <Section>Projects</Section>
        <Section>Footer</Section>

        <ParallaxProvider scrollAxis="vertical">
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
        </ParallaxProvider>
      </div>
    </>
  );
}
