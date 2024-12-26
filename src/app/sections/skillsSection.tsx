import LanguagesCard from '../components/languagesCard';
import TechnologiesCard from '../components/technologiesCard';
import DevToolsCard from '../components/devToolsCard';

export default function SkillsSection() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
        <h1 className="absolute top-[14%] text-3xl font-bold text-white">Skills</h1>
        <div className="absolute top-[22%] flex flex-row gap-[2vw]">
          <LanguagesCard title="Languages" />
          <TechnologiesCard title="Technologies" />
          <DevToolsCard title="Developer Tools" />
        </div>
      </div>
    </>
  );
}
