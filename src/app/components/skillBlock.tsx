import Image from 'next/image';

export default function SkillBlock({ label, img }) {
  return (
    <>
      <div className="flex h-[12vh] w-[7vw] flex-col items-center justify-center gap-[1vh] rounded-xl bg-lightBlueHover">
        <h1 className="text-sm text-white">{label}</h1>
        <Image src={img} height={30} width={30} alt={label} />
      </div>
    </>
  );
}
