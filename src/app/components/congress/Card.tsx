import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Badge from './Badge';
import { useState } from 'react';
import DetailTable from './DetailTable';

interface CardProps {}

interface PledgesData {
  total: number;
  completed: number;
  inProgress: number;
  pending: number;
  other: number;
}

interface CompletionStatusData {
  nation: number;
  region: number;
  legislative: number;
  budget: number;
  duringTerm: number;
}

interface LegislativeStatusData {
  totalRequired: number;
  completedResolution: number;
}

interface FinancialStatusData {
  totalRequired: number;
  secured: number;
  executed: number;
}

const RANDOM_IMAGE = 'https://picsum.photos/102';

const twLabel = 'text-[14px] font-medium leading-[100%]';

export default function Card({}: CardProps) {
  const pledgesData: PledgesData[] = [
    { total: 100, completed: 30, inProgress: 40, pending: 20, other: 10 },
  ];

  const pledgesColumns = [
    { label: '총공약수', key: 'total' },
    { label: '완료', key: 'completed' },
    { label: '추진중', key: 'inProgress' },
    { label: '보류', key: 'pending' },
    { label: '기타', key: 'other' },
  ];

  const completionStatusData: CompletionStatusData[] = [
    { nation: 50, region: 25, legislative: 10, budget: 10, duringTerm: 5 },
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

  const legislativeStatusData: LegislativeStatusData[] = [
    { totalRequired: 111, completedResolution: 222 },
  ];

  const financialStatusColumns = [
    { label: '필요재정총액', key: 'totalRequired', width: 4 },
    { label: '확보재정총액', key: 'secured', width: 4 },
    { label: '집행재정총액', key: 'executed', width: 4 },
  ];

  const financialStatusData: FinancialStatusData[] = [
    { totalRequired: 1000000, secured: 500000, executed: 300000 },
    // Add more rows as needed
  ];

  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const handleOpenDetail = () => {
    setIsOpenDetail(!isOpenDetail);
  };

  const spanTagSytle = 'text-[14px] font-normal text-[#AFAFAF]';

  return (
    <li className="flex w-full items-end justify-between">
      <div className="flex  select-none gap-[20px]">
        <div className="relative">
          <Image
            className="rounded-[12px] border-[1px] border-solid border-[#EEE]"
            src={RANDOM_IMAGE}
            alt=""
            width={104}
            height={104}
          />
          <span className="absolute left-0 top-0 flex h-[27.45098%] w-[27.45098%] items-center justify-center rounded-br-[12px] rounded-tl-[12px] bg-[#F3E8FF] text-[14px] font-semibold leading-[100%] text-primary-text">
            1
          </span>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[10px]">
            <span className="text-[24px] font-semibold leading-[100%] text-black">
              김OO
            </span>
            <Badge>마포구을</Badge>
          </div>
          <ul className="flex flex-col gap-[10px]">
            <li className="flex gap-[10px]">
              <span className={twMerge(twLabel, 'text-[#BDBDBD]')}>선거구</span>
              <p className={twMerge(twLabel, 'flex gap-[4px] text-[#636363]')}>
                <span>서울특별시</span>
                <span>마포구을</span>
              </p>
            </li>
            <li className="flex gap-[10px]">
              <span className={twMerge(twLabel, 'text-[#BDBDBD]')}>
                공약이행률
              </span>
              <p className={twMerge(twLabel, 'flex gap-[4px] text-[#636363]')}>
                <span className="font-bold text-primary-text">80%</span>
                <span>(4/5개)</span>
              </p>
            </li>
            <li className="flex gap-[10px]">
              <span className={twMerge(twLabel, 'text-[#BDBDBD]')}>소속</span>
              <p className={twMerge(twLabel, 'text-[#636363]')}>더불어민주당</p>
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
}
