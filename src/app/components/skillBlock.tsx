import Image from 'next/image';

export default function SkillBlock({ label, img }) {
  return (
    <>
      <div className="flex h-[6.5rem] w-[6.5rem] flex-col items-center gap-3 rounded-xl bg-lightBlueHover p-4">
        <h1 className="text-sm text-white">{label}</h1>
        <div className="flex items-center justify-center">
          <Image src={img} height={40} width={40} alt={label} />
        </div>
      </div>
    </>
  );
}
