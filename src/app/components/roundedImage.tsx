import Image from 'next/image';

export default function RoundedImage({ image }) {
  return (
    <>
      <Image
        src={image}
        height={100}
        width={100}
        alt="Eric Cui"
        className="aspect-square rounded-full object-cover"
      />
    </>
  );
}
