import Image from 'next/image';

export default function SkillLine({ label, img, imgDim }) {
  return (
    <>
      <div className="relative flex h-[75px] w-[300px] flex-row items-center justify-center">
        <h1 className="absolute left-10 text-white">{label}</h1>
        <Image src={img} height={imgDim} width={imgDim} alt={label} className="absolute right-10" />
      </div>
    </>
  );
}
