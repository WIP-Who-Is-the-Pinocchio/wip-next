"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const step1 = [
  "서울",
  "인천",
  "부산",
  "대전",
  "대구",
  "울산",
  "광주",
  "제주",
  "세종",
  "경기",
  "강원",
  "충북",
  "충남",
  "경북",
  "경남",
  "전북",
  "전남",
];

const step2 = [
  "전체",
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

const step3 = ["강남구 전체", "갑", "을", "병"];

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
    <div className="pt-[58px] pb-[91px] px-[22px] -mx-[20px] bg-[#F8F8F8]">
      <ul
        className="list-none shadow-md py-[4px] bg-white max-h-[464px] overflow-y-scroll"
        onClick={handleSelectRegion}
      >
        {currentStep.map((d) => (
          <li
            key={d}
            className={twMerge(
              "flex items-center justify-center text-[#070707] text-[14px] font-medium leading-[22px] p-[12px]",
              "hover:bg-stone-100"
            )}
          >
            {d}
          </li>
        ))}
      </ul>
      <div className="fixed left-0 bottom-0 w-full rounded-tl-[12px] rounded-tr-[12px] bg-[#373737] pt-[24px] pb-[48px] flex items-center justify-center text-white text-[16px] not-italic font-semibold leading-[100%]">
        선택
      </div>
    </div>
  );
}
