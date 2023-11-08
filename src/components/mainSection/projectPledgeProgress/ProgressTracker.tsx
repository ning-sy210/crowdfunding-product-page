export type ProgressTrackerProps = {
  header: string | number;
  subText: string;
};

const ProgressTracker = ({ header, subText }: ProgressTrackerProps) => {
  return (
    <section>
      <p className="text-h1 font-bold">{header}</p>
      <p className="leading-6 text-h5 text-neutral-2">{subText}</p>
    </section>
  );
};

export default ProgressTracker;
