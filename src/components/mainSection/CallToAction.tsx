import { useState } from "react";

import { inventoryStockType } from "./MainSection";
import PledgeModal from "./pledgeModal/PledgeModal";

import { PledgeRewards } from "../../constants/enums";
import MasterCraftLogo from "../../assets/images/logo-mastercraft.svg";

type CallToActionProps = {
  inventoryStock: inventoryStockType;
  makePledgeFor: (pledgeOption: PledgeRewards, pledgeAmount: number) => void;
};

const CallToAction = ({ inventoryStock, makePledgeFor }: CallToActionProps) => {
  const [showPledgeModal, setShowPledgeModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <section
      className="relative flex flex-col gap-y-5 items-center text-center pt-[50px] px-card pb-10 bg-white rounded-lg border border-slate-100 max-w-card
      tablet:pt-[3.75rem] tablet:px-card-tablet"
    >
      <img
        src={MasterCraftLogo}
        title="mastercraft logo"
        className="absolute top-[-28px]"
      />
      <h2 className="px-1 font-bold leading-6 text-5 tablet:text-2">
        Mastercraft Bamboo Monitor Riser
      </h2>
      <p className="leading-6 text-9 text-neutral-2 tablet:text-7">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>

      <div className="flex justify-between w-full tablet:mt-4">
        <button
          type="button"
          onClick={() => setShowPledgeModal(true)}
          className="font-medium text-white rounded-full w-[77%] max-w-[216px] bg-primary-1 hover:bg-teal-400 active:bg-primary-2 transition-colors tablet:max-w-[204px]"
        >
          Back this project
        </button>
        <button
          type="button"
          className="relative group"
          onClick={() => setIsBookmarked((prev) => !prev)}
        >
          <div
            className={`hidden pl-[4.5rem] pr-6 py-4 rounded-full bg-stone-100 text-neutral-2${
              isBookmarked ? " text-primary-2" : ""
            } font-bold tablet:block`}
          >
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </div>
          <svg
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
            className="block tablet:absolute tablet:top-0"
          >
            <g fill="none" fillRule="evenodd">
              <circle
                fill="#2F2F2F"
                cx="28"
                cy="28"
                r="28"
                className={`group-active:fill-neutral-2 tablet:group-hover:fill-zinc-600 transition-colors${
                  isBookmarked ? " fill-primary-2" : ""
                }`}
              />
              <path
                fill="#B1B1B1"
                d="M23 19v18l5-5.058L33 37V19z"
                className={isBookmarked ? "fill-white" : ""}
              />
            </g>
          </svg>
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
