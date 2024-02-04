'use client';

import SEO from '@/app/components/SEO';
import { useState } from 'react';
import MPListContainer from '@/app/components/congress/MPListContainer';
import { DUMMY_DATA, MPDataType } from '@/api/api';
import Layout from '@/app/components/common/Layout';

interface paramsType {
param: string;
}

const RegionPage = ({params}:{params: paramsType} ) => {
  const param = decodeURIComponent(params.param).split('_');
  const [constituency, setConstituency] = useState({
    region: param[0],
    district: param[1],
  });

  const sortRegionMPData = (mpData:MPDataType[]) => {
    return mpData.filter((data: MPDataType)=> {
      if (data.constituency[0].region !== constituency.region) {
        return false;
      }

      if (constituency.district) {
        return data.constituency.some(obj => obj.district ===constituency.district)
      }

      return true
    })
  }

  return (
    <>
      <SEO title={`${constituency.region} 지역 국회의원 공약이행률 순위`} />
      
      <section className="flex flex-col items-center pt-[30px]">
      <div className="px-[20px] text-[16px] font-bold leading-[150%] text-black">
          WIP
        </div>
        <article className="mb-[40px] mt-[10px] px-[20px]">
          <p className="text-[14px] font-normal not-italic leading-[150%] text-black">
            누가 피노키오인가?
          </p>
        </article>
      <article
          style={{ boxShadow: '0px 0px 16px 0px #E6E6E6' }}
          className={
            'flex w-full flex-col items-center gap-[20px] px-[20px] pt-[24px] mt-[11px] rounded-t-[36px]'
          }
        >
      <MPListContainer mpData={sortRegionMPData(DUMMY_DATA)} />
      </article>
      </section>
    </>
  );
};

export default RegionPage;
