'use client';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Section from './components/section';
import Image from 'next/image';
import RoundedImage from './components/roundedImage';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <div className="items-centerborder flex h-[200vh] flex-col border-red-400">
        <Section>
          <RoundedImage image="/Eric.jpeg" />
          <h1>
            <div className="h-12">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={['', 0, 'Hi! My name is Eric!']}
                speed={50}
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
        <Section>Experience</Section>
        <Section>Skills</Section>
        <Section>Projects</Section>
        <Section>Footer</Section>

        <ParallaxProvider scrollAxis="vertical">
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
        </ParallaxProvider>
      </div>
    </>
  );
}
