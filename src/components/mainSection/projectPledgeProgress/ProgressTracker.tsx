export type ProgressTrackerProps = {
  header: string | number;
  subText: string;
};

const ProgressTracker = ({ header, subText }: ProgressTrackerProps) => {
  return (
    <div>
      <p className="text-1 font-bold">{header}</p>
      <p className="leading-6 text-9 text-neutral-2 tablet:text-8">{subText}</p>
    </div>
  );
};

export default ProgressTracker;
