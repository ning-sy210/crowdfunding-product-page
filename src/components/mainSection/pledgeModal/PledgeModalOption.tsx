import { PledgeOptionProps } from "../pledgeSection/PledgeOption";
import EnterPledgeSection from "./EnterPledgeSection";

interface PledgeModalOptionInterface extends PledgeOptionProps {
  checked: boolean;
  onOptionSelect: () => void;
  onPledgeConfirm: (pledgeAmount: number) => void;
}

const PledgeModalOption = ({
  reward,
  minPledgeAmount,
  desc,
  stock,
  checked,
  onOptionSelect,
  onPledgeConfirm,
}: PledgeModalOptionInterface) => {
  const isPaidOption = minPledgeAmount > 0;
  const outOfStock = isPaidOption && stock === 0;
  const lowInStock = stock > 0 && stock <= 20;

  return (
    <section
      id={reward}
      className={`rounded-lg border border-slate-300${
        outOfStock ? " opacity-50" : ""
      } [&:has(input:checked)]:border-primary-1 [&:has(input:checked)]:border-2`}
      onClick={outOfStock ? () => null : onOptionSelect}
    >
      <section
        className="flex flex-col gap-y-5 px-6 pt-5 pb-7
        tablet:grid tablet:grid-rows-[auto_auto] tablet:grid-cols-[auto_auto_min-content] tablet:gap-x-6 tablet:gap-y-0"
      >
        {/* Radio input + reward label row */}
        <div
          className="flex items-center gap-x-4
          tablet:grid tablet:col-span-2 tablet:grid-cols-[subgrid] tablet:gap-x-[unset]"
        >
          <div className="relative flex">
            <input
              id={`${reward} input`}
              type="radio"
              disabled={outOfStock}
              checked={checked}
              onChange={onOptionSelect}
              className="w-6 h-6 bg-primary-1 before:w-6 before:h-6 before:absolute before:bg-white"
            />
            {/* Custom filled circle in the radio input */}
            <div className="absolute top-0 w-6 h-6 flex justify-center items-center rounded-full bg-stone-50 border-[1px] border-stone-300">
              <span
                className={`w-3 h-3 rounded-full bg-primary-1 ${
                  checked ? "block" : "hidden"
                }`}
              ></span>
            </div>
          </div>

          <label
            htmlFor={`${reward} input`}
            className="flex flex-col h-12 justify-center"
          >
            <div className="flex flex-col gap-y-1 justify-between tablet:flex-row tablet:gap-x-4 tablet:justify-normal">
              <span
                className={`text-9 font-bold tablet:text-7 ${
                  !outOfStock
                    ? " hover:cursor-pointer tablet:active:text-primary-1"
                    : ""
                }`}
              >
                {reward}
              </span>

              {/* Min pledge amount label */}
              {isPaidOption && (
                <span
                  className={`text-9 font-medium text-primary-1 tablet:text-7${
                    checked ? " tablet:font-bold" : ""
                  }`}
                >
                  Pledge ${minPledgeAmount.toLocaleString()} or more
                </span>
              )}
            </div>
          </label>
        </div>

        {/* Pledge reward description */}
        <p
          className="text-9 text-neutral-2 leading-6 
          tablet:row-start-2 tablet:row-span-full tablet:col-start-2 tablet:col-span-full tablet:text-8 tablet:leading-7"
        >
          {desc}
        </p>

        {/* Stock left label */}
        {isPaidOption && (
          <p
            className={`flex items-center gap-x-2${
              lowInStock ? " text-red-500" : ""
            } tablet:justify-self-end`}
          >
            <span className="text-6 font-bold">{stock}</span>
            <span className="text-9 text-neutral-2 leading-6">left</span>
          </p>
        )}
      </section>

      {/* For indicating amount to be pledged by user */}
      {checked && (
        <EnterPledgeSection
          minPledgeAmount={minPledgeAmount}
          onPledgeConfirm={onPledgeConfirm}
        />
      )}
    </section>
  );
};

export default PledgeModalOption;
