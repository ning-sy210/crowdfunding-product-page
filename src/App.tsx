import AppHeader from "./components/appHeader/AppHeader";
import MainSection from "./components/mainSection/MainSection";

import MobileHeroImg from "./assets/images/image-hero-mobile.jpg";
import DesktopHeroImg from "./assets/images/image-hero-desktop.jpg";

const App = () => {
  return (
    <div className="relative">
      <img
        className="tablet:hidden"
        src={MobileHeroImg}
        title="mobile hero image"
      />
      <img
        className="hidden tablet:block tablet:w-full"
        src={DesktopHeroImg}
        title="desktop hero image"
      />

      <div className="absolute top-0 left-0 right-0 px-6 pb-20 flex flex-col items-center gap-y-[10.25rem] tablet:gap-y-[11.875rem] tablet:pb-[8.125rem]">
        <AppHeader />
        <MainSection />
      </div>
    </div>
  );
};

export default App;
