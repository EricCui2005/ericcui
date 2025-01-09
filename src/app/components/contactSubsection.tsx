export default function ContactSubsection({ children, title }) {
  return (
    <>
      <div className="my-6 flex flex-col md:mx-20 md:my-10">
        <h1 className="mb-2 text-[16px] font-bold text-contactDarkGray">{title}</h1>
        {children}
      </div>
    </>
  );
}
