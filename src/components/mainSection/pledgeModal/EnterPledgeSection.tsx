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
      <label
        htmlFor="pledge input"
        className="text-9 text-neutral-2 leading-6 tablet:text-8"
      >
        Enter your pledge
      </label>

      <div className="relative flex justify-between tablet:order-2">
        <span className="absolute top-[13px] left-6 text-9 font-bold text-stone-400 cursor-pointer">
          $
        </span>

        <input
          id="pledge input"
          type="number"
          defaultValue={minPledgeAmount.toString()}
          min={minPledgeAmount}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && validateInput(pledgeAmount)}
          className="border border-slate-300 rounded-full w-[43%] max-w-[100px] pl-10 pr-4 text-9 font-bold cursor-pointer outline-none focus:border-primary-1
          tablet:max-w-[10rem] tablet:active:border-primary-2 tablet:pr-2"
        ></input>
        <button
          type="button"
          onClick={() => validateInput(pledgeAmount)}
          className="bg-primary-1 text-white rounded-full w-1/2 max-w-[120px] py-[13px] text-9 font-bold transition-colors  
          tablet:py-2 tablet:max-w-[10rem] tablet:hover:bg-teal-400 tablet:active:bg-primary-2 tablet:leading-8"
        >
          Continue
        </button>
      </div>

      {errorMessage && (
        <div className="text-9 text-red-400 font-medium tablet:order-[1]">
          {errorMessage}
        </div>
      )}
    </section>
  );
};

export default EnterPledgeSection;
