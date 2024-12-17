import ContactSubsection from './contactSubsection';

export default function ContactSection() {
  return (
    <>
      <div className="bg-darkestBlue relative flex h-[35vh] w-full flex-row items-center justify-center">
        <div className="flex w-5/6 flex-row justify-center gap-48">
          <h1 className="text-offWhite ml-10 text-[32px]">Contact</h1>
          <ContactSubsection title="Socials">
            <a
              href="https://www.linkedin.com/in/eric-cui-003154233/"
              className="text-offWhite text-[14px] hover:underline"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/EricCui2005"
              className="text-offWhite text-[14px] hover:underline"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://x.com/EricCui29"
              className="text-offWhite text-[14px] hover:underline"
              target="_blank"
            >
              X
            </a>
          </ContactSubsection>
          <ContactSubsection title="Emails">
            <p className="text-offWhite text-[14px]">ericcui.career@gmail.com (work)</p>
            <p className="text-offWhite text-[14px]">ericcui@stanford.edu (school)</p>
          </ContactSubsection>
          <ContactSubsection title="Resume">
            <div className="text-offWhite text-[14px]">Eric Cui Resume.pdf</div>
          </ContactSubsection>
        </div>
      </div>
    </>
  );
}
