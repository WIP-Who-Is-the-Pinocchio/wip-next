'use client';

import { MPDataType } from '@/api/api';
import { MPList } from './MPList';

interface MPListContainerPropsType {
  mpData: MPDataType[];
}

export default function MPListContainer({ mpData }: MPListContainerPropsType) {
  const sortData = mpData.sort((a, b) => {
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

  return <MPList mpDataList={sortData} />;
}
