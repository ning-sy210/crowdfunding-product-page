import { useState } from "react";

type EnterPledgeSectionProps = {
  minPledgeAmount: number;
  onPledgeConfirm: (pledgeAmount: number) => void;
};

const EnterPledgeSection = ({
  minPledgeAmount,
  onPledgeConfirm,
}: EnterPledgeSectionProps) => {
  const [pledgeAmount, setPledgeAmount] = useState(minPledgeAmount);

  return (
    <section className="flex flex-col text-center gap-y-5 pt-6 pb-6 px-6 border-t border-slate-300">
      <p className="text-h5 text-neutral-2 leading-6">Enter your pledge</p>
      <div className="relative flex justify-between">
        <span className="absolute top-[13px] left-6 text-h5 font-bold text-stone-400">
          $
        </span>
        {/* TODO: add validation for pledge amount */}
        <input
          type="number"
          onChange={(e) => setPledgeAmount(parseInt(e.target.value))}
          className="w-[43%] border border-slate-300 rounded-full pl-10 pr-4 text-h5 font-bold"
          min={minPledgeAmount}
          defaultValue={minPledgeAmount}
        ></input>
        <button
          type="button"
          onClick={() => onPledgeConfirm(pledgeAmount)}
          className="bg-primary-1 text-white rounded-full w-1/2 py-[13px] text-h5 font-bold"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default EnterPledgeSection;
