export default function PortfolioCard() {
  return (
    <>
      <div className="bg-lightBlue absolute top-[150px] h-96 w-72 overflow-hidden rounded-3xl drop-shadow-xl">
        <div className="relative flex h-full w-full flex-col items-center">
          <div className="bg-darkerBlue absolute top-1/3 flex h-2/3 w-full flex-col items-center">
            <div className="mt-4 h-[90%] w-[90%] text-white">
              <h1 className="text-[18px] font-bold">Stanford Scheduler</h1>
              <p className="text-[14px]">
                This is a paragraph about my Stanford scheduler project that I worked on during the
                school year. It is a very cool project that involves a lot of complicated
                technologies and such
              </p>
              <div className="mt-4 flex h-[35%] flex-row justify-center gap-2 p-2">
                <div className="flex h-6 w-16 flex-row items-center justify-center rounded-lg border border-white text-[12px]">
                  React
                </div>
                <div className="flex h-6 w-16 flex-row items-center justify-center rounded-lg border border-white text-[12px]">
                  Java
                </div>
                <div className="flex h-6 w-16 flex-row items-center justify-center rounded-lg border border-white text-[12px]">
                  Python
                </div>
                <div className="flex h-6 w-16 flex-row items-center justify-center rounded-lg border border-white text-[12px]">
                  GitHub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
