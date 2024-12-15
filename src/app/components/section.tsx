export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-offWhite m-4 flex h-60 w-full flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}
