'use client';

import { useEffect, useState } from 'react';

import { circuitData, regionData, RegionDataType } from '@/api/regionData';
import { MPDataType } from '@/api/api';
import MPListContainer from '../congress/MPListContainer';
import { cn } from '@/utils';

const CURRENT_REGION = 'font-bold';
const REGION = 'font-medium bg-[#FAFAFA] border-r border-[#F1F1F1]';

interface RegionComponentProps {
  regionStep: number;
  nextRegionStep: () => void;
  mpData: MPDataType[];
}

export const RegionComponent = ({
  regionStep,
  nextRegionStep,
  mpData,
}: RegionComponentProps) => {
  const [currentCircuit, setCurrentCircuit] = useState('서울');
  const [currentDistrict, setCurrentDistrict] = useState<string | null>(null);
  const [filteredMPData, setFilteredMPData] = useState(mpData);

  const getRegionArray = (regionData: RegionDataType[], currentKey: string) => {
    const region = regionData.find((region) =>
      region.hasOwnProperty(currentKey)
    );
    return region ? region[currentKey] : [];
  };

  const handleNextClick = (circuit: string) => {
    setCurrentCircuit(circuit);
  };

  const handleRegionClick = (currentRegion: string | null) => {
    if (currentRegion && currentRegion.includes('전체')) {
      nextRegionStep();
    }
    setCurrentDistrict(currentRegion);
    nextRegionStep();
  };

  useEffect(() => {
    const filteredData = mpData.filter((data) => {
      if (currentDistrict?.includes('전체')) {
        return data.constituency[0].region.includes(currentCircuit);
      }

      if (currentDistrict) {
        return (
          data.constituency[0].region.includes(currentCircuit) &&
          data.constituency[0].district?.includes(currentDistrict)
        );
      }

      return data.constituency[0].region.includes(currentCircuit);
    });

    setFilteredMPData(filteredData);
  }, [currentCircuit, currentDistrict, mpData]);

  return (
    <>
      {regionStep === 0 && (
        <section className="flex w-full gap-2.5 text-[16px] text-[#0E0E0E]">
          <article className="w-auto flex-shrink-0 cursor-pointer">
            {circuitData.map((circuit) => (
              <div
                className={cn(
                  currentCircuit === circuit ? CURRENT_REGION : REGION,
                  'border-b border-[#F1F1F1] px-6 py-4'
                )}
                key={circuit}
                onClick={() => {
                  handleNextClick(circuit);
                }}
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
                    onClick={(e) => {
                      e.stopPropagation();
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
      )}
      {regionStep === 1 && <MPListContainer mpData={filteredMPData} />}
    </>
  );
};
