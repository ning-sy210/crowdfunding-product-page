import { useState } from "react";

import { inventoryStockType } from "./MainSection";
import PledgeModal from "./pledgeModal/PledgeModal";

import { PledgeRewards } from "../../constants/enums";
import MasterCraftLogo from "../../assets/images/logo-mastercraft.svg";
import BookmarkIcon from "../../assets/images/icon-bookmark.svg";

type CallToActionProps = {
  inventoryStock: inventoryStockType;
  makePledgeFor: (pledgeOption: PledgeRewards, pledgeAmount: number) => void;
};

const CallToAction = ({ inventoryStock, makePledgeFor }: CallToActionProps) => {
  const [showPledgeModal, setShowPledgeModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <section
      className="relative flex flex-col gap-y-5 items-center text-center pt-[50px] px-6 pb-10 bg-white rounded-lg border border-slate-100 max-w-card
      tablet:pt-[3.75rem] tablet:px-11"
    >
      <img
        src={MasterCraftLogo}
        title="mastercraft logo"
        className="absolute top-[-28px]"
      />
      <h2 className="px-1 font-bold leading-6 text-3 tablet:text-1.5">
        Mastercraft Bamboo Monitor Riser
      </h2>
      <p className="leading-6 text-5 text-neutral-2 tablet:text-4.5">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>

      <div className="flex justify-between w-full tablet:mt-4">
        <button
          type="button"
          onClick={() => setShowPledgeModal(true)}
          className="font-medium text-white rounded-full w-[77%] max-w-[216px] bg-primary-1 tablet:max-w-[204px]"
        >
          Back this project
        </button>
        <button
          type="button"
          className={`relative${isBookmarked ? " " : ""}`}
          onClick={() => setIsBookmarked((prev) => !prev)}
        >
          <div className="hidden pl-[4.5rem] pr-6 py-4 rounded-full bg-stone-100 text-neutral-2 font-bold tablet:block">
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </div>
          <img
            src={BookmarkIcon}
            title="bookmark icon"
            className="block tablet:absolute tablet:top-0"
          />
        </button>
      </div>

      {showPledgeModal && (
        <PledgeModal
          closeModal={() => setShowPledgeModal(false)}
          inventoryStock={inventoryStock}
          makePledgeFor={makePledgeFor}
        />
      )}
    </section>
  );
};

export default CallToAction;
