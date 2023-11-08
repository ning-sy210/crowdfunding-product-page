import { useState } from "react";

import PledgeSection from "../../PledgeSection";
import CallToAction from "./CallToAction";
import ProjectPledgeProgress from "./projectPledgeProgress/ProjectPledgeProgress";

import { PledgeRewards, pledgeOptions } from "../../constants/enums";

export type inventoryStockType = {
  [key: string]: number;
};

const MainSection = () => {
  const inventoryStock: inventoryStockType = {};

  for (const option of pledgeOptions) {
    if (option.reward === PledgeRewards.NONE) continue;
    inventoryStock[option.reward] = option.stock;
  }

  const [projectPledgeState, setProjectPledgeState] = useState({
    backedAmount: 89914,
    backers: 5007,
    daysLeft: 56,
    stock: inventoryStock,
  });

  function makePledgeFor(pledgeOption: PledgeRewards, pledgeAmount: number) {
    const newProjectPledgeState = {
      ...projectPledgeState,
      backedAmount: projectPledgeState.backedAmount + pledgeAmount,
      backers: projectPledgeState.backers + 1,
      stock: {
        ...projectPledgeState.stock,
      },
    };

    if (pledgeOption !== PledgeRewards.NONE) {
      newProjectPledgeState.stock[pledgeOption] =
        projectPledgeState.stock[pledgeOption] - 1;
    }
    setProjectPledgeState(newProjectPledgeState);
  }

  return (
    <main className="flex flex-col gap-y-6">
      <CallToAction
        inventoryStock={projectPledgeState.stock}
        makePledgeFor={makePledgeFor}
      />
      <ProjectPledgeProgress
        backedAmountThusFar={projectPledgeState.backedAmount}
        backersThusFar={projectPledgeState.backers}
        daysLeft={projectPledgeState.daysLeft}
      />
      <PledgeSection
        inventoryStock={projectPledgeState.stock}
        makePledgeFor={makePledgeFor}
      />
    </main>
  );
};

export default MainSection;
