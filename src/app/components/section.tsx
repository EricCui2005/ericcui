export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mt-36 flex h-60 w-full flex-col items-center justify-center bg-gray-400">
        {children}
      </div>
    </>
  );
}
