'use client';

import { useRouter } from 'next/navigation';
import { partyData } from '@/api/partyData';

const Party = () => {
  const router = useRouter();

  const handleRegionClick = (currentParty: string | null) => {
    return router.push(`/party/${currentParty}`);
  };

  return (
    <section className="flex min-h-[400px] w-full gap-2.5 border-t border-[#F1F1F1] text-[16px] text-[#0E0E0E]">
      <article className="flex-grow">
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
      </article>
    </section>
  );
};

export default Party;
