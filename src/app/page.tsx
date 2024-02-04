'use client';

import { useState } from 'react';

import Rank from './components/rank/Rank';
import Tabs from './components/list/Tabs';
import SEO from './components/SEO';
import { DUMMY_DATA, MPDataType } from '../api/api';
import MPListContainer from './components/congress/MPListContainer';

export default function List() {
  const getLowestPromiseCount = (data: MPDataType[]) => {
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
  };

  const lowestThreePromises = getLowestPromiseCount(DUMMY_DATA);

  return (
    <>
      <SEO title="국회의원 공약이행률 순위" />
<<<<<<< HEAD
      <section className=" flex flex-col items-center pt-[14px]">
=======
      <section className="flex w-full max-w-[1020px] flex-col items-center pt-[30px]">
>>>>>>> fca2f21d8d82186b6e23f23d61651ef35ed07a91
        <div className="px-[20px] text-[16px] font-bold leading-[150%] text-black">
          WIP
        </div>
        <article className="mb-[28px]  px-[20px] py-[10px]">
          <p className="text-[14px] font-normal not-italic leading-[150%] text-black">
            누가 피노키오인가
          </p>
        </article>
        <article className="mb-[40px] px-[30px]">
          <Rank data={lowestThreePromises} />
        </article>
        <article
          style={{ boxShadow: '0px 0px 16px 0px #E6E6E6' }}
          className={
            'mt-[11px] flex w-full flex-col items-center gap-[20px] rounded-t-[36px] px-[20px]  pt-[24px]'
          }
        >
          <Tabs selectedTab={'COUNTRYWIDE'} />
          <MPListContainer mpData={DUMMY_DATA} />
        </article>
      </section>
    </>
  );
}
