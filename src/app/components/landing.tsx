import NavButton from './navButton';
import { TypeAnimation } from 'react-type-animation';

export default function Landing() {
  return (
    <>
      <div className="relative flex h-[100vh] flex-col items-center justify-center">
        <h1 className="text-5xl text-white">
          Hello, I'm <b>Eric</b>
        </h1>
        <div className="arrow down absolute bottom-[160px]"></div>
      </div>
    </>
  );
}
