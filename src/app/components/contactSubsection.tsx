export default function ContactSubsection({ children, title }) {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-[16px]">{title}</h1>
        {children}
      </div>
    </>
  );
}
