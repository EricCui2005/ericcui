import { TypeAnimation } from 'react-type-animation';

export default function Landing() {
  return (
    <>
      <div id="home" className="relative flex h-[100vh] flex-col items-center justify-center">
        <h1 className="font-text text-4xl font-bold text-white">
          <TypeAnimation sequence={['Hello,', 1000, "Hello, I'm Eric"]} />
        </h1>
        <div className="arrow down absolute bottom-[20%]"></div>
      </div>
    </>
  );
}
