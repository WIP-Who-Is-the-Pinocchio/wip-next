'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import SEO from '@/app/components/SEO';

const PartyPage = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);
  const party = decodedPathname.split('/')[2];

  return (
    <>
      <SEO title={`${party} 정당별 국회의원 공약이행률 순위`} />
      <div>
        <h2>party: {party}</h2>
      </div>
    </>
  );
};

export default PartyPage;
