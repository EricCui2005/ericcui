import TechCell from './techCell';
import Link from './link';
import Image from 'next/image';

export default function PortfolioCard({ title, children, techs, links, img }) {
  return (
    <>
      <div className="h-[37.5rem] min-w-[24.5rem] overflow-hidden rounded-3xl bg-lightBlue drop-shadow-xl">
        <div className="flex h-[35%] w-full flex-row items-center justify-center">
          <Image src={img} alt={title} height={200} width={450} />
        </div>
        <div className="relative flex h-[65%] w-full flex-col items-center bg-darkerBlue">
          <div className="flex h-2/3 w-full flex-col items-center">
            <div className="text-white">
              <h1 className="text-[20px] font-bold">{title}</h1>
              <div className="mb-1 mt-1 flex flex-row gap-1">
                {links.map((linkPair, index) => (
                  <Link key={index} text={linkPair['text']} link={linkPair['link']} />
                ))}
              </div>
              <p className="text-[18px]">{children}</p>
              <div className="flex h-[120px] w-[350px] flex-row-reverse flex-wrap-reverse content-start gap-2 gap-y-2 p-2 text-neonBlue">
                {techs.map((tech, index) => (
                  <TechCell key={index} text={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
