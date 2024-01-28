import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Badge from './Badge';
import { useState } from 'react';
import DetailTable from './DetailTable';
import {
  PledgesData,
  CompletionStatusData,
  LegislativeStatusData,
  FinancialStatusData,
  Politician,
  Constituency,
  PoliticianDetail,
} from '../../../api/apiTypes';

import { getDummyDetailData } from '../../../api/api';

interface CardProps {}

const RANDOM_IMAGE = 'https://picsum.photos/102';

const twLabel = 'text-[14px] font-medium leading-[100%]';

//더미데이터

// const {
//   id,
//   name,
//   profile_url,
//   political_party,
//   total_promise_count,
//   completed_promise_count,
//   promise_execution_rate,
//   constituency,
// } = polifakeData;

const pledgesColumns = [
  { label: '총공약수', key: 'total' },
  { label: '완료', key: 'completed' },
  { label: '추진중', key: 'inProgress' },
  { label: '보류', key: 'pending' },
  { label: '기타', key: 'other' },
];

const financialStatusColumns = [
  { label: '필요재정총액', key: 'totalRequired', width: 4 },
  { label: '확보재정총액', key: 'secured', width: 4 },
  { label: '집행재정총액', key: 'executed', width: 4 },
];

const completionStatusColumns = [
  { label: '국정공약', key: 'nation' },
  { label: '지역공약', key: 'region' },
  { label: '입법공약', key: 'legislative' },
  { label: '재정공약', key: 'budget' },
  { label: '임기내', key: 'duringTerm' },
];

const legislativeStatusColumns = [
  { label: '필요입법공약총수', key: 'totalRequired', width: 4 },
  { label: '입법의결완료공약총수', key: 'completedResolution', width: 8 },
];

