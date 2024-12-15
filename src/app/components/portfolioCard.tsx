import TechCell from './techCell';
import Image from 'next/image';

export default function PortfolioCard({ title, children, techs }) {
  return (
    <>
      <div className="bg-lightBlue h-[70vh] w-[28vw] overflow-hidden rounded-3xl drop-shadow-xl">
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="bg-darkerBlue absolute top-1/3 flex h-2/3 w-full flex-col items-center">
            <div className="mt-4 h-[90%] w-[90%] text-white">
              <h1 className="text-[26px] font-bold">{title}</h1>
              <a
                className="mb-1 mt-1 block flex w-[64px] flex-row items-center justify-center gap-1 rounded-xl bg-gray-900"
                target="_blank"
                href="https://github.com/EricCui2005"
              >
                <Image
                  src={'/link.png'}
                  height={15}
                  width={15}
                  alt="Link"
                  className="aspect-square object-cover"
                />
                <p className="text-[14px] text-gray-300">Link</p>
              </a>
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
