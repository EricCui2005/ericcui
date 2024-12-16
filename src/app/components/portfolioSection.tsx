import PortfolioCard from './portfolioCard';

export default function PortfolioSection() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
        <h1 className="absolute top-7 text-[36px] font-bold text-white">Portfolio</h1>
        <div className="absolute top-28 flex w-5/6 flex-row items-center gap-8 overflow-x-auto">
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
            Z3 theorem-powered Stanford course scheduling application.
          </PortfolioCard>
          <PortfolioCard
            title="Behavioral Cloning in 2048"
            techs={['TensorFlow', 'Jupyter Notebook', 'Python', 'Tkinter', 'C++', 'Tqdm']}
            links={[
              {
                text: 'GitHub',
                link: 'https://github.com/EricCui2005/2048',
              },
            ]}
            img="/2048.svg"
          >
            Deep Behavioral Cloning using expert data from Monte Carlo Tree Search 2048 project.
          </PortfolioCard>
          <PortfolioCard
            title="Education Technology Copilot"
            techs={['React', 'Next.js', 'NLP', 'Node.js']}
            links={[
              {
                text: 'GitHub',
                link: 'https://github.com/EricCui2005/2048',
              },
            ]}
            img="/Subject.svg"
          >
            NLP-powered education technology lecture copilot in partnership with Subject Learning.
          </PortfolioCard>
          <PortfolioCard
            title="Chihuahua, or Muffin?"
            techs={['Google Colab', 'Python', 'TensorFlow']}
            links={[
              {
                text: 'GitHub',
                link: 'https://github.com/EricCui2005/2048',
              },
            ]}
            img="/Chuffin.svg"
          >
            Trained convolutional neural networks to identify the difference between Chihuahuas and
            muffins.
          </PortfolioCard>
          <PortfolioCard
            title="Chihuahua, or Muffin?"
            techs={['Google Colab', 'Python', 'TensorFlow']}
            links={[
              {
                text: 'GitHub',
                link: 'https://github.com/EricCui2005/2048',
              },
            ]}
            img="/Chuffin.svg"
          >
            Trained convolutional neural networks to identify the difference between Chihuahuas and
            muffins.
          </PortfolioCard>
        </div>
      </div>
    </>
  );
}
