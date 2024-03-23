'use client';

import { useState } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MPDataType } from '@/api/api';
import { PARTY_DATA } from '@/constants';
import { cn, percentagePromiseCount } from '@/utils';
import 'swiper/css';
import './swiperCustom.css';

interface RankProps {
  rankData: MPDataType[];
}

SwiperCore.use([Navigation, Pagination]);

const twProfile = 'relative flex flex-col items-center min-w-[80px]';
const NAME =
  'mb-[6px] mt-[8px] text-[16px] text-black font-normal leading-[100%]';
const FULFILLMENT = 'text-[14px] text-black font-normal';

export default function Rank({ rankData }: RankProps) {
  const needPagination = rankData.length > 3;
  const defaultIndex = needPagination ? 0 : 1;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <section className="flex w-full flex-col items-center">
      <div className="mb-[26px] text-[14px] font-bold">
        {'전국 공약 이행률 가장 낮은 3인'}
      </div>
      <article className="flex w-full items-center rounded-[4px] bg-[#EFEFEF] px-4 py-3">
        {needPagination && <LeftArrow currentIndex={activeIndex} />}
        <Swiper
          className="flex w-[256px] max-w-[256px] items-end"
          spaceBetween={18}
          slidesPerView={3}
          centeredSlides={needPagination}
          navigation={{ nextEl: '.next_click', prevEl: '.prev_click' }}
          onSwiper={(swiper) => {
            swiper.on('slideChange', () => {
              setActiveIndex(swiper.activeIndex);
            });
          }}
        >
          {rankData.map((data, index) => (
            <SwiperSlide key={data.base_info.profile_url}>
              <div className={twProfile}>
                <picture>
                  <img
                    src={data.base_info.profile_url}
                    alt={`국회의원 프로필사진 ${data.base_info.name}`}
                    className={cn(
                      'rounded-full object-cover object-top',
                      index === activeIndex
                        ? 'h-[76px] w-[76px] '
                        : 'h-[60px] w-[60px] '
                    )}
                    style={{
                      border: `4px solid ${
                        PARTY_DATA[data.base_info.political_party].border
                      }`,
                    }}
                  />
                </picture>
                <span
                  className={cn(
                    NAME,
                    index === activeIndex && 'text-[18px] font-bold'
                  )}
                >
                  {data.base_info.name}
                </span>
                <span
                  className={cn(
                    FULFILLMENT,
                    index === activeIndex && 'text-[16px] font-bold'
                  )}
                >
                  {percentagePromiseCount(
                    data.base_info.completed_promise_count,
                    data.base_info.total_promise_count
                  )}
                  %
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {needPagination && (
          <RightArrow
            currentIndex={activeIndex}
            dataLength={rankData.length - 1}
          />
        )}
      </article>
    </section>
  );
}

function LeftArrow({ currentIndex }: { currentIndex: number }) {
  return (
    <svg
      width="10"
      height="20"
      className="prev_click cursor-pointer"
      viewBox="0 0 13 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1L2 11L12 21"
        stroke={currentIndex === 0 ? '#D0D0D0' : '#0B0B0B'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RightArrow({
  currentIndex,
  dataLength,
}: {
  currentIndex: number;
  dataLength: number;
}) {
  return (
    <svg
      width="10"
      height="20"
      className="next_click cursor-pointer"
      viewBox="0 0 13 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L11 11L1 21"
        stroke={currentIndex === dataLength ? '#D0D0D0' : '#0B0B0B'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
