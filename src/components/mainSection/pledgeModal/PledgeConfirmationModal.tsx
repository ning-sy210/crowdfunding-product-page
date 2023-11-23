import { HashLoader } from "react-spinners";
import CheckmarkIcon from "../../../assets/images/icon-check.svg";

type PledgeConfirmationProps = {
  isLoading: boolean;
  closeModal: () => void;
};

const PledgeConfirmationModal = ({
  isLoading,
  closeModal,
}: PledgeConfirmationProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full py-36 px-6 z-[1] tablet:py-[5.75rem]">
      <section
        className="flex flex-col text-center items-center gap-y-8 px-4 pt-8 pb-10 bg-white rounded-lg z-[2] max-w-[33.75rem]
      tablet:mx-auto tablet:px-12 tablet:py-12"
      >
        {isLoading ? (
          <div className="h-32 flex items-center">
            <HashLoader color="#3cb4ac" />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-y-5 items-center tablet:gap-y-3">
              <img
                src={CheckmarkIcon}
                alt="check logo"
                className="tablet:w-[5.5rem] tablet:mb-9"
              />
              <p className="text-6 font-bold tablet:text-4">
                Thanks for your support!
              </p>
              <p className="leading-6 text-9 text-neutral-2 tablet:text-7 tablet:leading-8">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="px-8 py-3 rounded-full text-white text-9 font-bold bg-primary-1 transition-colors hover:bg-teal-400 tablet:py-2 tablet:active:bg-primary-2"
            >
              Got it!
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default PledgeConfirmationModal;
