import { useState } from "react";

import { inventoryStockType } from "./MainSection";
import PledgeModal from "./pledgeModal/PledgeModal";

import { PledgeRewards } from "../../constants/enums";

type CallToActionProps = {
  inventoryStock: inventoryStockType;
  makePledgeFor: (pledgeOption: PledgeRewards, pledgeAmount: number) => void;
};

const CallToAction = ({ inventoryStock, makePledgeFor }: CallToActionProps) => {
  const [showPledgeModal, setShowPledgeModal] = useState(false);

  return (
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
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
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
