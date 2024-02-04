'use client';

import { useRouter } from 'next/navigation';
import { partyData } from '@/api/partyData';

const Party = () => {
  const router = useRouter();

  const handleRegionClick = (currentParty: string | null) => {
    return router.push(`/party/${currentParty}`);
  };

  return (
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
  );
};

export default Party;
