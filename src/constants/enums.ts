import { PledgeOptionProps } from "../components/mainSection/pledgeSection/PledgeOption";

export enum PledgeRewards {
  NONE = "Pledge with no reward",
  BAMBOO = "Bamboo Stand",
  BLACK = "Black Edition Stand",
  MAHOGANY = "Mahogany Special Edition",
}

export const paidPledgeOptions: PledgeOptionProps[] = [
  {
    reward: PledgeRewards.BAMBOO,
    minPledgeAmount: 25,
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    stock: 101,
  },
  {
    reward: PledgeRewards.BLACK,
    minPledgeAmount: 75,
    desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    stock: 64,
  },
  {
    reward: PledgeRewards.MAHOGANY,
    minPledgeAmount: 200,
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    stock: 1,
  },
];

export const pledgeOptions: PledgeOptionProps[] = [
  {
    reward: PledgeRewards.NONE,
    minPledgeAmount: 0,
    desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    stock: 0,
  },
  ...paidPledgeOptions,
];
