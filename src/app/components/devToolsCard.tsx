import SkillLine from './skillLine';

export default function DevToolsCard({ title }) {
  return (
    <>
      <div className="bg-lightBlue flex h-[65vh] w-[30vw] flex-col items-center rounded-3xl pt-4 drop-shadow-xl">
        <h1 className="mt-1 text-[28px] text-white">{title}</h1>
        <div className="mt-4 flex w-3/4 flex-col items-center justify-center gap-4">
          <SkillLine label="Git" img={'/git.png'} imgDim={50} />
          <SkillLine label="GitHub" img={'/gitHub.png'} imgDim={50} />
          <SkillLine label="Jira" img={'/jira.png'} imgDim={50} />
          <SkillLine label="BitBucket" img={'/bitBucket.png'} imgDim={50} />
          <SkillLine label="VS Code" img={'/vsCode.png'} imgDim={50} />
        </div>
      </div>
    </>
  );
}
