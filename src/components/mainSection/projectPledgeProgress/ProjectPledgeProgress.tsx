import ProgressBar from "./ProgressBar";
import ProgressTracker from "./ProgressTracker";

type ProjectPledgeProgressProps = {
  backedAmountThusFar: number;
  backersThusFar: number;
  daysLeft: number;
};

const ProjectPledgeProgress = ({
  backedAmountThusFar,
  backersThusFar,
  daysLeft,
}: ProjectPledgeProgressProps) => {
  const backedAmountGoal = 100_000;
  const crowdFundingProgress = Math.floor(
    (backedAmountThusFar / backedAmountGoal) * 100
  );

  return (
    <section
      className="flex flex-col gap-y-6 items-center text-center pt-7 px-6 pb-9 bg-white rounded-lg border border-slate-100 max-w-card
    tablet:text-start tablet:items-start tablet:pt-11 tablet:pb-12 tablet:px-11 tablet:gap-y-9"
    >
      <div className="flex flex-col items-center gap-y-6 tablet:flex-row">
        <ProgressTracker
          header={`$${backedAmountThusFar.toLocaleString()}`}
          subText={`of $${backedAmountGoal.toLocaleString()} backed`}
        />

        <div className="w-[76px] h-[1px] bg-slate-300 tablet:w-[1px] tablet:h-16 tablet:ml-[3.25rem] tablet:mr-12"></div>

        <ProgressTracker
          header={backersThusFar.toLocaleString()}
          subText="total backers"
        />

        <div className="w-[76px] h-[1px] bg-slate-300 tablet:w-[1px] tablet:h-16 tablet:ml-24 tablet:mr-12"></div>

        <ProgressTracker header={daysLeft} subText="days left" />
      </div>

      <ProgressBar progress={crowdFundingProgress} />
    </section>
  );
};

export default ProjectPledgeProgress;
