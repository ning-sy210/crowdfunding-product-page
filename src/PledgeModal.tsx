import { PledgeRewards, pledgeOptions } from "./constants/enums";
import { PledgeOptionProps } from "./PledgeSection";

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
  const outOfStock = minPledgeAmt > 0 && stock === 0;

  return (
    <section
      className={`flex flex-col gap-y-8 px-6 py-8 rounded-lg border border-slate-300${
        outOfStock ? " opacity-50" : ""
      } [&:has(input:checked)]:border-primary-1 [&:has(input:checked)]:border-2`}
    >
      <div className="flex items-center gap-x-4">
        <input
          id={`${reward} input`}
          type="radio"
          disabled={outOfStock}
          checked={checked}
          onClick={onClick}
          className="w-6 h-6 bg-primary-1"
        />
        <label htmlFor={`${reward} input`} className="text-h5 font-bold">
          {reward}
        </label>
      </div>
      <p className="text-h5 text-neutral-2 leading-6">{desc}</p>
    </section>
  );
};

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

export default PledgeModal;
