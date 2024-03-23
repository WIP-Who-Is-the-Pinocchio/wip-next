'use client';

import { Table } from '../congress/Table';
import useTableData from '@/hooks/useTableData';
import { MPDataType } from '@/api/api';

interface TableProps {
  mpData: MPDataType;
}

// 테이블 헤더 데이터
const promiseHeaders = ['총 공약수', '완료', '추진중', '보류', '폐기', '기타'];
const promiseDetailHeaders = [
  '국정공약',
  '지역공약',
  '입법공약',
  '재정공약',
  '임기내',
  '임기후',
  '지속사업',
  '신규사업',
];
const resolvedPromiseHeader = ['필요입법공약총수', '입법의결완료공약총수'];
const fundHeader = ['필요재정총액', '확보재정총액', '집행재정총액'];

export const MPBoxDetail = ({ mpData }: TableProps) => {
  const { promiseData, promiseDetailData, resolvedPromiseData, fundData } =
    useTableData(mpData);

  const profileData = mpData.base_info;
  const regionData = mpData.constituency[0];
  const fullRegion = `${regionData.region} ${
    regionData.district ? regionData.district : ''
  } ${regionData.section ? regionData.section : ''}`;

  return (
    <article className="flex flex-col gap-6 text-[#3A3A3A]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-[10px]">
          <span>선거구</span>
          <span className="text-[#636363]">{fullRegion}</span>
        </div>
        <div className="flex gap-[10px]">
          <span>당선횟수</span>
          <span className="text-[#636363]">{profileData.elected_count}회</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span>공약 이행 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *총 공약수 = 완료+추진중+보류+폐기+기타공약수
        </span>
        <Table headers={promiseHeaders} data={promiseData} />
      </div>
      <div className="flex flex-col gap-3">
        <span>성격/내용별 완료 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *각 분류별로 완료 공약 수 및 전체 공약수를 기입
        </span>
        <Table headers={promiseDetailHeaders} data={promiseDetailData} />
      </div>
      <div className="flex flex-col gap-3">
        <span>입법 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *필요 입법 공약 총 수: 입법이 필요한 공약의 총 수
        </span>
        <span className="text-[14px] text-[#AFAFAF]">
          *입법 의결 완료 공약 총 수: 입법을 모두 완료한 공약의 총 수
        </span>
        <Table headers={resolvedPromiseHeader} data={resolvedPromiseData} />
      </div>
      <div className="mb-[26px] flex flex-col gap-3">
        <span>재정 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *전체 공약의 재정 현황 합계
        </span>
        <Table headers={fundHeader} data={fundData} />
      </div>
    </article>
  );
};
