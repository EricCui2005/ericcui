import LanguagesCard from '../components/languagesCard';
import TechnologiesCard from '../components/technologiesCard';
import DevToolsCard from '../components/devToolsCard';

export default function SkillsSection() {
  return (
    <>
      <div
        id="skills"
        className="flex h-auto w-full flex-col items-center justify-center gap-8 pt-28"
      >
        <h1 className="text-3xl font-bold text-white">Skills</h1>
        <div className="flex flex-row gap-[2vw]">
          <TechnologiesCard title="Technologies" />
          <LanguagesCard title="Languages" />
          <DevToolsCard title="Developer Tools" />
        </div>
      </div>
    </>
  );
}
