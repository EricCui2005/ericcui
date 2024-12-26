export default function NavButton({ text, ref }) {
  return (
    <>
      <a
        href={`#${ref}`}
        className="flex h-[40px] w-[84px] select-none flex-col items-center justify-center rounded-lg text-white transition duration-300 hover:bg-lightBlueHover"
      >
        <h1>{text}</h1>
      </a>
    </>
  );
}
