import { useEffect, useState } from "react";

import { inventoryStockType } from "../MainSection";
import PledgeConfirmationModal from "./PledgeConfirmationModal";
import PledgeModalOption from "./PledgeModalOption";

import { PledgeRewards, pledgeOptions } from "../../../constants/enums";

type PledgeModalProps = {
  defaultSelected?: PledgeRewards;
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
  const [isSubmittingPledge, setIsSubmittingPledge] = useState(false);

  useEffect(() => {
    if (selectedOption) {
      setTimeout(() => {
        const pledgeOption = document.getElementById(selectedOption);
        pledgeOption?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
    // 'selectedOption' prop not included in dependency array to prevent "snap" scrolling
    // when changing pledge options in the modal
  }, []);

  function onPledgeConfirm(pledgeOption: PledgeRewards, pledgeAmount: number) {
    setIsSubmittingPledge(true);
    setShowConfirmationModal(true);

    // to simulate a put request
    setTimeout(() => {
      makePledgeFor(pledgeOption, pledgeAmount);
      setIsSubmittingPledge(false);
    }, 3000);
  }

  return (
    <>
      <div className="fixed inset-0 bg-neutral-1 opacity-50 z-[1]"></div>

      {showConfirmationModal ? (
        <PledgeConfirmationModal
          isLoading={isSubmittingPledge}
          closeModal={closeModal}
        />
      ) : (
        <div className="fixed top-0 left-0 right-0 py-[120px] px-6 z-[2] h-full overflow-auto overscroll-contain">
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
                minPledgeAmount={option.minPledgeAmount}
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

export default PledgeModal;
