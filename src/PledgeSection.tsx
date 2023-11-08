import { useState } from "react";

import PledgeModal from "./PledgeModal";
import { inventoryStockType } from "./components/mainSection/MainSection";

import { PledgeRewards, pledgeOptions } from "./constants/enums";

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

      {pledgeOptions.map(
        (option) =>
          option.minPledgeAmt > 0 && (
            <PledgeOption
              key={option.reward}
              reward={option.reward}
              minPledgeAmt={option.minPledgeAmt}
              desc={option.desc}
              stock={inventoryStock[option.reward]}
              selectRewardOnClick={() =>
                setPledgeModalDefaultSelected(option.reward)
              }
            />
          )
      )}

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

export type PledgeOptionProps = {
  reward: PledgeRewards;
  minPledgeAmt: number;
  desc: string;
  stock: number;
  selectRewardOnClick?: () => void;
};

const PledgeOption = ({
  reward,
  minPledgeAmt,
  desc,
  stock,
  selectRewardOnClick,
}: PledgeOptionProps) => {
  const outOfStock = stock <= 0;
  const lowInStock = stock > 0 && stock <= 20;

  return (
    <section
      className={`flex flex-col items-start p-[22px] gap-y-5 border border-slate-300 rounded-lg${
        outOfStock ? " opacity-50" : ""
      }`}
    >
      <section className="flex flex-col gap-y-1">
        <h3 className="text-h5 font-bold">{reward}</h3>
        <p className="text-h5 font-medium text-primary-1">
          Pledge ${minPledgeAmt.toLocaleString("en-US")} or more
        </p>
      </section>
      <p className="text-h5 text-neutral-2 leading-6">{desc}</p>
      <p
        className={`flex items-center gap-x-2${
          lowInStock ? " text-red-500" : ""
        }`}
      >
        <span className="text-h1 font-bold">
          {stock.toLocaleString("en-US")}
        </span>
        <span className="text-[15px] text-neutral-2">left</span>
      </p>
      <button
        type="button"
        onClick={selectRewardOnClick}
        className={`w-40 h-12 ${
          outOfStock ? "bg-zinc-400" : "bg-primary-1"
        } text-white text-h5 font-bold rounded-full`}
        disabled={outOfStock}
      >
        {outOfStock ? "Out of Stock" : "Select Reward"}
      </button>
    </section>
  );
};

export default PledgeSection;
