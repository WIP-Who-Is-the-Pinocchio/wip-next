'use client';

import { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { MPBoxDetail } from '../congress/MPBoxDetail';
import { percentagePromiseCount } from '@/utils';
import { MPDataType } from '@/api/api';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '../shared';

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
    <Accordion className="bg-gray50 rounded-basic">
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
              className="text-[14px]"
            >
              <article className="flex w-full items-center">
                <span>{ranking + 1}</span>
                <div className="flex items-center gap-2.5">
                  <Image
                    src={profileData.profile_url}
                    width={32}
                    height={32}
                    alt="국회의원 프로필 사진"
                  />
                  <span>{profileData.name}</span>
                  <span className="">
                    {`${regionData.region} ${
                      regionData.district ? regionData.district : ''
                    }${regionData.section ? regionData.section : ''}`}
                  </span>
                  <span>{profileData.political_party}</span>
                </div>
                <span className="">
                  {percentagePromiseCount(
                    profileData.completed_promise_count,
                    profileData.total_promise_count
                  )}
                  %
                </span>
              </article>
            </AccordionButton>
            <AccordionPanel className="" itemName={itemName}>
              <MPBoxDetail mpData={mpData} />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
