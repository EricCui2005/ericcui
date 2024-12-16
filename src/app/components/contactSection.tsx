import ContactSubsection from './contactSubsection';

export default function ContactSection() {
  return (
    <>
      <div className="bg-darkestBlue text-offWhite relative flex h-[35vh] w-full flex-row items-center justify-center">
        <div className="flex w-5/6 flex-row justify-center gap-48">
          <h1 className="ml-10 text-[28px]">Contact</h1>
          <ContactSubsection title="Socials">
            <p className="text-[14px]">LinkedIn</p>
          </ContactSubsection>
          <ContactSubsection title="Emails">
            <p className="text-[14px]">ericcui.career@gmail.com</p>
            <p className="text-[14px]">ericcui@stanford.edu</p>
          </ContactSubsection>
          <ContactSubsection title="Resume">
            <div>Hello</div>
          </ContactSubsection>
        </div>
      </div>
    </>
  );
}
