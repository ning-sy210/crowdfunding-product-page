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
    <>
      <section
        className="flex flex-col gap-y-6 pt-10 px-card pb-9 text-9 leading-6 bg-white rounded-lg border border-slate-100 max-w-card
        tablet:px-card-tablet tablet:text-7 tablet:leading-8 tablet:pb-10"
      >
        <section className="flex flex-col gap-y-6">
          <h2 className="text-6 font-bold tablet:text-5">About this project</h2>
          <div className="flex flex-col gap-y-[inherit] text-neutral-2">
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
      </section>

      {pledgeModalDefaultSelected && (
        <PledgeModal
          closeModal={() => setPledgeModalDefaultSelected(null)}
          defaultSelected={pledgeModalDefaultSelected}
          inventoryStock={inventoryStock}
          makePledgeFor={makePledgeFor}
        />
      )}
    </>
  );
};

export default PledgeSection;
