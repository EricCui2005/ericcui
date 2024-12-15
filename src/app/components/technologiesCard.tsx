import SkillLine from './skillLine';

export default function TechnologiesCard({ title }) {
  return (
    <>
      <div className="bg-lightBlue flex h-[65vh] w-[30vw] flex-col items-center rounded-3xl pt-4 drop-shadow-xl">
        <h1 className="mt-1 text-[28px] text-white">{title}</h1>
        <div className="mt-4 flex w-3/4 flex-col items-center justify-center gap-4">
          <SkillLine label="React" img={'/react.png'} imgDim={50} />
          <SkillLine label="Next.js" img={'/next.png'} imgDim={50} />
          <SkillLine label="Node.js" img={'/node.png'} imgDim={50} />
          <SkillLine label=".NET" img={'/NET.png'} imgDim={50} />
          <SkillLine label="TensorFlow" img={'/tensorFlow.png'} imgDim={50} />
        </div>
      </div>
    </>
  );
}
