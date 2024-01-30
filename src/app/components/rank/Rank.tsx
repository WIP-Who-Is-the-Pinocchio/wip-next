'use client';

import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface RankProps {}

const RANDOM_IMAGE = 'https://picsum.photos/102';

const twProfile = 'flex flex-col items-center';

export default function Rank({}: RankProps) {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-[26px]">{'(서울) 공약 이행률 가장 낮은 3인'}</div>
      <article className="flex items-end gap-[40px]">
        <div className={twMerge(twProfile)}>
          <span className="mb-[6px] text-[14px] text-[#8C8C8C]">2%</span>
          <Image
            className="rounded-full border-[1px] border-solid border-[#F1F1F1]"
            src={RANDOM_IMAGE}
            alt="국회의원 프로필 사진"
            width={74}
            height={74}
          />
          <span className="mb-[8px] mt-[14px] text-[16px] font-semibold leading-[100%] text-black">
            김OO
          </span>
          <span className="text-[14px] font-semibold leading-[100%] text-[#8C8C8C]">
            마포구을
          </span>
        </div>
        <div className={twMerge(twProfile)}>
          <span className="mb-[8px text-[14px] text-[#8C8C8C]">2%</span>
          <Image
            className="rounded-full border-[1px] border-solid border-[#F1F1F1]"
            src={RANDOM_IMAGE}
            alt="국회의원 프로필 사진"
            width={104}
            height={104}
          />
          <span className="mb-[8px] mt-[14px] text-[16px] font-semibold leading-[100%] text-black">
            김OO
          </span>
          <span className="text-[14px] font-semibold leading-[100%] text-[#8C8C8C]">
            마포구을
          </span>
        </div>
        <div className={twMerge(twProfile)}>
          <span className="mb-[6px] text-[14px] text-[#8C8C8C]">2%</span>
          <Image
            className="rounded-full border-[1px] border-solid border-[#F1F1F1]"
            src={RANDOM_IMAGE}
            alt="국회의원 프로필 사진"
            width={74}
            height={74}
          />
          <span className="mb-[8px] mt-[14px] text-[16px] font-semibold leading-[100%] text-black">
            김OO
          </span>
          <span className="text-[14px] font-semibold leading-[100%] text-[#8C8C8C]">
            마포구을
          </span>
        </div>
      </article>
    </section>
  );
}
