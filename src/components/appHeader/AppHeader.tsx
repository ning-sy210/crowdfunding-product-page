import { useState } from "react";
import Navbar from "./Navbar";

import HamburgerMenuIcon from "../../assets/images/icon-hamburger.svg";
import CloseMenuIcon from "../../assets/images/icon-close-menu.svg";

const AppHeader = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function mobileNavMenuIcon() {
    let src;
    let alt;

    if (showMobileNav) {
      src = CloseMenuIcon;
      alt = "close nav menu icon";
    } else {
      src = HamburgerMenuIcon;
      alt = "open nav menu icon";
    }
    return (
      <img
        src={src}
        alt={alt}
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="tablet:hidden"
      />
    );
  }

  return (
    <header className="relative flex justify-between items-center w-full tablet:w-4/5 py-5 text-white tablet:py-10">
      <h1 className="font-bold text-2 cursor-pointer">crowdfund</h1>
      <Navbar
        isHidden={!showMobileNav}
        closeMobileNavMenu={() => setShowMobileNav(false)}
      />
      {mobileNavMenuIcon()}
    </header>
  );
};

export default AppHeader;
