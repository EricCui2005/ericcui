export default function SkillCard({ title, children }) {
  return (
    <>
      <div className="flex h-[65vh] w-[30vw] flex-col items-center rounded-3xl bg-lightBlue pt-[1.5vh] drop-shadow-xl">
        <h1 className="mt-1 text-[28px] text-white">{title}</h1>
        <div className="mt-4 flex h-[75%] w-[75%] flex-wrap content-start justify-center gap-x-2 gap-y-2">
          {children}
        </div>
      </div>
    </>
  );
}
