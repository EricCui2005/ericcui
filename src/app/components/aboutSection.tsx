import RoundedImage from './roundedImage';

export default function AboutSection() {
  return (
    <>
      <div className="bg-offWhite relative flex h-[600px] w-full flex-row items-center justify-center">
        <div className="absolute left-[100px]">
          <RoundedImage image="/Eric.jpeg" dim={350} />
        </div>
        <div className="absolute right-[100px] flex h-[350px] w-[800px] flex-col items-center justify-center">
          <h1 className="mb-4 text-[28px] font-bold">About</h1>
          <p className="text-[20px]">
            Hi there! I'm Eric Cui, a Computer Science student at Stanford University specializing
            in Artificial Intelligence. I'm passionate about creating innovative solutions at the
            intersection of full-stack development, deep learning, and cutting-edge AI research. My
            experience lies in building scalable web applications, integrating natural language
            processing systems, and managing robust API services. I'm always eager to tackle
            challenging projects and collaborate with others to make an impact. Let's connect at
            ericcui[at]stanford.edu!
          </p>
        </div>
      </div>
    </>
  );
}
