'use client';

import SEO from '@/app/components/SEO';
import MPListContainer from '@/app/components/congress/MPListContainer';
import { DUMMY_DATA, MPDataType } from '@/api/api';
import Tabs from '@/app/components/list/Tabs';
import MainLayout from '@/app/components/common/MainLayout';

interface paramsType {
  param: string;
}

const RegionPage = ({ params }: { params: paramsType }) => {
  const param = decodeURIComponent(params.param).split('_');
  const constituency = {
    region: param[0],
    district: param[1],
  };

  const sortRegionMPData = (mpData: MPDataType[]) => {
    return mpData.filter((data: MPDataType) => {
      if (data.constituency[0].region !== constituency.region) {
        return false;
      }

      if (constituency.district) {
        return data.constituency.some((obj) =>
          obj.district?.includes(constituency.district)
        );
      }

      return true;
    });
  };

  return (
    <>
      <SEO title={`${constituency.region} 지역 국회의원 공약이행률 순위`} />
      <MainLayout>
        <Tabs selectedTab={'REGION'} />
        <MPListContainer mpData={sortRegionMPData(DUMMY_DATA)} />
      </MainLayout>
    </>
  );
};

export default RegionPage;