const Card = ({ data }: { data: Politician }) => {
  const {
    id,
    name,
    profile_url,
    political_party,
    total_promise_count,
    completed_promise_count,
    promise_execution_rate,
    constituency,
  } = data;

  const policitianSingleData = getDummyDetailData(id);
  console.log(policitianSingleData[0].promise_count_detail);
  const {
    assembly_term,
    elected_count,
    in_progress_promise_count,
    pending_promise_count,
    discarded_promise_count,
    other_promise_count,
    resolve_required_promise_count,
    resolved_promise_count,
    total_required_funds,
    total_secured_funds,
    total_executed_funds,
    promise_count_detail,
    committee,
  } = policitianSingleData[0];

  const {
    completed_national_promise_count,
    total_national_promise_count,
    completed_local_promise_count,
    total_local_promise_count,
    completed_legislative_promise_count,
    total_legislative_promise_count,
    completed_financial_promise_count,
    total_financial_promise_count,
    completed_in_term_promise_count,
    total_in_term_promise_count,
    completed_after_term_promise_count,
    total_after_term_promise_count,
    completed_ongoing_business_promise_count,
    total_ongoing_business_promise_count,
    completed_new_business_promise_count,
    total_new_business_promise_count,
  } = policitianSingleData[0].promise_count_detail;

  const { region, district, section } = constituency[0];

  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const handleOpenDetail = () => {
    setIsOpenDetail(!isOpenDetail);
  };

  const completionStatusData: CompletionStatusData[] = [
    //성격내용별
    {
      nation: `${completed_national_promise_count}/${total_national_promise_count}`,
      region: `${completed_local_promise_count}/${total_local_promise_count}`,
      legislative: `${completed_legislative_promise_count}/${total_legislative_promise_count}`,
      budget: `${completed_financial_promise_count}/${total_financial_promise_count}`,
      duringTerm: `${completed_in_term_promise_count}/${total_in_term_promise_count}`,
    },
  ];
  const pledgesData: PledgesData[] = [
    //공약 이행현황
    {
      total: total_promise_count,
      completed: completed_promise_count,
      inProgress: in_progress_promise_count,
      pending: pending_promise_count,
      other: other_promise_count,
    },
  ];
  const legislativeStatusData: LegislativeStatusData[] = [
    //입법현황
    {
      totalRequired: resolve_required_promise_count,
      completedResolution: resolved_promise_count,
    },
  ];
  const financialStatusData: FinancialStatusData[] = [
    // 재정현황
    {
      totalRequired: total_required_funds,
      secured: total_secured_funds,
      executed: total_executed_funds,
    },
  ];

  const spanTagSytle = 'text-[14px] font-normal text-[#AFAFAF]';

  return (
    <li className="flex w-full items-end justify-between" key={id}>
      <div className="flex  select-none gap-[20px]">
        <div className="relative">
          <Image
            className="rounded-[12px] border-[1px] border-solid border-[#EEE]"
            src={RANDOM_IMAGE}
            alt=""
            width={104}
            height={104}
          />
          <span className="absolute left-0 top-0 flex min-h-[27px] min-w-[27px] items-center justify-center rounded-br-[12px] rounded-tl-[12px] bg-[#F3E8FF] p-[5px] text-[14px] font-semibold leading-[100%] text-primary-text">
            {id + 1}
          </span>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[10px]">
            <span className="text-[24px] font-semibold leading-[100%] text-black">
              {name}
            </span>
            <Badge>{completed_promise_count}</Badge>
          </div>
          <ul className="flex flex-col gap-[10px]">
            <li className="flex gap-[10px]">
              <span className={twMerge(twLabel, 'text-[#BDBDBD]')}>
                {section}
              </span>
              <p className={twMerge(twLabel, 'flex gap-[4px] text-[#636363]')}>
                <span>{region}</span>
                <span>{district}</span>
              </p>
            </li>
            <li className="flex gap-[10px]">
              <span className={twMerge(twLabel, 'text-[#BDBDBD]')}>
                공약이행률
              </span>
              <p className={twMerge(twLabel, 'flex gap-[4px] text-[#636363]')}>
                <span className="font-bold text-primary-text">
                  {promise_execution_rate}%
                </span>
                <span>
                  ({completed_promise_count}/{total_promise_count})
                </span>
              </p>
            </li>
            <li className="flex gap-[10px]">
              <span className={twMerge(twLabel, 'text-[#BDBDBD]')}>소속</span>
              <p className={twMerge(twLabel, 'text-[#636363]')}>
                {political_party}
              </p>
            </li>
          </ul>
          {isOpenDetail && (
            <div>
              <div className="gap-[12px] text-[16px] font-medium">
                공약 이행 현황
              </div>
              <span className="text-[14px] font-normal text-[#AFAFAF]">
                총 공약수 = 완료+추진중+보류+폐기+기타공약수
              </span>
              <DetailTable
                data={pledgesData}
                columns={pledgesColumns}
                colName1={'공약수'}
                colName2={'비고'}
              />

              <h2>성격/내용별 완료 현황</h2>
              <span className={`${spanTagSytle}`}>
                *각 분류별로 완료 공약 수 및 전체 공약수를 기입
              </span>
              <DetailTable
                data={completionStatusData}
                columns={completionStatusColumns}
                colName1={'완료/전체'}
                colName2={'전체'}
              />

              <h2>입법현황</h2>
              <ul>
                <li className={`${spanTagSytle}`}>
                  *필요 입법 공약 총 수 : 입법이 필요한 공약의 총 수{' '}
                </li>
                <li className={`${spanTagSytle}`}>
                  *입법 의결 완료 공약 총 수 : 입법을 모두 완료한 공약의 총 수
                </li>
              </ul>
              <DetailTable
                data={legislativeStatusData}
                columns={legislativeStatusColumns}
                colName1={'공약수'}
                colName2={'비고'}
              />
              <h2>재정현황</h2>
              <span className={`${spanTagSytle}`}>
                *전체 공약의 재정 현황 합계{' '}
              </span>
              <DetailTable
                data={financialStatusData}
                columns={financialStatusColumns}
                colName1={'금액'}
                colName2={'비고'}
              />
            </div>
          )}
        </div>
      </div>
      <button
        className="h-[28px] w-[33px] cursor-pointer rounded-br-[12px] rounded-tl-[12px] border-[#7E22CE] bg-primary-text text-white"
        onClick={handleOpenDetail}
      >
        +
      </button>
    </li>
  );
};

export default Card;
