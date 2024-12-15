import NavButton from './navButton';

export default function Landing() {
  return (
    <>
      <div className="relative flex h-[100vh] flex-col items-center justify-center">
        <h1 className="text-5xl text-white">
          Hello, I'm <b>Eric</b>
        </h1>
        <div className="arrow down absolute bottom-[160px]"></div>
      </div>
      <div className="bg-lightBlue fixed flex h-[64px] w-[450px] flex-row items-center justify-center rounded-2xl drop-shadow-xl">
        <NavButton text="Home" />
        <NavButton text="About" />
        <NavButton text="Skills" />
        <NavButton text="Portfolio" />
        <NavButton text="Contact" />
      </div>
    </>
  );
}
