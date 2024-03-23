'use client';

import { useState } from 'react';

import Rank from '@/components/rank/Rank';
import Tabs from '@/components/list/Tabs';
import SEO from '@/components/SEO';
import MPListContainer from '@/components/congress/MPListContainer';
import { RegionComponent, PartyComponent } from '@/components/list';
import { Header } from '@/components/shared';
import { TabKey, TAB_LIST } from '@/constants';
import { useCategoryStep } from '@/hooks';
import { DUMMY_DATA, MPDataType } from '../api/api';

export default function List() {
  const [currentTab, setCurrentTab] = useState<TabKey>('countryWide');

  const {
    regionStep,
    partyStep,
    nextRegionStep,
    nextPartyStep,
    resetRegionStep,
    resetPartyStep,
  } = useCategoryStep();

  const lowestThreePromises = getLowestPromiseCount(DUMMY_DATA);

  const handleSelectedTab = (tab: string) => {
    setCurrentTab(tab as TabKey);
    resetRegionStep();
    resetPartyStep();
  };

  return (
    <>
      <SEO title="국회의원 공약이행률 순위" />
      <section className="flex w-full max-w-[1020px] flex-col items-center">
        <Header needDescription={currentTab === 'countryWide'} />
        {currentTab === 'countryWide' && (
          <article className="mt-7 w-full px-5">
            <Rank data={lowestThreePromises} />
          </article>
        )}
        <article
          style={{
            boxShadow: '0px 0px 16px 0px #E6E6E6',
            minHeight: 'calc(100vh - 364px)',
          }}
          className={
            'mt-1 flex w-full flex-col items-center gap-[22px] rounded-t-[36px] bg-white px-5 pt-6'
          }
        >
          <Tabs
            selectedTab={currentTab}
            tabList={TAB_LIST}
            handleSelectedTab={handleSelectedTab}
          />
          {currentTab === 'countryWide' && (
            <MPListContainer mpData={DUMMY_DATA} />
          )}
          {currentTab === 'region' && (
            <RegionComponent
              regionStep={regionStep}
              nextRegionStep={nextRegionStep}
              mpData={DUMMY_DATA}
            />
          )}
          {currentTab === 'party' && (
            <PartyComponent
              partyStep={partyStep}
              nextPartyStep={nextPartyStep}
              mpData={DUMMY_DATA}
            />
          )}
        </article>
      </section>
    </>
  );
}

function getLowestPromiseCount(data: MPDataType[]) {
  // 비율 계산하여 데이터에 추가
  const dataWithRatio = data.map((item: MPDataType) => {
    const { completed_promise_count, total_promise_count } = item.base_info;
    const roundedRatio = Math.round(
      (completed_promise_count / total_promise_count || 0) * 100
    );
    return { ...item, roundedRatio };
  });

  // 비율을 기준으로 데이터 정렬
  const sortedData = dataWithRatio.sort(
    (a: any, b: any) => b.roundedRatio - a.roundedRatio
  );

  // 가장 낮은 3명의 데이터 선택
  const lowestThree = sortedData.slice(0, 5);

  return lowestThree;
}
