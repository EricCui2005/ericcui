import LanguagesCard from './languagesCard';
import TechnologiesCard from './technologiesCard';
import DevToolsCard from './devToolsCard';

export default function SkillsSection() {
  return (
    <>
      <div className="debug relative flex h-[125vh] w-full flex-col items-center justify-center">
        <h1 className="absolute top-[150px] text-[36px] font-bold text-white">Skills</h1>
        <div className="flex flex-row gap-8">
          <LanguagesCard title="Languages" />
          <TechnologiesCard title="Technologies" />
          <DevToolsCard title="Developer Tools" />
        </div>
      </div>
    </>
  );
}
