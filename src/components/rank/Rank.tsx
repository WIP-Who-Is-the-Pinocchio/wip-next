'use client';

import { MPDataType } from '@/api/api';
import { cn } from '@/utils';

interface RankProps {
  data: MPDataType[];
}

const twProfile = 'flex flex-col items-center min-w-[80px]';
const NAME =
  'mb-[6px] mt-[8px] text-[16px] text-black font-normal leading-[100%]';
const FULFILLMENT = 'text-[14px] text-black font-normal';

export default function Rank(props: RankProps) {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="mb-[26px] text-[14px] font-bold">
        {'전국 공약 이행률 가장 높은 3인'}
      </div>
      <article className="flex w-full items-end justify-center gap-2 rounded-[4px] bg-[#EFEFEF] p-3">
        {props.data[2] && (
          <div className={cn(twProfile)}>
            <picture>
              <img
                src={props.data[2].base_info.profile_url}
                alt="국회의원 프로필사진"
                className={`h-[60px] w-[60px] rounded-full object-cover object-top `}
              />
            </picture>
            <span className={NAME}>{props.data[2].base_info.name}</span>
            <span className={FULFILLMENT}>{props.data[2].roundedRatio}%</span>
          </div>
        )}
        {props.data[0] && (
          <div className={cn(twProfile)}>
            <picture>
              <img
                src={props.data[0].base_info.profile_url}
                alt="국회의원 프로필사진"
                className={`h-[76px] w-[76px] rounded-full object-cover object-top`}
              />
            </picture>
            <span className="mb-[6px] mt-[8px] text-[18px] font-bold leading-[100%] text-black">
              {props.data[0].base_info.name}
            </span>
            <span className="text-[16px] font-bold text-black">
              {props.data[0].roundedRatio}%
            </span>
          </div>
        )}
        {props.data[1] && (
          <div className={cn(twProfile)}>
            <picture>
              <img
                src={props.data[1].base_info.profile_url}
                alt="국회의원 프로필사진"
                className={`h-[60px] w-[60px] rounded-full object-cover object-top`}
              />
            </picture>
            <span className={NAME}>{props.data[1].base_info.name}</span>
            <span className={FULFILLMENT}>{props.data[1].roundedRatio}%</span>
          </div>
        )}
      </article>
    </section>
  );
}
