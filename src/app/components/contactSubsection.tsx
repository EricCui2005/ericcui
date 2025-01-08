export default function ContactSubsection({ children, title }) {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-2 text-[16px] font-bold text-contactDarkGray">{title}</h1>
        {children}
      </div>
    </>
  );
}
