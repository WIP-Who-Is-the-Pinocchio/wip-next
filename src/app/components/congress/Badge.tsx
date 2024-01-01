import type { PropsWithChildren } from 'react';

interface BadgeProps extends PropsWithChildren {}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="rounded-[12px] border-[1px] border-solid border-[#E9D5FF] bg-[#FAF5FF] px-[12px] py-[4px] text-[14px] font-medium leading-[100%] text-[#9333EA]">
      {children}
    </div>
  );
}
