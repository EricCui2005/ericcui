export default function SkillCard({ title, children }) {
  return (
    <>
      <div className="flex h-auto w-[30vw] flex-col items-center gap-6 rounded-3xl bg-lightBlue py-6 drop-shadow-xl">
        <h1 className="text-2xl text-white">{title}</h1>
        <div className="flex h-auto w-[75%] flex-wrap content-start justify-center gap-x-2 gap-y-2">
          {children}
        </div>
      </div>
    </>
  );
}
