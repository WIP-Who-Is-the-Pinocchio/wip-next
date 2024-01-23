import axios from 'axios';
// import { Politician, Constituency,PoliticianDetail } from './apiTypes';

const baseUrl = 'http://localhost:2309/wip/public/api/v1';
export const getPoliticiansListData = async () => {
  try {
    const res = await axios.get(`${baseUrl}/politician/list/22?page=0`);
    console.log(res);
    return res;
  } catch (err) {
    console.log('api에러발생' + err);
  }
};

export const getPoliticianSingleData = async (id: number) => {
  try {
    const res = await axios.get(`${baseUrl}/politician/single/${id}`);
    console.log(res);
    return res;
  } catch (err) {
    console.log('api에러발생' + err);
  }
};

export const getDumyData = () => {
  return [
    {
      id: 0,
      name: '가가가',
      profile_url: 'string',
      political_party: '더불어민주당',
      total_promise_count: 1,
      completed_promise_count: 2,
      promise_execution_rate: 3,
      constituency: [
        {
          id: 0,
          region: '서울시',
          district: '마포구',
          section: '갑',
        },
      ],
    },
    {
      id: 1,
      name: '나나나',
      profile_url: 'string',
      political_party: '국민의당',
      total_promise_count: 3,
      completed_promise_count: 1,
      promise_execution_rate: 2,
      constituency: [
        {
          id: 0,
          region: '충청남도',
          district: '천안시',
          section: '서북구',
        },
      ],
    },
  ];
};

export const getDummyDetailData = (policNum: number) => {
  const data = [
    {
      id: 0,
      name: 'string',
      assembly_term: 22,
      profile_url: 'string',
      political_party: '정의당',
      elected_count: 2,
      total_promise_count: 78,
      completed_promise_count: 40,
      in_progress_promise_count: 30,
      pending_promise_count: 7,
      discarded_promise_count: 1,
      other_promise_count: 0,
      resolve_required_promise_count: 432,
      resolved_promise_count: 123,
      total_required_funds: 0,
      total_secured_funds: 0,
      total_executed_funds: 0,
      promise_count_detail: {
        completed_national_promise_count: 10,
        total_national_promise_count: 9,
        completed_local_promise_count: 8,
        total_local_promise_count: 7,
        completed_legislative_promise_count: 6,
        total_legislative_promise_count: 5,
        completed_financial_promise_count: 4,
        total_financial_promise_count: 3,
        completed_in_term_promise_count: 2,
        total_in_term_promise_count: 23,
        completed_after_term_promise_count: 45,
        total_after_term_promise_count: 67,
        completed_ongoing_business_promise_count: 98,
        total_ongoing_business_promise_count: 28,
        completed_new_business_promise_count: 45,
        total_new_business_promise_count: 13,
      },
      committee: [
        {
          id: 0,
          is_main: true,
          name: 'string',
        },
      ],
      constituency: [
        {
          id: 0,
          region: 'string',
          district: 'string',
          section: 'string',
        },
      ],
    },
    {
      id: 1,
      name: 'string',
      assembly_term: 22,
      profile_url: 'string',
      political_party: '어쩌구당',
      elected_count: 2,
      total_promise_count: 78,
      completed_promise_count: 40,
      in_progress_promise_count: 30,
      pending_promise_count: 7,
      discarded_promise_count: 1,
      other_promise_count: 0,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 3000,
      total_secured_funds: 2000,
      total_executed_funds: 10000,
      promise_count_detail: {
        completed_national_promise_count: 10,
        total_national_promise_count: 9,
        completed_local_promise_count: 8,
        total_local_promise_count: 7,
        completed_legislative_promise_count: 6,
        total_legislative_promise_count: 5,
        completed_financial_promise_count: 4,
        total_financial_promise_count: 3,
        completed_in_term_promise_count: 2,
        total_in_term_promise_count: 23,
        completed_after_term_promise_count: 45,
        total_after_term_promise_count: 67,
        completed_ongoing_business_promise_count: 98,
        total_ongoing_business_promise_count: 28,
        completed_new_business_promise_count: 45,
        total_new_business_promise_count: 13,
      },
      committee: [
        {
          id: 0,
          is_main: true,
          name: 'string',
        },
      ],
      constituency: [
        {
          id: 0,
          region: 'string',
          district: 'string',
          section: 'string',
        },
      ],
    },
  ];

  const filteredData = data.filter((item) => item.id === policNum);
  return filteredData;
};
