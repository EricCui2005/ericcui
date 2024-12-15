import TechCell from './techCell';

export default function PortfolioCard() {
  return (
    <>
      <div className="bg-lightBlue h-[70vh] w-[28vw] overflow-hidden rounded-3xl drop-shadow-xl">
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="bg-darkerBlue absolute top-1/3 flex h-2/3 w-full flex-col items-center">
            <div className="mt-4 h-[90%] w-[90%] text-white">
              <h1 className="text-[26px] font-bold">Stanford Scheduler</h1>
              <p className="text-[18px]">
                This is a paragraph about my Stanford scheduler project that I worked on during the
                school year. It is a very cool project that involves a lot of complicated
                technologies and such
              </p>
              <div className="text-neonBlue mt-4 flex h-[35%] flex-wrap content-start gap-1 gap-y-2 p-2">
                <TechCell text="React" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
