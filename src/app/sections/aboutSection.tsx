export default function AboutSection() {
  return (
    <>
      <div
        id="about"
        className="font-text relative flex h-auto w-full flex-col-reverse items-center justify-center gap-6 bg-offWhite px-12 py-20 md:flex-row md:py-36"
      >
        <div className="flex h-auto w-[80%] flex-col justify-center px-12">
          <h1 className="mb-4 text-center text-2xl font-bold md:text-left">About</h1>
          <p className="text-xl">
            Hi there! I'm Eric Cui, a Computer Science student at Stanford University specializing
            in Artificial Intelligence. I'm passionate about creating innovative solutions at the
            intersection of full-stack development, deep learning, and cutting-edge AI research. My
            experience lies in building scalable web applications, integrating natural language
            processing systems, and managing robust API services. I'm always eager to tackle
            challenging projects and collaborate with others to make an impact. Let's connect!
          </p>
        </div>
        <div className="flex h-auto w-64 flex-col items-center justify-center md:w-96">
          <img src="/Eric.jpeg" alt="Eric" className="rounded-full" />
        </div>
      </div>
    </>
  );
}
