import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Badge from './Badge';

interface CardProps {}

const RANDOM_IMAGE = 'https://picsum.photos/102';

const twLabel = 'text-[14px] font-medium leading-[100%]';

export default function Card({}: CardProps) {
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
          <span className="absolute left-0 top-0 flex h-[27.45098%] w-[27.45098%] items-center justify-center rounded-br-[12px] rounded-tl-[12px] bg-[#F3E8FF] text-[14px] font-semibold leading-[100%] text-[#9333EA]">
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
                <span className="font-bold text-[#9333EA]">80%</span>
                <span>(4/5개)</span>
              </p>
            </li>
            <li className="flex gap-[10px]">
              <span className={twMerge(twLabel, 'text-[#BDBDBD]')}>소속</span>
              <p className={twMerge(twLabel, 'text-[#636363]')}>더불어민주당</p>
            </li>
          </ul>
        </div>
      </div>
      <button className="h-[28px] w-[33px] cursor-pointer rounded-br-[12px] rounded-tl-[12px] border-[#7E22CE] bg-[#9333EA] text-white">
        +
      </button>
    </li>
  );
}
