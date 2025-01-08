import Image from 'next/image';

export default function SkillBlock({ label, img }) {
  return (
    <>
      <div className="flex h-28 w-28 flex-col items-center gap-4 rounded-xl bg-lightBlueHover p-4">
        <h1 className="text-sm text-white">{label}</h1>
        <Image src={img} height={40} width={40} alt={label} />
      </div>
    </>
  );
}
