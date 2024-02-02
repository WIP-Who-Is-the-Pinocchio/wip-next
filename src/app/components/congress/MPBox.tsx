'use client';

import { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { MPBoxDetail } from '../congress/MPBoxDetail';
import { percentagePromiseCount } from '@/app/utils';
import { MPDataType } from '@/api/api';

const CONTAINER_GAP = 'flex gap-[10px]';
const TEXT_STYLE = 'text-sm text-[#BDBDBD]';

interface MPBoxProps {
  mpData: MPDataType;
  ranking: number;
}

export const MPBox = ({ mpData, ranking }: MPBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // 데이터 분리
  const profileData = mpData.base_info;
  const regionData = mpData.constituency[0];

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative flex w-full flex-col gap-[24px]">
      <article className="flex justify-start gap-[20px]">
        <div className="relative h-[104px] w-[104px] overflow-hidden rounded-xl border border-[#EEEEEE]">
          <Image
            src={profileData.profile_url}
            width={104}
            height={104}
            alt="국회의원 프로필 사진"
          />
          <div className="absolute left-0 top-0 flex h-[28px] w-[28px] items-center justify-center rounded-br-xl bg-[#F3E8FF] text-[#A855F7]">
            {ranking + 1}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-[10px] leading-none">
            <span className="text-[24px] font-semibold">
              {profileData.name}
            </span>
            <div className="rounded-xl border border-[#E9D5FF] bg-[#FAF5FF] px-3 py-1.5 text-[14px] font-medium text-[#9333EA]">
              {regionData.district}
              {regionData.section ? regionData.section : ''}
            </div>
          </div>
          <div>
            <div className={twMerge(CONTAINER_GAP)}>
              <span className={twMerge(TEXT_STYLE)}>선거구</span>
              <span className="text-sm text-[#636363]">
                {`${regionData.region} ${
                  regionData.district ? regionData.district : ''
                }${regionData.section ? regionData.section : ''}`}
              </span>
            </div>
            <div className={twMerge(CONTAINER_GAP)}>
              <span className={twMerge(TEXT_STYLE)}>공약이행률</span>
              <span className="text-sm font-medium text-[#070707]">
                <span className="font-bold text-[#9333EA]">
                  {percentagePromiseCount(
                    profileData.completed_promise_count,
                    profileData.total_promise_count
                  )}
                  %
                </span>
                ({profileData.completed_promise_count}/
                {profileData.total_promise_count}개)
              </span>
            </div>
            <div className={twMerge(CONTAINER_GAP)}>
              <span className={twMerge(TEXT_STYLE)}>소속</span>
              <span className="text-sm text-[#636363]">
                {profileData.political_party}
              </span>
            </div>
          </div>
        </div>
      </article>
      <button
        className="absolute bottom-0 right-0 h-[28px] w-[33px] cursor-pointer rounded-br-xl rounded-tl-xl bg-[#9333EA] text-white"
        onClick={handleToggleClick}
      >
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && <MPBoxDetail mpData={mpData} />}
    </section>
  );
};
