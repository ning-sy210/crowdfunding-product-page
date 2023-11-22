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
      setErrorMessage(`Amount must be at least $${minPledgeAmount}!`);
      return;
    }

    onPledgeConfirm(amount);
  }

  return (
    <section className="flex flex-col text-center gap-y-5 pt-6 pb-6 px-6 border-t border-slate-300 tablet:flex-row tablet:items-center tablet:justify-between">
      <p className="text-5 text-neutral-2 leading-6 tablet:text-4.51">
        Enter your pledge
      </p>

      <div className="relative flex justify-between tablet:order-2">
        <span className="absolute top-[13px] left-6 text-5 font-bold text-stone-400 tablet:top-2">
          $
        </span>

        <input
          type="number"
          defaultValue={minPledgeAmount.toString()}
          min={minPledgeAmount}
          onChange={(e) => handleInputChange(e.target.value)}
          className="border border-slate-300 rounded-full w-[43%] max-w-[100px] pl-10 pr-4 text-5 font-bold tablet:max-w-[10rem]"
        ></input>
        <button
          type="button"
          onClick={() => validateInput(pledgeAmount)}
          className="bg-primary-1 text-white rounded-full w-1/2 max-w-[120px] py-[13px] text-5 font-bold tablet:py-2 tablet:max-w-[10rem]"
        >
          Continue
        </button>
      </div>

      {errorMessage && (
        <div className="text-5 text-red-400 font-medium tablet:order-[1]">
          {errorMessage}
        </div>
      )}
    </section>
  );
};

export default EnterPledgeSection;
