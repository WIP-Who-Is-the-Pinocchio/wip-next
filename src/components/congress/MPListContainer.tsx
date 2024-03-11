'use client';

import { useState, ChangeEventHandler } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { MPDataType } from '@/api/api';
import { MPList } from './MPList';

interface MPListContainerPropsType {
  mpData: MPDataType[];
}

export default function MPListContainer({ mpData }: MPListContainerPropsType) {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [newMPData, setNewMPData] = useState<MPDataType[]>(mpData);

  const sortData = newMPData.sort((a, b) => {
    const ratioA =
      a.base_info.total_promise_count > 0
        ? a.base_info.completed_promise_count / a.base_info.total_promise_count
        : 0;
    const ratioB =
      b.base_info.total_promise_count > 0
        ? b.base_info.completed_promise_count / b.base_info.total_promise_count
        : 0;
    return ratioB - ratioA; // 내림차순 정렬
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setNewMPData(
      mpData.filter((data: MPDataType) => data.base_info.name.includes(search))
    );
    if (search) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  return (
    <>
      <div className="border-b-solid relative mb-[22px] mt-[4px] w-full border-b-[2px] border-b-[#f1f1f1] py-[12px]">
        <input
          className={twMerge(
            'w-full pr-[34px] text-[18px] leading-[100%] text-black outline-none',
            'placeholder:text-[18px] placeholder:font-normal placeholder:not-italic placeholder:leading-[100%] placeholder:text-[#C1C1C1]'
          )}
          value={search}
          type="text"
          placeholder="이름으로 검색하기"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (e.nativeEvent.isComposing) {
                return;
              }
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        <Image
          className="absolute right-0 top-[12px] hover:cursor-pointer"
          src="/icons/searchIcon.svg"
          width={18}
          height={18}
          alt="검색 버튼 아이콘"
          onClick={handleSearch}
        />
      </div>
      <MPList mpDataList={sortData} removeSectionTitle={isSearch} />
    </>
  );
}
