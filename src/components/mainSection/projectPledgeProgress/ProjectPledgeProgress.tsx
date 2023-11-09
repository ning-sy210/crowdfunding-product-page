import { Fragment } from "react";
import ProgressBar from "./ProgressBar";
import ProgressTracker, { ProgressTrackerProps } from "./ProgressTracker";

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

  const progressTrackers: ProgressTrackerProps[] = [
    {
      header: `$${backedAmountThusFar.toLocaleString()}`,
      subText: `of $${backedAmountGoal.toLocaleString()} backed`,
    },
    {
      header: backersThusFar.toLocaleString(),
      subText: "total backers",
    },
    {
      header: daysLeft,
      subText: "days left",
    },
  ];

  return (
    <section className="flex flex-col gap-y-6 items-center text-center pt-7 px-6 pb-9 bg-white rounded-lg border border-slate-100 max-w-card">
      {progressTrackers.map((tracker, i) => (
        <Fragment key={i}>
          <ProgressTracker header={tracker.header} subText={tracker.subText} />
          {i !== progressTrackers.length - 1 && (
            <div className="w-[76px] h-[1px] bg-slate-300"></div>
          )}
        </Fragment>
      ))}
      <ProgressBar progress={crowdFundingProgress} />
    </section>
  );
};

export default ProjectPledgeProgress;
