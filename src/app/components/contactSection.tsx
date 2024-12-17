import ContactSubsection from './contactSubsection';

export default function ContactSection() {
  return (
    <>
      <div className="bg-darkestBlue relative flex h-[35vh] w-full flex-row items-center justify-center">
        <div className="flex w-5/6 flex-row justify-center gap-48">
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
            <a
              href="mailto:ericcui.career@gmail.com"
              className="text-offWhite text-[14px] hover:underline"
            >
              ericcui.career@gmail.com (work)
            </a>
            <a
              href="mailto:ericcui@stanford.edu"
              className="text-offWhite text-[14px] hover:underline"
            >
              ericcui@stanford.edu (school)
            </a>
          </ContactSubsection>
          <ContactSubsection title="Resume">
            <a
              href="https://drive.google.com/file/d/1lzvMAbGZpkWtzr3VYtSCrzv1w0cpZ0lV/view?usp=sharing"
              className="text-offWhite text-[14px] hover:underline"
              target="_blank"
            >
              Eric Cui Resume.pdf
            </a>
          </ContactSubsection>
        </div>
      </div>
    </>
  );
}
