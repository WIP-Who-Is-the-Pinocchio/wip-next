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
      <section className="flex w-full max-w-[450px] flex-col items-center">
        <Header needDescription={currentTab === 'countryWide'} />
        {currentTab === 'countryWide' && (
          <article className="mt-7 w-full px-5">
            <Rank rankData={lowestThreePromises} />
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

function getLowestPromiseCount(mpData: MPDataType[]) {
  const sortData = mpData.sort((a, b) => {
    const ratioA =
      a.base_info.total_promise_count > 0
        ? a.base_info.completed_promise_count / a.base_info.total_promise_count
        : 0;
    const ratioB =
      b.base_info.total_promise_count > 0
        ? b.base_info.completed_promise_count / b.base_info.total_promise_count
        : 0;
    return ratioA - ratioB;
  });

  const topRatios = sortData
    .slice(0, 3)
    .map((data) =>
      data.base_info.total_promise_count > 0
        ? data.base_info.completed_promise_count /
          data.base_info.total_promise_count
        : 0
    );

  const thirdLowestRatio = topRatios[2] || 0;

  const resultData = sortData.filter(
    (data) =>
      (data.base_info.total_promise_count > 0
        ? data.base_info.completed_promise_count /
          data.base_info.total_promise_count
        : 0) <= thirdLowestRatio
  );

  return resultData;
}
