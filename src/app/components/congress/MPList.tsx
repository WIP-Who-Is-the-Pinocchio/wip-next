'use client';

import { percentagePromiseCount } from '@/app/utils';
import { MPBox } from './MPBox';
import { MPDataType } from '@/api/api';

interface MPListProps {
  mpDataList: MPDataType[];
  isSearch: boolean;
}

export const MPList = ({ mpDataList, isSearch }: MPListProps) => {
  // originalIndex 추가 배열
  const addIndexList = mpDataList.map((data, index) => ({
    ...data,
    originalIndex: index,
  }));

  return (
    <section className="mb-[120px] flex w-full flex-col gap-16">
      {isSearch ? (
        <div className="flex flex-col gap-6">
          {mpDataList.map((mpData, index) => (
            <MPBox
              key={`${mpData.base_info.profile_url}-${index}`}
              mpData={mpData}
              ranking={index}
            />
          ))}
        </div>
      ) : (
        <>
          <article className="flx flex-col">
            <div className="mb-8 text-[18px] font-semibold">
              공약 이행률 80% 이상
            </div>
            <div className="flex flex-col gap-6">
              {addIndexList
                .filter(
                  (mpData) =>
                    percentagePromiseCount(
                      mpData.base_info.completed_promise_count,
                      mpData.base_info.total_promise_count
                    ) >= 80
                )
                .map((data) => (
                  <MPBox
                    key={`${data.base_info.name}-${data.originalIndex}`}
                    mpData={data}
                    ranking={data.originalIndex}
                  />
                ))}
            </div>
          </article>
          <article className="flx flex-col gap-8">
            <div className="mb-8 text-[18px] font-semibold">
              공약 이행률 60%이상 80%미만
            </div>
            <div className="flex flex-col gap-6">
              {addIndexList
                .filter(
                  (mpData) =>
                    percentagePromiseCount(
                      mpData.base_info.completed_promise_count,
                      mpData.base_info.total_promise_count
                    ) < 80 &&
                    percentagePromiseCount(
                      mpData.base_info.completed_promise_count,
                      mpData.base_info.total_promise_count
                    ) >= 60
                )
                .map((data) => (
                  <MPBox
                    key={`${data.base_info.name}-${data.originalIndex}`}
                    mpData={data}
                    ranking={data.originalIndex}
                  />
                ))}
            </div>
          </article>
          <article className="flx flex-col gap-8">
            <div className="mb-8 text-[18px] font-semibold">
              공약 이행률 30%이상 60%미만
            </div>
            <div className="flex flex-col gap-6">
              {addIndexList
                .filter(
                  (mpData) =>
                    percentagePromiseCount(
                      mpData.base_info.completed_promise_count,
                      mpData.base_info.total_promise_count
                    ) < 60 &&
                    percentagePromiseCount(
                      mpData.base_info.completed_promise_count,
                      mpData.base_info.total_promise_count
                    ) >= 30
                )
                .map((data) => (
                  <MPBox
                    key={`${data.base_info.name}-${data.originalIndex}`}
                    mpData={data}
                    ranking={data.originalIndex}
                  />
                ))}
            </div>
          </article>
          <article className="flx flex-col gap-8">
            <div className="mb-8 text-[18px] font-semibold">
              공약 이행률 30%미만 💢
            </div>
            <div className="flex flex-col gap-6">
              {addIndexList
                .filter(
                  (data) =>
                    percentagePromiseCount(
                      data.base_info.completed_promise_count,
                      data.base_info.total_promise_count
                    ) < 30
                )
                .map((data) => (
                  <MPBox
                    key={`${data.base_info.name}-${data.originalIndex}`}
                    mpData={data}
                    ranking={data.originalIndex}
                  />
                ))}
            </div>
          </article>
        </>
      )}
    </section>
  );
};
