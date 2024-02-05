'use client';

import SEO from '../components/SEO';
import Tabs from '@/app/components/list/Tabs';
import Party from '../components/list/Party';
import MainLayout from '../components/common/MainLayout';

export default function PartyPage() {
  return (
    <>
      <SEO title="국회의원 정당 리스트" />
      <MainLayout>
        <Tabs selectedTab={'PARTY'} />
        <Party />
      </MainLayout>
    </>
  );
}
