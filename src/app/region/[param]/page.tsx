'use client';

import { usePathname } from 'next/navigation';
import SEO from '@/app/components/SEO';

const RegionPage = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);
  console.log(decodedPathname.split('/')[2]);
  const region = decodedPathname.split('/')[2];

  return (
    <>
      <SEO title={`${region} 지역 국회의원 공약이행률 순위`} />
      <div>
        <h2>Region: {region}</h2>
      </div>
    </>
  );
};

export default RegionPage;
