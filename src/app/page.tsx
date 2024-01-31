'use client';

import { useState } from 'react';
import type { ChangeEventHandler } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Rank from './components/rank/Rank';
import Tabs, { Tab } from './components/list/Tabs';
import Regions from './components/list/Regions';
import SEO from './components/SEO';
import { MPBox } from './components/congress/MPBox';
import { DUMMY_DATA, MPDataType } from '../api/api';

const tabs: Tab[] = ['COUNTRYWIDE', 'REGION', 'PARTY'];

export default function List() {
  const [selectedTab, setSelectedTab] = useState<Tab>('COUNTRYWIDE');
  const [mpData, setMpData] = useState<MPDataType[]>(DUMMY_DATA);
  const [search, setSearch] = useState('');

  const sortData = mpData.sort((a, b) => {
    const ratioA =
      a.base_info.total_promise_count > 0
        ? a.base_info.completed_promise_count / a.base_info.total_promise_count
        : 0;
    const ratioB =
      b.base_info.total_promise_count > 0
        ? b.base_info.completed_promise_count / b.base_info.total_promise_count
        : 0;

    return ratioB - ratioA; // 내림차순 정렬
  });

  const handleSelectTab = (tab: Tab) => () => {
    setSelectedTab(tab);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setMpData(
      DUMMY_DATA.filter((data: MPDataType) =>
        data.base_info.name.includes(search)
      )
    );
  };

  const getLowestPromiseCount = (data: MPDataType[]) => {
    // 비율 계산하여 데이터에 추가
    const dataWithRatio = data.map((item: MPDataType) => {
      const { completed_promise_count, total_promise_count } = item.base_info;
      const ratio = (completed_promise_count / total_promise_count || 0) * 100;
      const roundedRatio = ratio.toFixed(2);
      return { ...item, roundedRatio };
    });

    // 비율을 기준으로 데이터 정렬
    const sortedData = dataWithRatio.sort(
      (a: any, b: any) => a.roundedRatio - b.roundedRatio
    );

    // 가장 낮은 3명의 데이터 선택
    const lowestThree = sortedData.slice(0, 5);

    return lowestThree;
  };

  const lowestThreePromises = getLowestPromiseCount(DUMMY_DATA);
  // console.log(lowestThreePromises);

  return (
    <>
      <SEO title="국회의원 공약이행률 순위" />
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
          <Rank data={lowestThreePromises} />
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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (e.nativeEvent.isComposing) {
                    return;
                  }
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
            <Image
              className="absolute right-0 top-[12px] hover:cursor-pointer"
              src="/search_icon.svg"
              width={18}
              height={18}
              alt="검색 버튼 아이콘"
            />
          </div>
          {selectedTab === 'COUNTRYWIDE' ? (
            <>
              {sortData.map((mpData: MPDataType, index) => (
                <MPBox
                  key={`${mpData.base_info.name}-${index}`}
                  mpData={mpData}
                  ranking={index}
                />
              ))}
            </>
          ) : selectedTab === 'REGION' ? (
            <Regions />
          ) : (
            <div className="h-[500px]">Coming soon</div>
          )}
        </article>
      </section>
    </>
  );
}
