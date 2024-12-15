import Image from 'next/image';

export default function SkillLine({ label, img, imgDim }) {
  return (
    <>
      <div className="bg-lightBlueHover relative flex h-[75px] w-[400px] flex-row items-center justify-center rounded-xl">
        <h1 className="absolute left-10 text-[24px] text-white">{label}</h1>
        <Image src={img} height={imgDim} width={imgDim} alt={label} className="absolute right-10" />
      </div>
    </>
  );
}
