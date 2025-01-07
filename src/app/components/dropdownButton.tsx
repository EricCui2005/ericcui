export default function DropdownButton({ text, ref }) {
  return (
    <>
      <a
        href={`#${ref}`}
        className="text-md flex h-full w-full select-none flex-col items-center justify-center rounded-xl text-white transition duration-300 hover:bg-lightBlueHover"
      >
        <h1>{text}</h1>
      </a>
    </>
  );
}
