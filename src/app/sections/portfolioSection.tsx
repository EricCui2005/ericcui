import PortfolioCard from '../components/portfolioCard';
import { useEffect, useRef, useState } from 'react';

export default function PortfolioSection() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);

      checkScroll();
    }
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);
  return (
    <>
      <div
        id="portfolio"
        className="font-text mb-12 flex w-full flex-col items-center justify-center gap-8 pt-28"
      >
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        <div className="flex h-full w-full flex-row items-center justify-center gap-8 px-[4.1rem]">
          <div className="w-4">{showLeftArrow && <div className="arrow left"></div>}</div>
          <div
            ref={scrollContainerRef}
            className="items-top flex h-full w-full flex-row gap-8 overflow-x-scroll pb-8 scrollbar-hide"
          >
            <PortfolioCard
              title="Stanford Scheduler"
              techs={['Python', 'Flask', 'MongoDB', 'React', 'Next.js', 'Tailwind', 'Node.js']}
              links={[
                {
                  text: 'GitHub',
                  link: 'https://github.com/ChapSpace/CourseConstrainSolverBackend',
                },
              ]}
              img="/Stanford Scheduler.svg"
            >
              A Z3 theorem-powered Stanford course scheduling application capable of incorporating
              degree program requirements and user preferences to output optimal 4-year course
              schedules.
            </PortfolioCard>
            <PortfolioCard
              title="Behavioral Cloning in 2048"
              techs={[
                'TensorFlow',
                'Jupyter Notebook',
                'Google Colab',
                'Tkinter',
                'Tqdm',
                'Python',
                'C++',
              ]}
              links={[
                {
                  text: 'GitHub',
                  link: 'https://github.com/EricCui2005/2048',
                },
                {
                  text: 'Report',
                  link: 'https://drive.google.com/file/d/1O7x6gZ0GiAALIRFp8dv8l2TGeE0QlWSU/view?usp=sharing',
                },
              ]}
              img="/2048.svg"
            >
              A research study exploring AI play in 2048 with deep behavioral cloning neural
              networks trained on expert data generated from Monte Carlo Tree Search.
            </PortfolioCard>
            <PortfolioCard
              title="Education Technology Copilot"
              techs={['React', 'Next.js', 'NLP', 'Node.js', 'Tailwind']}
              links={[
                {
                  text: 'GitHub',
                  link: 'https://github.com/EricCui2005/subject-sandbox',
                },
              ]}
              img="/Subject.svg"
            >
              An NLP-powered education technology copilot in partnership with Subject Learning
              capable of generating module-specific supplementary learning materials and supporting
              content-based timestamp seeking.
            </PortfolioCard>
            <PortfolioCard
              title="Chihuahua, or Muffin?"
              techs={['Google Colab', 'Python', 'TensorFlow']}
              links={[
                {
                  text: 'GitHub',
                  link: 'https://github.com/EricCui2005/Chuffin',
                },
                {
                  text: 'Report',
                  link: 'https://drive.google.com/file/d/1rj0hPTKIullq8Tfltbj2IXPIyfsg0rhr/view?usp=sharing',
                },
              ]}
              img="/Chuffin.svg"
            >
              A research study exploring training convolutional neural networks to differentiate
              between muffin-esque chihuahuas and dog-like blueberry muffins.
            </PortfolioCard>
            <PortfolioCard
              title="AI for Nine Men's Morris"
              techs={['Google Colab', 'Python', 'Replit']}
              links={[
                {
                  text: 'GitHub',
                  link: 'https://github.com/EricCui2005/Nine-Mens-Morris',
                },
                {
                  text: 'Report',
                  link: 'https://drive.google.com/file/d/1DelBpF1LLmoTEyKdarjO7lrHgJN2c7Z7/view?usp=sharing',
                },
              ]}
              img="/NMM.svg"
            >
              A research study exploring AI play in Nine Men's Morris using recursive
              decision-making algorithms and custom game evaluation routines.
            </PortfolioCard>
          </div>
          <div className="w-4">{showRightArrow && <div className="arrow right"></div>}</div>
        </div>
      </div>
    </>
  );
}
