import SkillLine from './skillLine';

export default function LanguagesCard({ title }) {
  return (
    <>
      <div className="bg-lightBlue flex h-[65vh] w-[30vw] flex-col items-center rounded-3xl pt-4 drop-shadow-xl">
        <h1 className="mt-1 text-[28px] text-white">{title}</h1>
        <div className="mt-4 flex w-3/4 flex-col items-center justify-center gap-4">
          <SkillLine label="Python" img={'/python.png'} imgDim={50} />
          <SkillLine label="C++" img={'/cpp.png'} imgDim={50} />
          <SkillLine label="C#" img={'/csharp.png'} imgDim={50} />
          <SkillLine label="Java" img={'/java.png'} imgDim={50} />
          <SkillLine label="JavaScript" img={'/javaScript.png'} imgDim={50} />
        </div>
      </div>
    </>
  );
}
