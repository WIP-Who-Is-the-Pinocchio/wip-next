export type ListType<T> = {
  key: T;
  text: string;
};

export type TabKey = 'countryWide' | 'region' | 'party';

export const TAB_LIST: ListType<TabKey>[] = [
  {
    key: 'countryWide',
    text: '전국',
  },
  {
    key: 'region',
    text: '지역별',
  },
  {
    key: 'party',
    text: '정당별',
  },
];
