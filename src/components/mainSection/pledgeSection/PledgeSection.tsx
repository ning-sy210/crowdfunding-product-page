import { useState } from "react";

import { inventoryStockType } from "../MainSection";
import PledgeModal from "../pledgeModal/PledgeModal";
import PledgeOption from "./PledgeOption";

import { PledgeRewards, paidPledgeOptions } from "../../../constants/enums";

type PledgeSectionProps = {
  inventoryStock: inventoryStockType;
  makePledgeFor: (pledgeOption: PledgeRewards, pledgeAmount: number) => void;
};

const PledgeSection = ({
  inventoryStock,
  makePledgeFor,
}: PledgeSectionProps) => {
  const [pledgeModalDefaultSelected, setPledgeModalDefaultSelected] =
    useState<null | PledgeRewards>(null);

  return (
    <section className="flex flex-col gap-y-6 pt-10 px-6 pb-9 bg-white rounded-lg border border-slate-100">
      <section className="flex flex-col gap-y-6">
        <h2 className="text-h4 font-bold">About this project</h2>
        <div className="flex flex-col gap-y-[inherit] text-h5 leading-6 text-neutral-2">
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </section>

      {paidPledgeOptions.map((option) => (
        <PledgeOption
          key={option.reward}
          reward={option.reward}
          minPledgeAmount={option.minPledgeAmount}
          desc={option.desc}
          stock={inventoryStock[option.reward]}
          selectRewardOnClick={() =>
            setPledgeModalDefaultSelected(option.reward)
          }
        />
      ))}

      {pledgeModalDefaultSelected && (
        <PledgeModal
          closeModal={() => setPledgeModalDefaultSelected(null)}
          defaultSelected={pledgeModalDefaultSelected}
          inventoryStock={inventoryStock}
          makePledgeFor={makePledgeFor}
        />
      )}
    </section>
  );
};

export default PledgeSection;