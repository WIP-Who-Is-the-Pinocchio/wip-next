'use client';

import SEO from '@/app/components/SEO';
import { useState } from 'react';

interface paramsType {
param: string;
}

const RegionPage = ({params}:{params: paramsType} ) => {
  const param = decodeURIComponent(params.param).split('_');
  const [constituency, setConstituency] = useState({
    region: param[0],
    district: param[1],
  });

  return (
    <>
      <SEO title={`${constituency.region} 지역 국회의원 공약이행률 순위`} />
      <div>
        <h2>Region: {constituency.region}, District: {constituency.district}</h2>
      </div>
    </>
  );
};

export default RegionPage;
