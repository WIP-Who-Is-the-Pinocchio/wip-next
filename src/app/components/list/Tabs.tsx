'use client';

import { twMerge } from 'tailwind-merge';

const twTab =
  'py-[8px] px-[24px] rounded-[36px] text-[16px] not-italic leading-[100%]';
const twSelectedTab = 'text-[#9333EA] font-semibold bg-white border-black';
const twUnselectedTab = 'text-[#C084FC] font-medium';

const TabEnum = {
  COUNTRYWIDE: 0,
  REGION: 1,
  PARTY: 2,
} as const;

export type Tab = keyof typeof TabEnum;

const getTabText = (tab: Tab) => {
  switch (tab) {
    case 'COUNTRYWIDE':
      return '전국';
    case 'REGION':
      return '지역별';
    case 'PARTY':
      return '정당별';
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
      style={{ boxShadow: '0px 0px 4px 0px #C084FC7A inset' }}
      className="flex w-fit gap-[10px] rounded-[36px] bg-[#F3E8FF] p-[3px]"
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
