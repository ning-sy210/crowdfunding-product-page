import { HashLoader } from "react-spinners";

type PledgeConfirmationProps = {
  isLoading: boolean;
  closeModal: () => void;
};

const PledgeConfirmationModal = ({
  isLoading,
  closeModal,
}: PledgeConfirmationProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full py-36 px-6 z-[1]">
      <section className="flex flex-col text-center items-center gap-y-8 px-4 pt-8 pb-10 bg-white rounded-lg z-[2]">
        {isLoading ? (
          <div className="h-32 flex items-center">
            <HashLoader color="#3cb4ac" />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-y-5 items-center">
              <img src="./images/icon-check.svg" alt="check logo" />
              <p className="text-h4 font-bold">Thanks for your support!</p>
              <p className="leading-6 text-h5 text-neutral-2">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="px-8 py-3 rounded-full text-white text-h5 font-bold bg-primary-1"
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
