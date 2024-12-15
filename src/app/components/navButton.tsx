export default function NavButton({ text, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className="hover:bg-lightBlueHover flex h-[40px] w-[84px] select-none flex-col items-center justify-center rounded-lg text-white transition duration-300"
      >
        <h1>{text}</h1>
      </div>
    </>
  );
}
