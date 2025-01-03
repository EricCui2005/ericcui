export default function AboutSection() {
  return (
    <>
      <div className="debug relative flex h-auto w-full flex-col-reverse items-center justify-center bg-offWhite px-12 py-36 md:flex-row">
        <div className="flex h-auto w-[80%] flex-col justify-center px-12">
          <h1 className="mb-4 text-2xl font-bold">About</h1>
          <p className="text-xl">
            Hi there! I'm Eric Cui, a Computer Science student at Stanford University specializing
            in Artificial Intelligence. I'm passionate about creating innovative solutions at the
            intersection of full-stack development, deep learning, and cutting-edge AI research. My
            experience lies in building scalable web applications, integrating natural language
            processing systems, and managing robust API services. I'm always eager to tackle
            challenging projects and collaborate with others to make an impact. Let's connect!
          </p>
        </div>
        <div className="flex h-auto w-96 flex-col items-center justify-center">
          <img src="/Eric.jpeg" alt="Eric" className="rounded-full" />
        </div>
      </div>
    </>
  );
}
