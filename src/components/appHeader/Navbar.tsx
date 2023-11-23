const navItems = [
  {
    label: "About",
  },
  {
    label: "Discover",
  },
  {
    label: "Get Started",
  },
];

type NavbarProps = {
  isHidden: boolean;
  closeMobileNavMenu: () => void;
};

const Navbar = ({ isHidden, closeMobileNavMenu }: NavbarProps) => {
  const hidden = isHidden ? "hidden " : "";

  return (
    <>
      <div
        className={`${hidden}fixed inset-0 bg-black opacity-25 z-[1] tablet:hidden`}
        onClick={closeMobileNavMenu}
      ></div>
      <nav
        className={`${hidden}absolute w-full top-[88px] rounded-lg bg-white text-black text-6 font-medium z-[2] overflow-clip 
        tablet:block tablet:static tablet:w-auto tablet:bg-transparent tablet:text-white tablet:text-9 tablet:font-normal`}
      >
        <ul className="tablet:flex tablet:gap-x-8">
          {navItems.map((item) => (
            <NavItem key={item.label} label={item.label} />
          ))}
        </ul>
      </nav>
    </>
  );
};

type NavItemProps = {
  label: string;
};

const NavItem = ({ label }: NavItemProps) => {
  return (
    <li
      key={label}
      className="hover:bg-stone-200 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-slate-200 cursor-pointer 
      tablet:hover:bg-transparent tablet:[&:not(:first-child)]:border-none tablet:active:underline"
    >
      <a>
        <div className="px-6 py-[21px] tablet:p-0">{label}</div>
      </a>
    </li>
  );
};

export default Navbar;
