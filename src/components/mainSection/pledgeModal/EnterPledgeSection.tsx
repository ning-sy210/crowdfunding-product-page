import { useState } from "react";

type EnterPledgeSectionProps = {
  minPledgeAmount: number;
  onPledgeConfirm: (pledgeAmount: number) => void;
};

const EnterPledgeSection = ({
  minPledgeAmount,
  onPledgeConfirm,
}: EnterPledgeSectionProps) => {
  const [pledgeAmount, setPledgeAmount] = useState(minPledgeAmount.toString());
  const [errorMessage, setErrorMessage] = useState("");
  const integerRegex = /^\d+$/;

  function handleInputChange(input: string) {
    if (errorMessage) {
      setErrorMessage("");
    }
    setPledgeAmount(input);
  }

  function validateInput(input: string) {
    if (!integerRegex.test(input)) {
      setErrorMessage("Please enter a valid number!");
      return;
    }

    const amount = parseInt(pledgeAmount);
    if (amount < minPledgeAmount) {
      setErrorMessage(`Pledge amount must be at least $${minPledgeAmount}!`);
      return;
    }

    onPledgeConfirm(amount);
  }

  return (
    <section className="flex flex-col text-center gap-y-5 pt-6 pb-6 px-6 border-t border-slate-300">
      <p className="text-5 text-neutral-2 leading-6">Enter your pledge</p>

      <div className="relative flex justify-between">
        <span className="absolute top-[13px] left-6 text-5 font-bold text-stone-400">
          $
        </span>

        <input
          type="number"
          defaultValue={minPledgeAmount.toString()}
          min={minPledgeAmount}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-[43%] border border-slate-300 rounded-full pl-10 pr-4 text-5 font-bold"
        ></input>
        <button
          type="button"
          onClick={() => validateInput(pledgeAmount)}
          className="bg-primary-1 text-white rounded-full w-1/2 py-[13px] text-5 font-bold"
        >
          Continue
        </button>
      </div>

      {errorMessage && (
        <div className="text-5 text-red-400 font-medium">{errorMessage}</div>
      )}
    </section>
  );
};

export default EnterPledgeSection;
