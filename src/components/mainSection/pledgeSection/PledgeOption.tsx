import { PledgeRewards } from "../../../constants/enums";

export type PledgeOptionProps = {
  reward: PledgeRewards;
  minPledgeAmount: number;
  desc: string;
  stock: number;
  selectRewardOnClick?: () => void;
};

const PledgeOption = ({
  reward,
  minPledgeAmount,
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
        <h3 className="font-bold">{reward}</h3>
        <p className="font-medium text-primary-1">
          Pledge ${minPledgeAmount.toLocaleString()} or more
        </p>
      </section>
      <p className="text-neutral-2">{desc}</p>
      <p
        className={`flex items-center gap-x-2${
          lowInStock ? " text-red-500" : ""
        }`}
      >
        <span className="text-1 font-bold leading-[initial]">
          {stock.toLocaleString()}
        </span>
        <span className="text-[15px] text-neutral-2">left</span>
      </p>
      <button
        type="button"
        onClick={selectRewardOnClick}
        className={`w-40 h-12 ${
          outOfStock ? "bg-zinc-400" : "bg-primary-1"
        } text-white font-bold rounded-full`}
        disabled={outOfStock}
      >
        {outOfStock ? "Out of Stock" : "Select Reward"}
      </button>
    </section>
  );
};

export default PledgeOption;
