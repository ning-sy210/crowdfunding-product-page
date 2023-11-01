import { useEffect, useState } from "react";

import { inventoryStockType } from "./App";
import { PledgeOptionProps } from "./PledgeSection";
import { PledgeRewards, pledgeOptions } from "./constants/enums";

type PledgeModalProps = {
  defaultSelected: null | PledgeRewards;
  closeModal: () => void;
  inventoryStock: inventoryStockType;
  makePledgeFor: (pledgeOption: PledgeRewards, pledgeAmount: number) => void;
};

const PledgeModal = ({
  defaultSelected,
  closeModal,
  inventoryStock,
  makePledgeFor,
}: PledgeModalProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    if (selectedOption !== null) {
      setTimeout(() => {
        const pledgeOption = document.getElementById(selectedOption);
        pledgeOption?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
    // 'selectedOption' prop not included in dependency array to prevent "snap" scrolling
    // when changing pledge options in the modal
  }, []);

  function onPledgeConfirm(pledgeOption: PledgeRewards, pledgeAmount: number) {
    makePledgeFor(pledgeOption, pledgeAmount);
    setShowConfirmationModal(true);
  }

  return (
    <>
      <div className="fixed inset-0 bg-neutral-1 opacity-50 z-[1]"></div>

      {showConfirmationModal ? (
        <PledgeConfirmationModal onConfirmationClick={closeModal} />
      ) : (
        <div className="fixed top-0 py-[120px] px-6 z-[2] h-full overflow-auto overscroll-contain">
          <section className="flex flex-col gap-y-6 px-6 py-7 rounded-lg bg-white z-[2]">
            <div className="flex items-center justify-between">
              <h2 className="text-h4 font-bold">Back this project</h2>
              <button type="button" onClick={closeModal}>
                <img
                  src="./images/icon-close-modal.svg"
                  alt="close modal icon"
                />
              </button>
            </div>
            <p className="text-h5 text-neutral-2 leading-6">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            {pledgeOptions.map((option) => (
              <PledgeModalOption
                key={option.reward}
                reward={option.reward}
                minPledgeAmt={option.minPledgeAmt}
                desc={option.desc}
                stock={inventoryStock[option.reward]}
                checked={option.reward === selectedOption}
                onOptionSelect={() => setSelectedOption(option.reward)}
                onPledgeConfirm={(pledgeAmount: number) =>
                  onPledgeConfirm(option.reward, pledgeAmount)
                }
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

interface PledgeModalOptionInterface extends PledgeOptionProps {
  checked: boolean;
  onOptionSelect: () => void;
  onPledgeConfirm: (pledgeAmount: number) => void;
}

const PledgeModalOption = ({
  reward,
  minPledgeAmt,
  desc,
  stock,
  checked,
  onOptionSelect,
  onPledgeConfirm,
}: PledgeModalOptionInterface) => {
  const [pledgeAmount, setPledgeAmount] = useState(minPledgeAmt);
  const isPaidOption = minPledgeAmt > 0;
  const outOfStock = isPaidOption && stock === 0;

  return (
    <section
      id={reward}
      className={`rounded-lg border border-slate-300${
        outOfStock ? " opacity-50" : ""
      } [&:has(input:checked)]:border-primary-1 [&:has(input:checked)]:border-2`}
      onClick={outOfStock ? () => null : onOptionSelect}
    >
      <section className="flex flex-col gap-y-5 px-6 pt-5 pb-7">
        <div className="flex items-center gap-x-4">
          <input
            id={`${reward} input`}
            type="radio"
            disabled={outOfStock}
            checked={checked}
            onChange={onOptionSelect}
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
              onChange={(e) => setPledgeAmount(parseInt(e.target.value))}
              className="w-[43%] border border-slate-300 rounded-full pl-10 text-h5 font-bold"
              min={minPledgeAmt}
              defaultValue={minPledgeAmt}
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
      )}
    </section>
  );
};

type PledgeConfirmationProps = {
  onConfirmationClick: () => void;
};

const PledgeConfirmationModal = ({
  onConfirmationClick,
}: PledgeConfirmationProps) => {
  return (
    <div className="fixed top-0 py-36 px-6 z-[2]">
      <section className="flex flex-col text-center items-center gap-y-8 px-4 pt-8 pb-10 bg-white rounded-lg z-[2]">
        <div className="flex flex-col gap-y-5 items-center">
          <img src="./images/icon-check.svg" alt="check logo" />
          <p className="text-h4 font-bold">Thanks for your support!</p>
          <p className="leading-6 text-h5 text-neutral-2">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
        </div>
        <button
          type="button"
          onClick={onConfirmationClick}
          className="px-8 py-3 rounded-full text-white text-h5 font-bold bg-primary-1"
        >
          Got it!
        </button>
      </section>
    </div>
  );
};

export default PledgeModal;
