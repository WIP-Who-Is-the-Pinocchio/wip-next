'use client';

import SEO from '../components/SEO';
import Tabs from '@/app/components/list/Tabs';
import { Region } from '../components/list/Region';
import MainLayout from '../components/common/MainLayout';

export default function RegionPage() {
  return (
    <>
      <SEO title="국회의원 선거구 리스트" />
      <MainLayout>
        <Tabs selectedTab={'REGION'} />
        <Region />
      </MainLayout>
    </>
  );
}
