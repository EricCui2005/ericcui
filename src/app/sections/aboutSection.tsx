import RoundedImage from '../components/roundedImage';

export default function AboutSection() {
  return (
    <>
      <div className="relative flex h-[70vh] w-full flex-row items-center justify-center gap-[10vw] bg-offWhite">
        <div>
          <RoundedImage image="/Eric.jpeg" dim={350} />
        </div>
        <div className="flex h-[35vh] w-[53vw] flex-col items-center justify-center">
          <h1 className="mb-[2vh] text-2xl font-bold">About</h1>
          <p className="text-xl">
            Hi there! I'm Eric Cui, a Computer Science student at Stanford University specializing
            in Artificial Intelligence. I'm passionate about creating innovative solutions at the
            intersection of full-stack development, deep learning, and cutting-edge AI research. My
            experience lies in building scalable web applications, integrating natural language
            processing systems, and managing robust API services. I'm always eager to tackle
            challenging projects and collaborate with others to make an impact. Let's connect!
          </p>
        </div>
      </div>
    </>
  );
}
