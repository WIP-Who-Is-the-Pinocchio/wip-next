import Image from 'next/image';

import { CONTAINER_STYLE } from '@/constants';
import { cn } from '@/utils';

interface HeaderProps {
  needDescription?: boolean;
}

export const Header = ({ needDescription = true }: HeaderProps) => {
  return (
    <section className={cn(CONTAINER_STYLE, 'gap-3')}>
      <Image
        src="/icons/headerLogo.svg"
        width={72}
        height={23}
        alt="headerLogo"
      />
      {needDescription && (
        <>
          <div className="relative">
            <div className="shadow-box flex w-[226px] flex-col items-start gap-[10px] rounded-[4px] bg-white p-[10px]">
              <span className="font-bold leading-5">
                제22대 총선에 재출마하는 21대 국회의원의 공약 이행률 순위와 결과
              </span>
              <span className="text-[12px]">출처: 한국매니페스토실천본부</span>
            </div>
          </div>
          <div
            className={cn(
              CONTAINER_STYLE,
              'text-deepGray gap-[6px] text-[12px]'
            )}
          >
            <span>최종 업데이트 일자: 2024.03.03</span>
            <span>이메일: wipinocchio@gmail.com</span>
          </div>
        </>
      )}
    </section>
  );
};
