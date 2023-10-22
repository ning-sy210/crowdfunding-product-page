import { useState } from "react";

type PledgeOptionProps = {
  reward: string;
  minPledgeAmt: number;
  desc: string;
  stock: number;
};

const pledgeOptions: PledgeOptionProps[] = [
  {
    reward: "Bamboo Stand",
    minPledgeAmt: 25,
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    stock: 101,
  },
  {
    reward: "Black Edition Stand",
    minPledgeAmt: 75,
    desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    stock: 64,
  },
  {
    reward: "Mahogany Special Edition",
    minPledgeAmt: 200,
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    stock: 0,
  },
];

const PledgeOption = ({
  reward,
  minPledgeAmt,
  desc,
  stock,
}: PledgeOptionProps) => {
  const [stockLeft] = useState(stock);
  const outOfStock = stock <= 0;

  return (
    <section
      className={`flex flex-col items-start p-[22px] gap-y-5 border border-slate-300 rounded-lg${
        outOfStock && " opacity-50"
      }`}
    >
      <section className="flex flex-col gap-y-1">
        <h3 className="text-h5 font-bold">{reward}</h3>
        <p className="text-h5 font-medium text-primary-1">
          Pledge ${minPledgeAmt.toLocaleString("en-US")} or more
        </p>
      </section>
      <p className="text-h5 text-neutral-2 leading-6">{desc}</p>
      <p className="flex items-center gap-x-2">
        <span className="text-h1 font-bold">
          {stockLeft.toLocaleString("en-US")}
        </span>
        <span className="text-[15px] text-neutral-2">left</span>
      </p>
      <button
        type="button"
        className={`w-40 h-12 ${
          outOfStock ? "bg-zinc-400" : "bg-primary-1"
        } text-white text-h5 font-bold rounded-full`}
        disabled={outOfStock}
      >
        {outOfStock ? "Out of Stock" : "Select Reward"}
      </button>
    </section>
  );
};

const PledgeSection = () => {
  return (
    <>
      {pledgeOptions.map((option) => (
        <PledgeOption
          key={option.reward}
          reward={option.reward}
          minPledgeAmt={option.minPledgeAmt}
          desc={option.desc}
          stock={option.stock}
        />
      ))}
    </>
  );
};

export default PledgeSection;
