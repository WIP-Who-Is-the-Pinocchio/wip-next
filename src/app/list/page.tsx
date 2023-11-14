"use client";

import Image from "next/image";
import type { ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import Tabs, { Tab } from "../components/list/Tabs";
import Regions from "../components/list/Regions";
import { useState } from "react";

const tabs: Tab[] = ["LIST", "REGION", "PARTY"];

export default function List() {
  const [selectedTab, setSelectedTab] = useState<Tab>("REGION");
  const [search, setSearch] = useState("");

  const handleSelectTab = (tab: Tab) => () => {
    setSelectedTab(tab);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    console.log(`검색어: ${search}`);
  };

  return (
    <section className="flex flex-col gap-[26px] py-[30px] px-[20px]">
      <div className="text-[16px] font-semibold leading-[150%] text-black pl-[1px]">
        WIP
      </div>
      <article>
        <div className="flex flex-col gap-[26px]">
          <p className="text-black text-[24px] font-normal not-italic leading-[150%]">
            누가 피노키오인가?
          </p>
          <div
            className="relative py-[12px] border-b-[2px] border-b-solid border-b-[#f1f1f1]"
            onClick={handleSearch}
          >
            <input
              className={twMerge(
                "w-full text-black text-[18px] leading-[100%] outline-none pr-[34px]",
                "placeholder:text-[#C1C1C1] placeholder:text-[18px] placeholder:not-italic placeholder:font-normal placeholder:leading-[100%]"
              )}
              value={search}
              type="text"
              placeholder="이름으로 검색하기"
              onChange={handleChange}
            />
            <Image
              className="absolute top-[12px] right-0 hover:cursor-pointer"
              src="/search_icon.svg"
              width={18}
              height={18}
              alt="검색"
            />
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-[12px] mt-[11px]">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={handleSelectTab}
        />
        <Regions />
      </article>
    </section>
  );
}
