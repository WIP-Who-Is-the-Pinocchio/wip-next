'use client';

import { Table, TableHeader, TableRowData } from '../congress/Table';
import { MPDataType } from '@/api/api';

interface TableProps {
  mpData: MPDataType;
  tableHeaders: TableHeader[];
  tableData: TableRowData[];
}

export const MPBoxDetail = ({
  mpData,
  tableHeaders,
  tableData,
}: TableProps) => {
  // 데이터 분리
  const profileData = mpData.base_info;

  return (
    <article className="text-[#3A3A3A]">
      <div className="mb-6 flex gap-[10px]">
        <span>당선횟수</span>
        <span>{profileData.elected_count}회</span>
      </div>
      <div className="mb-6 flex flex-col gap-3">
        <span>공약 이행 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *총 공약수 = 완료+추진중+보류+폐기+기타공약수
        </span>
        <Table headers={tableHeaders} data={tableData} />
      </div>
      <div className="mb-6 flex flex-col gap-3">
        <span>성격/내용별 완료 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *각 분류별로 완료 공약 수 및 전체 공약수를 기입
        </span>
        <Table headers={tableHeaders} data={tableData} />
      </div>
      <div className="mb-6 flex flex-col gap-3">
        <span>입법 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *필요 입법 공약 총 수: 입법이 필요한 공약의 총 수
        </span>
        <span className="text-[14px] text-[#AFAFAF]">
          *입법 의결 완료 공약 총 수: 입법을 모두 완료한 공약의 총 수
        </span>
        <Table headers={tableHeaders} data={tableData} />
      </div>
      <div className="mb-14 flex flex-col gap-3">
        <span>재정 현황</span>
        <span className="text-[14px] text-[#AFAFAF]">
          *전체 공약의 재정 현황 합계
        </span>
        <Table headers={tableHeaders} data={tableData} />
      </div>
    </article>
  );
};
