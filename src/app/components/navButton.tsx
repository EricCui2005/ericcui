export default function NavButton({ text, ref }) {
  return (
    <>
      <a
        href={`#${ref}`}
        className="flex h-[75%] w-[19%] select-none flex-col items-center justify-center rounded-lg text-[1.1vw] text-white transition duration-300 hover:bg-lightBlueHover"
      >
        <h1>{text}</h1>
      </a>
    </>
  );
}
