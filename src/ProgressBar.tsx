type ProgressBarType = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressBarType) => {
  return (
    <div className="w-full h-3 rounded-full bg-slate-100">
      <div
        className={`w-[${progress}%] h-[inherit] rounded-[inherit] bg-primary-1`}
      ></div>
    </div>
  );
};

export default ProgressBar;
