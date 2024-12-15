export default function NavButton({ text }) {
  return (
    <>
      <div className="hover:bg-lightBlueHover flex h-[40px] w-[84px] flex-col items-center justify-center rounded-lg text-white transition duration-300">
        {text}
      </div>
    </>
  );
}
