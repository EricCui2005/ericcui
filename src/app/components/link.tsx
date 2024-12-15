import Image from 'next/image';

export default function Link({ text, link }) {
  return (
    <>
      <a
        className="block flex flex-row items-center justify-center gap-1 rounded-xl bg-gray-900 pl-2 pr-3"
        target="_blank"
        href={link}
      >
        <Image
          src={'/link.png'}
          height={15}
          width={15}
          alt={text}
          className="aspect-square object-cover"
        />
        <p className="text-[14px] text-gray-300">{text}</p>
      </a>
    </>
  );
}
