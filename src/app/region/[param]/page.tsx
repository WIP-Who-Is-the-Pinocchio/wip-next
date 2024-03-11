'use client';

import SEO from '@/components/SEO';
import { MPList } from '@/components/congress/MPList';
import { DUMMY_DATA, MPDataType } from '@/api/api';
import Tabs from '@/components/list/Tabs';
import MainLayout from '@/components/common/MainLayout';

interface paramsType {
  param: string;
}

const RegionPage = ({ params }: { params: paramsType }) => {
  const param = decodeURIComponent(params.param).split('_');
  const constituency = {
    region: param[0],
    district: param[1],
  };

  const filterRegionMPData = DUMMY_DATA.filter((data: MPDataType) => {
    if (data.constituency[0].region !== constituency.region) {
      return false;
    }

    if (constituency.district) {
      return data.constituency.some(
        (obj) => obj.district?.includes(constituency.district)
      );
    }

    return true;
  });

  const sortRegionMPData = filterRegionMPData.sort((a, b) => {
    const ratioA =
      a.base_info.total_promise_count > 0
        ? a.base_info.completed_promise_count / a.base_info.total_promise_count
        : 0;
    const ratioB =
      b.base_info.total_promise_count > 0
        ? b.base_info.completed_promise_count / b.base_info.total_promise_count
        : 0;
    return ratioB - ratioA; // 내림차순 정렬
  });

  return (
    <>
      <SEO title={`${constituency.region} 지역 국회의원 공약이행률 순위`} />
      <MainLayout>
        <Tabs selectedTab={'REGION'} />
        <MPList mpDataList={sortRegionMPData} removeSectionTitle={true} />
      </MainLayout>
    </>
  );
};

export default RegionPage;
