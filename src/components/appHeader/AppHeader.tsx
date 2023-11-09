import { useState } from "react";
import Navbar from "./Navbar";

const AppHeader = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function renderMobileOpenNavMenuIcon() {
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
      />
    );
  }

  return (
    <header className="flex flex-col w-full py-5 text-white">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-h2">crowdfund</h1>
        {renderMobileOpenNavMenuIcon()}
      </div>

      {showMobileNav && <Navbar closeNavbar={() => setShowMobileNav(false)} />}
    </header>
  );
};

export default AppHeader;
