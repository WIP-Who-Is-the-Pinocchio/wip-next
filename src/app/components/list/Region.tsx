'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { circuitData, regionData, RegionDataType } from '@/api/regionData';

const CURRENT_REGION = 'font-bold';
const REGION = 'font-medium bg-[#FAFAFA] border-r border-[#F1F1F1]';

export const Region = () => {
  const [currentCircuit, setCurrentCircuit] = useState('서울');

  const getRegionArray = (regionData: RegionDataType[], currentKey: string) => {
    const region = regionData.find((region) =>
      region.hasOwnProperty(currentKey)
    );
    return region ? region[currentKey] : [];
  };

  return (
    <section className="flex w-full gap-2.5 border-t border-[#F1F1F1] text-[16px] text-[#0E0E0E]">
      <article className="w-auto flex-shrink-0">
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
      <article className="flex-grow">
        {getRegionArray(regionData, currentCircuit).map((region) => (
          <>
            {region ? (
              <div className="border-b border-[#F1F1F1] py-4" key={region}>
                {region}
              </div>
            ) : (
              <div />
            )}
          </>
        ))}
      </article>
    </section>
  );
};
