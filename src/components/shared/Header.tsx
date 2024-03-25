import Image from 'next/image';

import { CONTAINER_STYLE } from '@/constants';
import { cn } from '@/utils';

interface HeaderProps {
  needDescription?: boolean;
}

export const Header = ({ needDescription = true }: HeaderProps) => {
  return (
    <section className={cn(CONTAINER_STYLE, 'gap-3 p-5')}>
      <Image
        src="/icons/headerLogo.svg"
        width={72}
        height={23}
        alt="headerLogo"
      />
      {needDescription && (
        <>
          <div className="relative">
            <div className="flex w-[226px] flex-col items-start gap-[10px] rounded-[4px] bg-white p-[10px] text-[14px] shadow-box">
              <span className="break-keep font-bold leading-5">
                제22대 총선에 재출마하는 21대 국회의원의 공약 이행률 순위와 결과
              </span>
              <span className="text-[12px]">출처: 한국매니페스토실천본부</span>
            </div>
          </div>
          <div
            className={cn(
              CONTAINER_STYLE,
              'gap-[6px] text-[12px] text-deepGray'
            )}
          >
            <span>최종 업데이트 일자: 2022.12.12</span>
            <span>이메일: wipinocchio@gmail.com</span>
          </div>
        </>
      )}
    </section>
  );
};
