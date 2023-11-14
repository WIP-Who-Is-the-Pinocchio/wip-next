"use client";

import { twMerge } from "tailwind-merge";

const twTab =
  "py-[10px] px-[35px] rounded-[12px] text-[16px] not-italic leading-[100%] border-[1px] border-solid";
const twSelectedTab =
  "text-[#565656] font-semibold bg-white shadow-md border-black";
const twUnselectedTab =
  "text-[#818181] font-medium bg-[#f1f1f1] border-[#f1f1f1]";

const TabEnum = {
  LIST: 0,
  REGION: 1,
  PARTY: 2,
} as const;

export type Tab = keyof typeof TabEnum;

const getTabText = (tab: Tab) => {
  switch (tab) {
    case "LIST":
      return "리스트";
    case "REGION":
      return "지역별";
    case "PARTY":
      return "정당별";
    default:
  }
};

interface TabsProps {
  tabs: Tab[];
  selectedTab: Tab;
  onSelectTab: (tab: Tab) => () => void;
}

export default function Tabs({ tabs, selectedTab, onSelectTab }: TabsProps) {
  return (
    <div
      style={{ boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset" }}
      className="flex gap-[1px] p-[3px] rounded-[12px] bg-[#f1f1f1]"
    >
      {tabs.map((tab, i) => (
        <div
          key={i.toString()}
          className={twMerge(
            twTab,
            selectedTab === tab ? twSelectedTab : twUnselectedTab
          )}
          onClick={onSelectTab(tab)}
        >
          {getTabText(tab)}
        </div>
      ))}
    </div>
  );
}
