import AppHeader from "./components/appHeader/AppHeader";
import MainSection from "./components/mainSection/MainSection";

const App = () => {
  return (
    <div className="relative">
      <img
        className="tablet:hidden"
        src="./images/image-hero-mobile.jpg"
        title="mobile hero image"
      />
      <img
        className="hidden tablet:block"
        src="./images/image-hero-desktop.jpg"
        title="desktop hero image"
      />

      <div className="absolute top-0 left-0 right-0 px-6 pb-20 flex flex-col items-center gap-y-[164px] tablet:gap-y-[190px]">
        <AppHeader />
        <MainSection />
      </div>
    </div>
  );
};

export default App;
