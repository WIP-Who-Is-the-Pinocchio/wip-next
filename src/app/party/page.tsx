'use client';

import Tabs from '@/app/components/list/Tabs';
import Party from '../components/list/Party';
import MainLayout from '../components/common/MainLayout';

export default function PartyPage() {
  return (
    <MainLayout>
      <Tabs selectedTab={'PARTY'} />
      <Party />
    </MainLayout>
  );
}
