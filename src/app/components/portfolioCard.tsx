import TechCell from './techCell';
import Link from './link';
import Image from 'next/image';

export default function PortfolioCard({ title, children, techs, links, img }) {
  return (
    <>
      <div className="bg-lightBlue h-[600px] min-w-[386px] overflow-hidden rounded-3xl drop-shadow-xl">
        <div className="absolute z-10 flex h-[200px] w-full flex-row items-center justify-center">
          <Image src={img} alt={title} height={200} width={450} />
        </div>
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="bg-darkerBlue absolute top-1/3 z-20 flex h-2/3 w-full flex-col items-center">
            <div className="mt-4 h-[90%] w-[90%] text-white">
              <h1 className="text-[20px] font-bold">{title}</h1>
              <div className="mb-1 mt-1 flex flex-row gap-1">
                {links.map((linkPair, index) => (
                  <Link key={index} text={linkPair['text']} link={linkPair['link']} />
                ))}
              </div>
              <p className="text-[18px]">{children}</p>
              <div className="text-neonBlue mt-4 flex h-[35%] flex-wrap content-start gap-1 gap-y-2 p-2">
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
