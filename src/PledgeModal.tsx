import { PledgeRewards, pledgeOptions } from "./constants/enums";
import { PledgeOptionProps } from "./PledgeSection";

type PledgeModalProps = {
  defaultSelected: null | PledgeRewards;
  setSelectedReward: (option: PledgeRewards) => void;
  closeModal: () => void;
};

const PledgeModal = ({
  defaultSelected,
  setSelectedReward,
  closeModal,
}: PledgeModalProps) => {
  return (
    <>
      <div className="fixed inset-0 bg-neutral-1 opacity-50 z-[1]"></div>
      <section className="absolute top-[120px] flex flex-col gap-y-6 mx-6 px-6 py-7 rounded-lg bg-white z-[2] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-h4 font-bold">Back this project</h2>
          <button type="button" onClick={closeModal}>
            <img src="./images/icon-close-modal.svg" alt="close modal icon" />
          </button>
        </div>
        <p className="text-h5 text-neutral-2 leading-6">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        {pledgeOptions.map((option) => (
          <PledgeModalOption
            key={option.reward}
            reward={option.reward}
            minPledgeAmt={option.minPledgeAmt}
            desc={option.desc}
            stock={option.stock}
            checked={option.reward === defaultSelected}
            onClick={() => setSelectedReward(option.reward)}
          />
        ))}
      </section>
    </>
  );
};

interface PledgeModalOptionInterface extends PledgeOptionProps {
  checked: boolean;
  onClick: () => void;
}

const PledgeModalOption = ({
  reward,
  minPledgeAmt,
  desc,
  stock,
  checked,
  onClick,
}: PledgeModalOptionInterface) => {
  const isPaidOption = minPledgeAmt > 0;
  const outOfStock = isPaidOption && stock === 0;

  return (
    <section
      className={`rounded-lg border border-slate-300${
        outOfStock ? " opacity-50" : ""
      } [&:has(input:checked)]:border-primary-1 [&:has(input:checked)]:border-2`}
      onClick={outOfStock ? () => null : onClick}
    >
      <section className="flex flex-col gap-y-5 px-6 pt-5 pb-7">
        <div className="flex items-center gap-x-4">
          <input
            id={`${reward} input`}
            type="radio"
            disabled={outOfStock}
            checked={checked}
            onClick={onClick}
            className="w-6 h-6 bg-primary-1"
          />
          <label
            htmlFor={`${reward} input`}
            className="flex flex-col h-12 justify-center"
          >
            <div className="flex flex-col gap-y-1 justify-between">
              <span className="text-h5 font-bold">{reward}</span>

              {/* Min pledge amount label */}
              {isPaidOption && (
                <span className="text-h5 font-medium text-primary-1">
                  Pledge ${minPledgeAmt.toLocaleString("en-US")} or more
                </span>
              )}
            </div>
          </label>
        </div>
        <p className="text-h5 text-neutral-2 leading-6">{desc}</p>

        {/* Stock left label */}
        {isPaidOption && (
          <p className="flex items-center gap-x-2">
            <span className="text-h4 font-bold">{stock}</span>
            <span className="text-h5 text-neutral-2 leading-6">left</span>
          </p>
        )}
      </section>

      {/* For indicating amount to be pledged by user */}
      {checked && (
        <section className="flex flex-col text-center gap-y-5 pt-6 pb-6 px-6 border-t border-slate-300">
          <p className="text-h5 text-neutral-2 leading-6">Enter your pledge</p>
          <div className="relative flex justify-between">
            <span className="absolute top-[13px] left-6 text-h5 font-bold text-stone-400">
              $
            </span>
            <input
              type="number"
              className="w-[43%] border border-slate-300 rounded-full pl-10 text-h5 font-bold"
              min={minPledgeAmt}
              defaultValue={minPledgeAmt}
            ></input>
            <button className="bg-primary-1 text-white rounded-full w-[50%] py-[13px] text-h5 font-bold">
              Continue
            </button>
          </div>
        </section>
      )}
    </section>
  );
};

export default PledgeModal;
