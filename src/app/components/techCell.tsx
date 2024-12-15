export default function TechCell({ text }) {
  return (
    <>
      <div className="border-neonBlue flex flex-row items-center justify-center rounded-lg border px-2 text-[16px]">
        {text}
      </div>
    </>
  );
}
