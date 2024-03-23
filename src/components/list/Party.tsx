'use client';

import { useEffect, useState } from 'react';

import { partyData } from '@/api/partyData';
import { MPDataType } from '@/api/api';
import MPListContainer from '../congress/MPListContainer';

interface PartyComponentProps {
  partyStep: number;
  nextPartyStep: () => void;
  mpData: MPDataType[];
}

export const PartyComponent = ({
  partyStep,
  nextPartyStep,
  mpData,
}: PartyComponentProps) => {
  const [currentParty, setCurrentData] = useState<string | null>(null);
  const [filteredMPData, setFilteredMPData] = useState(mpData);

  const handleRegionClick = (currentParty: string | null) => {
    setCurrentData(currentParty);
    nextPartyStep();
  };

  useEffect(() => {
    const filteredData = mpData.filter((data) => {
      if (currentParty) {
        return data.base_info.political_party.includes(currentParty);
      }

      return true;
    });

    setFilteredMPData(filteredData);
  }, [currentParty, mpData]);

  return (
    <>
      {partyStep === 0 && (
        <section className="mb-[120px] flex w-full flex-col gap-16">
          <div className="mb-[120px] flex flex-col gap-6">
            {partyData.map((party) => (
              <div
                key={party}
                className="cursor-pointer border-b border-[#F1F1F1] py-4 hover:font-bold"
                onClick={() => {
                  handleRegionClick(party);
                }}
              >
                {party}
              </div>
            ))}
          </div>
        </section>
      )}
      {partyStep === 1 && <MPListContainer mpData={filteredMPData} />}
    </>
  );
};
