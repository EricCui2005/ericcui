export default function NavButton({ text, ref }) {
  return (
    <>
      <a
        href={`#${ref}`}
        className="text-md flex h-[75%] w-auto select-none flex-col items-center justify-center rounded-xl px-4 text-white transition duration-300 hover:bg-lightBlueHover"
      >
        <h1>{text}</h1>
      </a>
    </>
  );
}
