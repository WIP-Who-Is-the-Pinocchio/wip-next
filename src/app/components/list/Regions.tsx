'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const step1 = [
  '서울',
  '인천',
  '부산',
  '대전',
  '대구',
  '울산',
  '광주',
  '제주',
  '세종',
  '경기',
  '강원',
  '충북',
  '충남',
  '경북',
  '경남',
  '전북',
  '전남',
];

const step2 = [
  '전체',
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '도봉구',
  '동대문구',
  '동작구',
  '마포구',
  '서대문구',
  '서초구',
  '성동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];

const step3 = ['강남구 전체', '갑', '을', '병'];

type Level = number;

export default function Regions() {
  const [currentLevel, setCurrentLevel] = useState<Level>(0);

  const [currentStep, setCurrentStep] = useState<string[]>(step1);

  useEffect(() => {
    switch (currentLevel) {
      case 0:
        setCurrentStep(step1);
        return;
      case 1:
        setCurrentStep(step2);
        return;
      case 2:
        setCurrentStep(step3);
        return;
      default:
    }
  }, [currentLevel]);

  const handleSelectRegion = () => {
    if (currentLevel < 2) {
      setCurrentLevel(currentLevel + 1);
      return;
    }
  };

  return (
    <div className="-mx-[20px] w-full bg-[#F8F8F8] px-[22px] pb-[91px] pt-[58px]">
      <ul
        className="max-h-[464px] list-none overflow-y-scroll bg-white py-[4px] shadow-md"
        onClick={handleSelectRegion}
      >
        {currentStep.map((d) => (
          <li
            key={d}
            className={twMerge(
              'flex items-center justify-center p-[12px] text-[14px] font-medium leading-[22px] text-[#070707]',
              'hover:bg-stone-100'
            )}
          >
            {d}
          </li>
        ))}
      </ul>
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-center rounded-tl-[12px] rounded-tr-[12px] bg-[#373737] pb-[48px] pt-[24px] text-[16px] font-semibold not-italic leading-[100%] text-white">
        선택
      </div>
    </div>
  );
}
