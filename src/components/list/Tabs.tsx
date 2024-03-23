'use client';

import { cn } from '@/utils';
import { ListType, TabKey } from '@/constants';

const twTab =
  'py-2 px-6 rounded-[36px] text-[16px] not-italic leading-[100%] cursor-pointer';
const twSelectedTab = 'text-black font-bold bg-white';
const twUnselectedTab = 'text-[#909090] font-bold';

interface TabsProps {
  tabList: ListType<TabKey>[];
  selectedTab: TabKey;
  handleSelectedTab: (key: string) => void;
}

export default function Tabs({
  tabList,
  selectedTab,
  handleSelectedTab,
}: TabsProps) {
  return (
    <div
      style={{ boxShadow: '0px 0px 4px 0px #B9B9B9 inset' }}
      className="flex w-fit rounded-[36px] bg-[#F3F3F3] p-[3px]"
    >
      {tabList.map((tab, i) => (
        <div
          key={i.toString()}
          className={cn(
            twTab,
            selectedTab === tab.key ? twSelectedTab : twUnselectedTab
          )}
          onClick={() => handleSelectedTab(tab.key)}
        >
          {tab.text}
        </div>
      ))}
    </div>
  );
}
