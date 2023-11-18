import { useState } from "react";
import Navbar from "./Navbar";

const AppHeader = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function mobileNavMenuIcon() {
    let src;
    let alt;

    if (showMobileNav) {
      src = "./images/icon-close-menu.svg";
      alt = "close nav menu icon";
    } else {
      src = "./images/icon-hamburger.svg";
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
      <h1 className="font-bold text-2">crowdfund</h1>
      <Navbar
        isHidden={!showMobileNav}
        closeMobileNavMenu={() => setShowMobileNav(false)}
      />
      {mobileNavMenuIcon()}
    </header>
  );
};

export default AppHeader;
