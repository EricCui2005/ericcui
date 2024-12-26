import NavButton from './navButton';

export default function NavBar() {
  return (
    <>
      <div className="fixed flex h-16 w-auto flex-row items-center justify-center rounded-2xl bg-lightBlue px-2 drop-shadow-xl">
        <NavButton text="Home" ref="home" />
        <NavButton text="About" ref="about" />
        <NavButton text="Skills" ref="skills" />
        <NavButton text="Portfolio" ref="portfolio" />
        <NavButton text="Contact" ref="contact" />
      </div>
    </>
  );
}
