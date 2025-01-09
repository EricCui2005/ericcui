export default function NavButton({ text, ref }) {
  return (
    <>
      <a
        href={`#${ref}`}
        className="flex h-[75%] w-auto select-none flex-col items-center justify-center rounded-xl px-2 text-sm text-white transition duration-300 hover:bg-lightBlueHover md:px-4 md:text-base"
      >
        <h1>{text}</h1>
      </a>
    </>
  );
}
