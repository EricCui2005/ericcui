import Image from 'next/image';

export default function RoundedImage({ image, dim }) {
  return (
    <>
      <Image
        src={image}
        height={dim}
        width={dim}
        alt="Eric Cui"
        className="aspect-square rounded-full object-cover"
      />
    </>
  );
}
