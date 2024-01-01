'use client';

import Image from 'next/image';
import type { ChangeEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';
import Rank from '../components/rank/Rank';
import Tabs, { Tab } from '../components/list/Tabs';
import Regions from '../components/list/Regions';
import Card from '../components/congress/Card';
import { useState } from 'react';

const tabs: Tab[] = ['COUNTRYWIDE', 'REGION', 'PARTY'];

export default function List() {
  const [selectedTab, setSelectedTab] = useState<Tab>('REGION');
  const [search, setSearch] = useState('');

  // 임시 더미 배열
  const MPArray = Array.from({ length: 10 }, (_, index) => index);

  const handleSelectTab = (tab: Tab) => () => {
    setSelectedTab(tab);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    console.log(`검색어: ${search}`);
  };

  return (
    <section className="flex flex-col items-center py-[30px]">
      <div className="px-[20px] text-[16px] font-bold leading-[150%] text-black">
        WIP
      </div>
      <article className="mb-[40px] mt-[10px] px-[20px]">
        <p className="text-[14px] font-normal not-italic leading-[150%] text-black">
          누가 피노키오인가?
        </p>
      </article>
      <article className="mb-[40px] px-[30px]">
        <Rank />
      </article>
      <article
        style={{ boxShadow: '0px 0px 16px 0px #E6E6E6' }}
        className="mt-[11px] flex w-full flex-col items-center gap-[20px] rounded-t-[36px] px-[20px] pt-[24px]"
      >
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={handleSelectTab}
        />
        <div
          className="border-b-solid relative mb-[22px] mt-[4px] w-full border-b-[2px] border-b-[#f1f1f1] py-[12px]"
          onClick={handleSearch}
        >
          <input
            className={twMerge(
              'w-full pr-[34px] text-[18px] leading-[100%] text-black outline-none',
              'placeholder:text-[18px] placeholder:font-normal placeholder:not-italic placeholder:leading-[100%] placeholder:text-[#C1C1C1]'
            )}
            value={search}
            type="text"
            placeholder="이름으로 검색하기"
            onChange={handleChange}
          />
          <Image
            className="absolute right-0 top-[12px] hover:cursor-pointer"
            src="/search_icon.svg"
            width={18}
            height={18}
            alt="검색"
          />
        </div>
        {selectedTab === 'COUNTRYWIDE' ? (
          <>
            {MPArray.map((_, index) => (
              <Card key={index} />
            ))}
          </>
        ) : (
          <Regions />
        )}
      </article>
    </section>
  );
}
