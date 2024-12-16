export default function ContactSubsection({ children, title }) {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-contactDarkGray mb-2 text-[16px] font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
}
