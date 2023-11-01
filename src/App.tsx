import { Fragment, useState } from "react";

import PledgeSection from "./PledgeSection";
import ProgressBar from "./ProgressBar";
import ProgressTracker, { ProgressTrackerProps } from "./ProgressTracker";
import PledgeModal from "./PledgeModal";
import { PledgeRewards } from "./constants/enums";

const App = () => {
  const [showPledgeModal, setShowPledgeModal] = useState<
    boolean | PledgeRewards
  >(false);
  const [backedState] = useState({
    backedAmount: 89914,
    backers: 5007,
  });

  const backedAmountGoal = 100_000;
  const crowdFundingProgress = Math.floor(
    (backedState.backedAmount / backedAmountGoal) * 100
  );

  const progressTrackers: ProgressTrackerProps[] = [
    {
      header: `$${backedState.backedAmount.toLocaleString("en-US")}`,
      subText: `of $${backedAmountGoal.toLocaleString("en-US")} backed`,
    },
    {
      header: backedState.backers.toLocaleString("en-US"),
      subText: "total backers",
    },
    {
      header: 56,
      subText: "days left",
    },
  ];

  return (
    <div className="relative">
      <img src="./images/image-hero-mobile.jpg" title="mobile hero image" />

      <div className="absolute top-0 px-6 pb-20 flex flex-col gap-y-[164px]">
        <header className="flex items-center justify-between py-5 text-white">
          <h1 className="font-bold text-h2">crowdfund</h1>
          <img src="./images/icon-hamburger.svg" title="hamburger icon"></img>
        </header>

        <main className="flex flex-col gap-y-6">
          <section className="relative flex flex-col gap-y-5 items-center text-center pt-[50px] px-6 pb-10 bg-white rounded-lg border border-slate-100">
            <img
              src="./images/logo-mastercraft.svg"
              title="mastercraft logo"
              className="absolute top-[-28px]"
            />
            <h2 className="px-1 font-bold leading-6 text-h3">
              Mastercraft Bamboo Monitor Riser
            </h2>
            <p className="leading-6 text-h5 text-neutral-2">
              A beautifully handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="flex justify-between w-full">
              <button
                type="button"
                onClick={() => setShowPledgeModal(true)}
                className="font-medium text-white rounded-full w-[77%] bg-primary-1 "
              >
                Back this project
              </button>
              <button type="button">
                <img src="./images/icon-bookmark.svg" title="bookmark icon" />
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-y-6 items-center text-center pt-7 px-6 pb-9 bg-white rounded-lg border border-slate-100">
            {progressTrackers.map((tracker, i) => (
              <Fragment key={i}>
                <ProgressTracker
                  header={tracker.header}
                  subText={tracker.subText}
                />
                {i !== progressTrackers.length - 1 && (
                  <div className="w-[76px] h-[1px] bg-slate-300"></div>
                )}
              </Fragment>
            ))}
            <ProgressBar progress={crowdFundingProgress} />
          </section>

          <section className="flex flex-col gap-y-6 pt-10 px-6 pb-9 bg-white rounded-lg border border-slate-100">
            <section className="flex flex-col gap-y-6">
              <h2 className="text-h4 font-bold">About this project</h2>
              <div className="flex flex-col gap-y-[inherit] text-h5 leading-6 text-neutral-2">
                <p>
                  The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                  platform that elevates your screen to a more comfortable
                  viewing height. Placing your monitor at eye level has the
                  potential to improve your posture and make you more
                  comfortable while at work, helping you stay focused on the
                  task at hand.
                </p>
                <p>
                  Featuring artisan craftsmanship, the simplicity of design
                  creates extra desk space below your computer to allow
                  notepads, pens, and USB sticks to be stored under the stand.
                </p>
              </div>
            </section>

            <PledgeSection
              selectRewardOnClick={(reward) => setShowPledgeModal(reward)}
            />
          </section>
        </main>
      </div>

      {showPledgeModal && (
        <PledgeModal
          defaultSelected={showPledgeModal === true ? null : showPledgeModal}
          setSelectedReward={(reward: PledgeRewards) =>
            setShowPledgeModal(reward)
          }
          closeModal={() => setShowPledgeModal(false)}
        />
      )}
    </div>
  );
};

export default App;
