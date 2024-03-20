'use client';

import Image from 'next/image';

import { MPBoxDetail } from '../congress/MPBoxDetail';
import { percentagePromiseCount, cn } from '@/utils';
import { MPDataType } from '@/api/api';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '../shared';
import { PARTY_DATA } from '@/constants';

interface MPBoxProps {
  mpData: MPDataType;
  ranking: number;
}

export const MPBox = ({ mpData, ranking }: MPBoxProps) => {
  // 데이터 분리
  const profileData = mpData.base_info;
  const regionData = mpData.constituency[0];

  return (
    <Accordion className="w-[calc(100%+40px)] self-center">
      <AccordionItem itemName="detailData">
        {({ itemName }) => (
          <>
            <AccordionButton
              itemName={itemName}
              icon={
                <Image
                  src="/icons/arrowDown.svg"
                  width={12}
                  height={24}
                  alt="arrowBottomDirection"
                />
              }
              className={cn(
                'relative self-center text-[14px]',
                ranking % 2 === 0 ? 'bg-[#FCFCFC]' : 'bg-[#F6F6F6]'
              )}
            >
              <article className="flex w-full items-center">
                <span className="min-w-[24px] pr-1 text-start">
                  {ranking + 1}
                </span>
                <div className="flex items-center gap-2.5">
                  <picture className="relative">
                    <img
                      src={profileData.profile_url}
                      alt="국회의원 프로필사진"
                      style={{
                        border: `2px solid ${
                          PARTY_DATA[profileData.political_party].border
                        }`,
                      }}
                      className={cn(
                        'h-[32px] w-[32px] rounded-full border object-cover object-top'
                      )}
                    />
                  </picture>
                  <span className="min-w-[39px] text-start font-bold">
                    {profileData.name}
                  </span>
                  <span className="block w-[98px] overflow-hidden text-ellipsis text-ellipsis whitespace-nowrap text-start">
                    {summaryRegion(regionData)}
                  </span>
                  {profileData.political_party === '무소속' ? (
                    <span>무소속</span>
                  ) : (
                    <Image
                      src={PARTY_DATA[profileData.political_party].logo}
                      width={62}
                      height={18}
                      alt="당로고"
                    />
                  )}
                </div>
                <span className="absolute right-10 font-extrabold">
                  {percentagePromiseCount(
                    profileData.completed_promise_count,
                    profileData.total_promise_count
                  )}
                  %
                </span>
              </article>
            </AccordionButton>
            <AccordionPanel className="pt-4" itemName={itemName}>
              <MPBoxDetail mpData={mpData} />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

function summaryRegion(regionData: {
  region: string;
  district: string | null;
  section: string | null;
}) {
  const fullRegion = `${regionData.region} ${
    regionData.district ? regionData.district : ''
  }${regionData.section ? regionData.section : ''}`;

  return fullRegion;
}
