'use client';

import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { MPDataType } from '../../../api/api';

interface RankProps {
  data: MPDataType[];
}

// const RANDOM_IMAGE = 'https://picsum.photos/102';

const twProfile = 'flex flex-col items-center';

export default function Rank(props: RankProps) {
  // console.log(props.data);
  // console.log(props.data[0]);
  // console.log(props.data[1]);

  return (
    <section className="flex flex-col items-center">
      <div className="mb-[26px]">{'(서울) 공약 이행률 가장 낮은 3인'}</div>
      <article className="flex items-end gap-[40px]">
        <div className={twMerge(twProfile)}>
          <span className="mb-[6px] text-[14px] text-[#8C8C8C]">
            {props.data[2].roundedRatio}
          </span>
          <picture>
            <img
              src={props.data[2].base_info.profile_url}
              alt="국회의원 프로필사진"
              className={`h-[74px] w-[74px] rounded-full border-[1px] border-[#F1F1F1] object-cover object-top`}
            />
          </picture>
          <span className="mb-[8px] mt-[14px] text-[16px] font-semibold leading-[100%] text-black">
            {props.data[2].base_info.name}
          </span>
          <span className="text-[14px] font-semibold leading-[100%] text-[#8C8C8C]">
            {props.data[2].constituency[0].district}
            {props.data[2].constituency[0].section}
          </span>
        </div>
        <div className={twMerge(twProfile)}>
          <span className="mb-[8px text-[14px] text-[#8C8C8C]">
            {props.data[0].roundedRatio}
          </span>
          <picture>
            <img
              src={props.data[0].base_info.profile_url}
              alt="국회의원 프로필사진"
              className={`h-[104px] w-[104px] rounded-full border-[1px] border-[#F1F1F1] object-cover object-top`}
            />
          </picture>
          <span className="mb-[8px] mt-[14px] text-[16px] font-semibold leading-[100%] text-black">
            {props.data[0].base_info.name}
          </span>
          <span className="text-[14px] font-semibold leading-[100%] text-[#8C8C8C]">
            {props.data[0].constituency[0].district}
            {props.data[0].constituency[0].section}
          </span>
        </div>
        <div className={twMerge(twProfile)}>
          <span className="mb-[6px] text-[14px] text-[#8C8C8C]">
            {props.data[1].roundedRatio}
          </span>
          <picture>
            <img
              src={props.data[1].base_info.profile_url}
              alt="국회의원 프로필사진"
              className={`h-[74px] w-[74px] rounded-full border-[1px] border-[#F1F1F1] object-cover object-top`}
            />
          </picture>
          <span className="mb-[8px] mt-[14px] text-[16px] font-semibold leading-[100%] text-black">
            {props.data[1].base_info.name}
          </span>
          <span className="text-[14px] font-semibold leading-[100%] text-[#8C8C8C]">
            {props.data[1].constituency[0].district}
            {props.data[1].constituency[0].section}
          </span>
        </div>
      </article>
    </section>
  );
}
