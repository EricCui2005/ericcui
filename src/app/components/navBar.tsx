import NavButton from './navButton';
import DropdownButton from './dropdownButton';

export default function NavBar() {
  return (
    <>
      <div className="font-text fixed hidden h-16 w-auto flex-row items-center justify-center rounded-2xl bg-lightBlue px-2 drop-shadow-xl md:flex">
        <NavButton text="Home" ref="home" />
        <NavButton text="About" ref="about" />
        <NavButton text="Skills" ref="skills" />
        <NavButton text="Portfolio" ref="portfolio" />
        <NavButton text="Contact" ref="contact" />
      </div>
    </>
  );
}
