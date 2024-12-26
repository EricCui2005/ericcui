import ContactSubsection from '../components/contactSubsection';

export default function ContactSection() {
  return (
    <>
      <div className="relative flex h-[35vh] w-full flex-row items-center justify-center bg-darkestBlue">
        <div className="flex w-5/6 flex-row justify-center gap-64">
          <ContactSubsection title="Socials">
            <a
              href="https://www.linkedin.com/in/eric-cui-003154233/"
              className="text-[14px] text-offWhite hover:underline"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/EricCui2005"
              className="text-[14px] text-offWhite hover:underline"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://x.com/EricCui29"
              className="text-[14px] text-offWhite hover:underline"
              target="_blank"
            >
              X
            </a>
          </ContactSubsection>
          <ContactSubsection title="Emails">
            <a
              href="mailto:ericcui.career@gmail.com"
              className="text-[14px] text-offWhite hover:underline"
            >
              ericcui.career@gmail.com (work)
            </a>
            <a
              href="mailto:ericcui@stanford.edu"
              className="text-[14px] text-offWhite hover:underline"
            >
              ericcui@stanford.edu (school)
            </a>
          </ContactSubsection>
          <ContactSubsection title="Resume">
            <a
              href="https://drive.google.com/file/d/1lzvMAbGZpkWtzr3VYtSCrzv1w0cpZ0lV/view?usp=sharing"
              className="text-[14px] text-offWhite hover:underline"
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
