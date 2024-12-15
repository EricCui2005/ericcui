export default function AboutSection({ children }) {
  return (
    <>
      <div className="bg-offWhite relative m-4 flex h-[600px] w-full flex-row items-center justify-center">
        {children}
      </div>
    </>
  );
}
