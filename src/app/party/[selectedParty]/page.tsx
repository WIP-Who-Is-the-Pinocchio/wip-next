'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import SEO from '@/app/components/SEO';
import { MPBox } from '@/app/components/congress/MPBox';
import { DUMMY_DATA, MPDataType } from '../../../api/api';
import Tabs from '@/app/components/list/Tabs';
import MainLayout from '@/app/components/common/MainLayout';

const PartyPage = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);
  const selectedParty = decodedPathname.split('/')[2];

  const getSelectedPartyList = (data: MPDataType[], party: string) => {
    // party에 해당하는 데이터 필터링
    // const filteredData = data.filter(
    //   (info: MPDataType) => info.base_info.political_party === party
    // );
    const filteredData = data.filter((info: MPDataType) => {
      const { political_party } = info.base_info;
      if (party === '기타') {
        return (
          political_party !== '국민의힘' &&
          political_party !== '더불어민주당' &&
          political_party !== '정의당'
        );
      } else {
        return political_party === party;
      }
    });

    // 비율 계산하여 데이터에 추가
    const dataWithRatio = filteredData.map((item: MPDataType) => {
      const { completed_promise_count, total_promise_count } = item.base_info;
      const ratio = (completed_promise_count / total_promise_count || 0) * 100;
      const roundedRatio = ratio.toFixed(2);
      return { ...item, roundedRatio };
    });

    // 비율을 기준으로 데이터 정렬
    const sortedData = dataWithRatio.sort(
      (a: any, b: any) => b.roundedRatio - a.roundedRatio // 내림차순으로 변경
    );

    // 정렬된 데이터의 인덱스 값을 rank로 사용하여 객체에 추가
    const partyListData = sortedData.map((info, index) => {
      return { ...info, rank: index }; // 인덱스 값 + 1을 rank로 사용
    });

    return partyListData;
  };

  const selectedPartyData = getSelectedPartyList(DUMMY_DATA, selectedParty);
  console.log(selectedPartyData);
  return (
    <>
      <SEO title={`${selectedParty} 정당별 국회의원 공약이행률 순위`} />
      <MainLayout>
        <Tabs selectedTab={'PARTY'} />
        <div className="relative mb-[22px] mt-[4px] w-full border-b-[2px] border-b-[#f1f1f1] py-[12px]">
          <div className="mb-[120px] flex flex-col gap-6">
            {selectedPartyData.map((mpData) => (
              <MPBox
                key={`${mpData.base_info.name}-${mpData.rank}`}
                mpData={mpData}
                ranking={mpData.rank}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PartyPage;
