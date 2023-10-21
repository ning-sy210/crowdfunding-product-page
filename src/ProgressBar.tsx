type ProgressBarType = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressBarType) => {
  return (
    <div className="w-full h-3 rounded-full bg-slate-100">
      <div
        className="h-[inherit] rounded-[inherit] bg-primary-1"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
