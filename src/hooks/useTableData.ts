import { useState, useEffect } from 'react';

import { TableRowData } from '@/components/congress/Table';
import { MPDataType } from '@/api/api';

const useTableData = (mpData: MPDataType) => {
  const [promiseData, setPromiseData] = useState<TableRowData[]>([]);
  const [promiseDetailData, setPromiseDetailData] = useState<TableRowData[]>(
    []
  );
  const [resolvedPromiseData, setResolvedPromiseData] = useState<
    TableRowData[]
  >([]);
  const [fundData, setFundData] = useState<TableRowData[]>([]);
  // 데이터 분리
  const profileData = mpData.base_info;
  const promiseCountDetailData = mpData.promise_count_detail;

  const divideBillion = (fund: number | null) => {
    if (fund) {
      const amountInBillion = fund / 100000000;

      return `${amountInBillion.toLocaleString('ko-kr', {
        maximumFractionDigits: 2,
      })}억원`;
    }
    return '';
  };

  useEffect(() => {
    setPromiseData(() => [
      {
        category: '공약수',
        details: [
          profileData.total_promise_count,
          profileData.completed_promise_count,
          profileData.in_progress_promise_count,
          profileData.pending_promise_count,
          profileData.discarded_promise_count,
          profileData.other_promise_count,
        ],
      },
    ]);
    setPromiseDetailData(() => [
      {
        category: '완료',
        details: [
          promiseCountDetailData?.completed_national_promise_count,
          promiseCountDetailData?.completed_local_promise_count,
          promiseCountDetailData?.completed_legislative_promise_count,
          promiseCountDetailData?.completed_financial_promise_count,
          promiseCountDetailData?.completed_in_term_promise_count,
          promiseCountDetailData?.completed_after_term_promise_count,
          promiseCountDetailData?.completed_ongoing_business_promise_count,
          promiseCountDetailData?.completed_new_business_promise_count,
        ],
      },
      {
        category: '전체',
        details: [
          promiseCountDetailData?.total_national_promise_count,
          promiseCountDetailData?.total_local_promise_count,
          promiseCountDetailData?.total_legislative_promise_count,
          promiseCountDetailData?.total_financial_promise_count,
          promiseCountDetailData?.total_in_term_promise_count,
          promiseCountDetailData?.total_after_term_promise_count,
          promiseCountDetailData?.total_ongoing_business_promise_count,
          promiseCountDetailData?.total_new_business_promise_count,
        ],
      },
    ]);
    setResolvedPromiseData(() => [
      {
        category: '공약수',
        details: [
          profileData.resolve_required_promise_count,
          profileData.resolved_promise_count,
        ],
      },
    ]);
    setFundData(() => [
      {
        category: '금액',
        details: [
          divideBillion(profileData.total_required_funds),
          divideBillion(profileData.total_secured_funds),
          divideBillion(profileData.total_executed_funds),
        ],
      },
    ]);
  }, []);

  return {
    promiseData,
    promiseDetailData,
    resolvedPromiseData,
    fundData,
  };
};

export default useTableData;
