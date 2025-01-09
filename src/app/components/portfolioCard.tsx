import TechCell from './techCell';
import Link from './link';
import Image from 'next/image';

export default function PortfolioCard({ title, children, techs, links, img }) {
  return (
    <>
      <div className="h-[37.5rem] min-w-[24.5rem] rounded-3xl bg-lightBlue drop-shadow-xl">
        <div className="flex h-[33%] w-full flex-row items-center justify-center overflow-hidden rounded-tl-3xl rounded-tr-3xl">
          <Image src={img} alt={title} height={200} width={450} />
        </div>
        <div className="flex h-[67%] w-full flex-col items-center rounded-bl-3xl rounded-br-3xl bg-darkerBlue px-4 pt-2">
          <div className="flex h-2/3 w-full flex-col items-center">
            <div className="text-white">
              <h1 className="text-xl font-bold">{title}</h1>
              <div className="my-1 flex flex-row gap-1">
                {links.map((linkPair, index) => (
                  <Link key={index} text={linkPair['text']} link={linkPair['link']} />
                ))}
              </div>
              <p className="text-md font-text">{children}</p>
            </div>
          </div>
          <div className="mt-auto flex h-auto w-auto flex-row-reverse flex-wrap-reverse content-start gap-2 gap-y-2 p-2 px-2 pb-6 text-neonBlue">
            {techs.map((tech, index) => (
              <TechCell key={index} text={tech} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
