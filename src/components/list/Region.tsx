'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { circuitData, regionData, RegionDataType } from '@/api/regionData';

const CURRENT_REGION = 'font-bold';
const REGION = 'font-medium bg-[#FAFAFA] border-r border-[#F1F1F1]';

export const Region = () => {
  const router = useRouter();
  const [currentCircuit, setCurrentCircuit] = useState('서울');

  const getRegionArray = (regionData: RegionDataType[], currentKey: string) => {
    const region = regionData.find((region) =>
      region.hasOwnProperty(currentKey)
    );
    return region ? region[currentKey] : [];
  };

  const handleRegionClick = (currentRegion: string | null) => {
    if (currentRegion && currentRegion.includes('전체')) {
      return router.push(`/region/${currentCircuit}`);
    }

    return router.push(`/region/${currentCircuit}_${currentRegion}`);
  };

  return (
    <section className="flex w-full gap-2.5 border-t border-[#F1F1F1] text-[16px] text-[#0E0E0E]">
      <article className="w-auto flex-shrink-0 cursor-pointer">
        {circuitData.map((circuit) => (
          <div
            className={twMerge(
              currentCircuit === circuit ? CURRENT_REGION : REGION,
              'border-b border-[#F1F1F1] px-6 py-4'
            )}
            key={circuit}
            onClick={() => setCurrentCircuit(circuit)}
          >
            {circuit}
          </div>
        ))}
      </article>
      <article className="flex-grow cursor-pointer">
        {[
          `${currentCircuit} 전체`,
          ...getRegionArray(regionData, currentCircuit),
        ].map((region) => (
          <div key={region}>
            {region ? (
              <div
                key={region}
                className="border-b border-[#F1F1F1] py-4"
                onClick={() => {
                  handleRegionClick(region);
                }}
              >
                {region}
              </div>
            ) : (
              <div />
            )}
          </div>
        ))}
      </article>
    </section>
  );
};
