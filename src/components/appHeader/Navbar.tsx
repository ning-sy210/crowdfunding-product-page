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
  closeNavbar: () => void;
};

const Navbar = ({ closeNavbar }: NavbarProps) => {
  return (
    <div className="relative">
      {/* black tint overlay */}
      <div
        className="fixed inset-0 bg-black opacity-25 z-[1]"
        onClick={closeNavbar}
      ></div>
      <nav className="absolute left-0 right-0 top-8 rounded-lg bg-white text-black text-h4 font-medium z-[2] overflow-clip">
        <ul>
          {navItems.map((item) => (
            <NavItem key={item.label} label={item.label} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

type NavItemProps = {
  label: string;
};

const NavItem = ({ label }: NavItemProps) => {
  return (
    <li
      key={label}
      className="px-6 py-[21px] hover:bg-stone-200 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-slate-200"
    >
      <a>{label}</a>
    </li>
  );
};

export default Navbar;
