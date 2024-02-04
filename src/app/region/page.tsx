'use client';

import Tabs from '@/app/components/list/Tabs';
import { Region } from '../components/list/Region';
import MainLayout from '../components/common/MainLayout';

export default function RegionPage() {
  return (
    <MainLayout>
      <Tabs selectedTab={'REGION'} />
      <Region />
    </MainLayout>
  );
}
