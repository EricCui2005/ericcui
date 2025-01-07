import NavButton from './navButton';
import DropdownButton from './dropdownButton';

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
      <div className="dropdown md:hidden">
        <button className="btn h-24 w-24 rounded-2xl border-none bg-lightBlue text-white hover:bg-lightBlueHover">
          Dropdown
        </button>
        <div className="dropdown-content">
          <div className="flex h-64 w-48 flex-col items-center justify-center rounded-2xl bg-lightBlue p-2 text-white">
            <DropdownButton text="Home" ref="home" />
            <DropdownButton text="About" ref="about" />
            <DropdownButton text="Skills" ref="skills" />
            <DropdownButton text="Portfolio" ref="portfolio" />
            <DropdownButton text="Contact" ref="contact" />
          </div>
        </div>
      </div>
    </>
  );
}
