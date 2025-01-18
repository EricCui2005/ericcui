import NavButton from './navButton';

export default function NavBar() {
  return (
    // Comments
    <>
      <div className="fixed flex h-16 w-auto flex-row items-center justify-center rounded-2xl bg-lightBlue px-2 font-text drop-shadow-xl md:h-16">
        <NavButton text="Home" ref="home" />
        <NavButton text="About" ref="about" />
        <NavButton text="Skills" ref="skills" />
        <NavButton text="Portfolio" ref="portfolio" />
        <NavButton text="Contact" ref="contact" />
      </div>
    </>
  );
}
