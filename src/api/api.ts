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

interface RegionType {
  region: string;
  district: string;
  section: string | null;
}

interface CommitteeType {
  is_main: boolean;
  name: string;
}

export interface MPDataType {
  base_info: {
    name: string;
    assembly_term: number;
    profile_url: string;
    political_party: string;
    elected_count: number;
    total_promise_count: number;
    completed_promise_count: number;
    in_progress_promise_count: number;
    pending_promise_count: number;
    discarded_promise_count: number;
    other_promise_count: number;
    resolve_required_promise_count: number;
    resolved_promise_count: number;
    total_required_funds: number | null;
    total_secured_funds: number | null;
    total_executed_funds: number | null;
  };
  promise_count_detail: {
    completed_local_promise_count?: number | null;
    total_local_promise_count?: number | null;
    completed_national_promise_count?: number | null;
    total_national_promise_count?: number | null;
    completed_legislative_promise_count?: number | null;
    total_legislative_promise_count?: number | null;
    completed_financial_promise_count?: number | null;
    total_financial_promise_count?: number | null;
    completed_in_term_promise_count?: number | null;
    total_in_term_promise_count?: number | null;
    completed_after_term_promise_count?: number | null;
    total_after_term_promise_count?: number | null;
    completed_ongoing_business_promise_count?: number | null;
    total_ongoing_business_promise_count?: number | null;
    completed_new_business_promise_count?: number | null;
    total_new_business_promise_count?: number | null;
  };
  constituency: RegionType[];
  committee: CommitteeType[];
}

export const DUMMY_DATA: MPDataType[] = [
  {
    base_info: {
      name: '강병원',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/60490713.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 12,
      completed_promise_count: 4,
      in_progress_promise_count: 8,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 7,
      resolved_promise_count: 3,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '은평구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '정무위원회',
      },
    ],
  },
  {
    base_info: {
      name: '강선우',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/20867c4d630e4273a985d161c7b212b2.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 28,
      completed_promise_count: 10,
      in_progress_promise_count: 18,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 5,
      resolved_promise_count: 3,
      total_required_funds: 35695400000,
      total_secured_funds: 3382100000000,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '강서구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '보건복지위원회',
      },
    ],
  },
  {
    base_info: {
      name: '고민정',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/WCD5518S.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 18,
      completed_promise_count: 2,
      in_progress_promise_count: 13,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 3,
      resolve_required_promise_count: 2,
      resolved_promise_count: 0,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '광진구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '과학기술방송정보통신위원회',
      },
    ],
  },
  {
    base_info: {
      name: '고용진',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/6V37131U.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 24,
      completed_promise_count: 5,
      in_progress_promise_count: 19,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 10748700000000,
      total_secured_funds: 4452200000000,
      total_executed_funds: 283300000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '노원구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '기획재정위원회',
      },
    ],
  },
  {
    base_info: {
      name: '권영세',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/LG63087O.jpg',
      political_party: '국민의힘',
      elected_count: 4,
      total_promise_count: 39,
      completed_promise_count: 1,
      in_progress_promise_count: 5,
      pending_promise_count: 9,
      discarded_promise_count: 1,
      other_promise_count: 23,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_national_promise_count: 0,
      total_national_promise_count: 0,
      completed_legislative_promise_count: 0,
      total_legislative_promise_count: 0,
      completed_financial_promise_count: 0,
      total_financial_promise_count: 0,
      completed_in_term_promise_count: 0,
      total_in_term_promise_count: 0,
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_ongoing_business_promise_count: 0,
      total_ongoing_business_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '용산구',
        section: null,
      },
    ],
    committee: [
      {
        is_main: true,
        name: '보건복지위원회',
      },
    ],
  },
  {
    base_info: {
      name: '기동민',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/B7R2742J.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 30,
      completed_promise_count: 12,
      in_progress_promise_count: 16,
      pending_promise_count: 1,
      discarded_promise_count: 0,
      other_promise_count: 1,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 3281995000000,
      total_secured_funds: 118592000000,
      total_executed_funds: null,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '성북구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '법제사법위원회',
      },
    ],
  },
  {
    base_info: {
      name: '김민석',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/MLH1404S.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 51,
      completed_promise_count: 26,
      in_progress_promise_count: 24,
      pending_promise_count: 1,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 18,
      resolved_promise_count: 11,
      total_required_funds: 171133000000,
      total_secured_funds: 2470000000,
      total_executed_funds: 13039000000,
    },
    promise_count_detail: {
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '영등포구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '보건복지위원회',
      },
      {
        is_main: false,
        name: '연금개혁특별위원회',
      },
    ],
  },
  {
    base_info: {
      name: '김병기',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/8Q88373R.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 39,
      completed_promise_count: 14,
      in_progress_promise_count: 21,
      pending_promise_count: 4,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 11,
      resolved_promise_count: 2,
      total_required_funds: 388340000000,
      total_secured_funds: 380550000000,
      total_executed_funds: 74690000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '동작구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '국토교통위원회',
      },
      {
        is_main: true,
        name: '정보위원회',
      },
    ],
  },
  {
    base_info: {
      name: '김성환',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/XSP20229.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 42,
      completed_promise_count: 15,
      in_progress_promise_count: 26,
      pending_promise_count: 1,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 2067000000000,
      total_secured_funds: 999700000000,
      total_executed_funds: 953700000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '노원구',
        section: '병',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '산업통상자원중소벤처기업위원회',
      },
    ],
  },
  {
    base_info: {
      name: '김영배',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/B7D7534L.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 44,
      completed_promise_count: 9,
      in_progress_promise_count: 28,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 7,
      resolve_required_promise_count: 10,
      resolved_promise_count: 2,
      total_required_funds: 394250000000,
      total_secured_funds: 128340000000,
      total_executed_funds: 83376000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '성북구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '국방위원회',
      },
    ],
  },
  {
    base_info: {
      name: '김영주',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/92a88266d8e9490e98b89f3ec06fbea1.jpg',
      political_party: '더불어민주당',
      elected_count: 4,
      total_promise_count: 17,
      completed_promise_count: 4,
      in_progress_promise_count: 13,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 2034400000000,
      total_secured_funds: 1555300000000,
      total_executed_funds: 479100000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '영등포구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '과학기술정보방송통신',
      },
    ],
  },
  {
    base_info: {
      name: '김웅',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/LQW3652K.jpg',
      political_party: '국민의힘',
      elected_count: 1,
      total_promise_count: 15,
      completed_promise_count: 2,
      in_progress_promise_count: 13,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 8,
      resolved_promise_count: 0,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '송파구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '행정안전위원회',
      },
      {
        is_main: false,
        name: '예산결산특별위원회',
      },
    ],
  },
  {
    base_info: {
      name: '남인순',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/04T3751T.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 80,
      completed_promise_count: 37,
      in_progress_promise_count: 43,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 30,
      resolved_promise_count: 12,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '송파구',
        section: '병',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '보건복지위원회',
      },
    ],
  },
  {
    base_info: {
      name: '노웅래',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/0827740Q.jpg',
      political_party: '더불어민주당',
      elected_count: 4,
      total_promise_count: 40,
      completed_promise_count: 14,
      in_progress_promise_count: 28,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 5,
      resolved_promise_count: 5,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '마포구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '환경노동위원회',
      },
    ],
  },
  {
    base_info: {
      name: '박성준',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/IL74008M.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 35,
      completed_promise_count: 11,
      in_progress_promise_count: 24,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 1,
      resolved_promise_count: 0,
      total_required_funds: 1625078000000,
      total_secured_funds: 826605000000,
      total_executed_funds: 576231000000,
    },
    promise_count_detail: {
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_ongoing_business_promise_count: 0,
      total_ongoing_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '중구',
        section: '을',
      },
      {
        region: '서울',
        district: '성동구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '정무위원회',
      },
    ],
  },
  {
    base_info: {
      name: '박용진',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/PEP6922S.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 19,
      completed_promise_count: 4,
      in_progress_promise_count: 15,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 3,
      resolved_promise_count: 4,
      total_required_funds: 2038230000000,
      total_secured_funds: 141017000000,
      total_executed_funds: 102777000000,
    },
    promise_count_detail: {
      completed_national_promise_count: 0,
      total_national_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '강북구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '정무위원회',
      },
    ],
  },
  {
    base_info: {
      name: '박주민',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/6AU2417B.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 25,
      completed_promise_count: 1,
      in_progress_promise_count: 20,
      pending_promise_count: 2,
      discarded_promise_count: 2,
      other_promise_count: 2,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 510218000000,
      total_secured_funds: 145815000000,
      total_executed_funds: 54265000000,
    },
    promise_count_detail: {
      completed_national_promise_count: 0,
      total_national_promise_count: 0,
      completed_legislative_promise_count: 0,
      total_legislative_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '은평구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '법제사법위원회',
      },
    ],
  },
  {
    base_info: {
      name: '배현진',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/4X525582.jpg',
      political_party: '국민의힘',
      elected_count: 1,
      total_promise_count: 27,
      completed_promise_count: 10,
      in_progress_promise_count: 17,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 13,
      resolved_promise_count: 3,
      total_required_funds: 831950000000,
      total_secured_funds: 33100000000,
      total_executed_funds: 22700000000,
    },
    promise_count_detail: {
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '송파구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '문화체육관광위원회',
      },
    ],
  },
  {
    base_info: {
      name: '서영교',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/TKJ4800F.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 31,
      completed_promise_count: 7,
      in_progress_promise_count: 24,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 6,
      resolved_promise_count: 4,
      total_required_funds: 3782474000000,
      total_secured_funds: 1182606000000,
      total_executed_funds: 87183000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '중랑구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '기획재정위원회',
      },
    ],
  },
  {
    base_info: {
      name: '안규백',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/TST4507I.jpg',
      political_party: '더불어민주당',
      elected_count: 4,
      total_promise_count: 77,
      completed_promise_count: 15,
      in_progress_promise_count: 60,
      pending_promise_count: 2,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 5,
      resolved_promise_count: 0,
      total_required_funds: 20564700000000,
      total_secured_funds: 799300000000,
      total_executed_funds: 555000000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '동대문구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '국방위원회',
      },
    ],
  },
  {
    base_info: {
      name: '오기형',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/346ed741ff8d40e0b0f8f8bfa98dc8ef.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 20,
      completed_promise_count: 5,
      in_progress_promise_count: 14,
      pending_promise_count: 1,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 4962600000000,
      total_secured_funds: 277300000000,
      total_executed_funds: 62700000000,
    },
    promise_count_detail: {
      completed_legislative_promise_count: 0,
      total_legislative_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '도봉구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '정무위원회',
      },
    ],
  },
  {
    base_info: {
      name: '우상호',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/V0O5343U.jpg',
      political_party: '더불어민주당',
      elected_count: 4,
      total_promise_count: 26,
      completed_promise_count: 5,
      in_progress_promise_count: 21,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 0,
      resolved_promise_count: 0,
      total_required_funds: 195100000000,
      total_secured_funds: 195100000000,
      total_executed_funds: null,
    },
    promise_count_detail: {
      total_national_promise_count: null,
      total_local_promise_count: null,
      completed_legislative_promise_count: 0,
      total_legislative_promise_count: 0,
      total_financial_promise_count: null,
      total_in_term_promise_count: null,
      total_after_term_promise_count: null,
      total_ongoing_business_promise_count: null,
      total_new_business_promise_count: null,
    },
    constituency: [
      {
        region: '서울',
        district: '서대문구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '외교통일위원회',
      },
    ],
  },
  {
    base_info: {
      name: '우원식',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/XBT9550Q.jpg',
      political_party: '더불어민주당',
      elected_count: 4,
      total_promise_count: 18,
      completed_promise_count: 1,
      in_progress_promise_count: 17,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 5,
      resolved_promise_count: 0,
      total_required_funds: 284500000000,
      total_secured_funds: 172355000000,
      total_executed_funds: null,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '노원구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '환경노동위원회',
      },
      {
        is_main: false,
        name: '예산결산특별위원회',
      },
    ],
  },
  {
    base_info: {
      name: '유경준',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/205e0a814a734bf8b55b50179429a6d5.jpg',
      political_party: '국민의힘',
      elected_count: 1,
      total_promise_count: 7,
      completed_promise_count: 4,
      in_progress_promise_count: 3,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 5,
      resolved_promise_count: 2,
      total_required_funds: 1100000000,
      total_secured_funds: 1100000000,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '강남구',
        section: '병',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '국토교통위원회',
      },
    ],
  },
  {
    base_info: {
      name: '유기홍',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/205e0a814a734bf8b55b50179429a6d5.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 34,
      completed_promise_count: 7,
      in_progress_promise_count: 22,
      pending_promise_count: 4,
      discarded_promise_count: 1,
      other_promise_count: 0,
      resolve_required_promise_count: 6,
      resolved_promise_count: 3,
      total_required_funds: 5335400000000,
      total_secured_funds: 4896300000000,
      total_executed_funds: 4834300000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '관악구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '교육위원회',
      },
    ],
  },
  {
    base_info: {
      name: '이수진',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/D4L60530.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 68,
      completed_promise_count: 7,
      in_progress_promise_count: 60,
      pending_promise_count: 1,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 22,
      resolved_promise_count: 2,
      total_required_funds: 127983000000,
      total_secured_funds: 127983000000,
      total_executed_funds: 85862000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '동작구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '기획재정위원회',
      },
    ],
  },
  {
    base_info: {
      name: '이용선',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/79cbe48e3fa3484fa90f07d64d3f638b.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 8,
      completed_promise_count: 1,
      in_progress_promise_count: 6,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 1,
      resolve_required_promise_count: 2,
      resolved_promise_count: 0,
      total_required_funds: 3681800000000,
      total_secured_funds: 160400000000,
      total_executed_funds: 76800000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '양천구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '산업통상자원중소벤처기업위원회',
      },
    ],
  },
  {
    base_info: {
      name: '이인영',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/3ZR4438W.jpg',
      political_party: '더불어민주당',
      elected_count: 4,
      total_promise_count: 67,
      completed_promise_count: 30,
      in_progress_promise_count: 18,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 19,
      resolve_required_promise_count: 7,
      resolved_promise_count: 2,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_legislative_promise_count: 0,
      total_legislative_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '구로구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '과학기술정보방송통신위원회',
      },
    ],
  },
  {
    base_info: {
      name: '이해식',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/CCU1009B.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 78,
      completed_promise_count: 13,
      in_progress_promise_count: 40,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 25,
      resolve_required_promise_count: 43,
      resolved_promise_count: 25,
      total_required_funds: 19265348000000,
      total_secured_funds: 13190270000000,
      total_executed_funds: 5660944000000,
    },
    promise_count_detail: {
      completed_in_term_promise_count: 0,
      total_in_term_promise_count: 0,
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_ongoing_business_promise_count: 0,
      total_ongoing_business_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '강동구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '행정안전위원회',
      },
    ],
  },
  {
    base_info: {
      name: '인재근',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/UM51067K.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 8,
      completed_promise_count: 1,
      in_progress_promise_count: 7,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 3,
      resolved_promise_count: 2,
      total_required_funds: null,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_national_promise_count: 0,
      total_national_promise_count: 0,
      completed_legislative_promise_count: 0,
      total_legislative_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '도봉구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '보건복지위원회',
      },
    ],
  },
  {
    base_info: {
      name: '장경태',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/6f379a657d69494b87415d53f7755d24.png',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 22,
      completed_promise_count: 1,
      in_progress_promise_count: 21,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 3,
      resolved_promise_count: 1,
      total_required_funds: 10000000000000,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_national_promise_count: 0,
      total_national_promise_count: 0,
      completed_financial_promise_count: 0,
      total_financial_promise_count: 0,
      completed_in_term_promise_count: 0,
      total_in_term_promise_count: 0,
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '동대문구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '과학기술정보방송통신위원회',
      },
    ],
  },
  {
    base_info: {
      name: '전혜숙',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/N9X9673B.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 0,
      completed_promise_count: 0,
      in_progress_promise_count: 0,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 3,
      resolved_promise_count: 1,
      total_required_funds: null,
      total_secured_funds: 41780000000,
      total_executed_funds: 41780000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '광진구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '보건복지위원회',
      },
    ],
  },
  {
    base_info: {
      name: '정청래',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/2385336L.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 14,
      completed_promise_count: 0,
      in_progress_promise_count: 14,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 73,
      resolved_promise_count: 16,
      total_required_funds: 1815151000000,
      total_secured_funds: 476451000000,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_financial_promise_count: 0,
      total_financial_promise_count: 0,
      completed_in_term_promise_count: 0,
      total_in_term_promise_count: 0,
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_ongoing_business_promise_count: 0,
      total_ongoing_business_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '마포구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '과학기술정보방송통신위원회',
      },
    ],
  },
  {
    base_info: {
      name: '정태호',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/UHB5553T.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 14,
      completed_promise_count: 1,
      in_progress_promise_count: 12,
      pending_promise_count: 1,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 1,
      resolved_promise_count: 0,
      total_required_funds: 579830000000,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_national_promise_count: 0,
      total_national_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '관악구',
        section: '을',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '기획재정위원회',
      },
    ],
  },
  {
    base_info: {
      name: '천준호',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/A494529E.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 79,
      completed_promise_count: 53,
      in_progress_promise_count: 25,
      pending_promise_count: 1,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 1,
      resolved_promise_count: 1,
      total_required_funds: 639800000000,
      total_secured_funds: 383937700000,
      total_executed_funds: 198651500000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '강북구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '행정안전위원회',
      },
    ],
  },
  {
    base_info: {
      name: '최기상',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/ae42859440904d84b0b31e7382d0dd6b.jpg',
      political_party: '더불어민주당',
      elected_count: 1,
      total_promise_count: 18,
      completed_promise_count: 5,
      in_progress_promise_count: 13,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 6,
      resolved_promise_count: 3,
      total_required_funds: 1845000000000,
      total_secured_funds: 955600000000,
      total_executed_funds: 460400000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '금천구',
        section: null,
      },
    ],
    committee: [
      {
        is_main: true,
        name: '행정안전위원회',
      },
    ],
  },
  {
    base_info: {
      name: '한정애',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/new/thumb/7b04f535d62d401da2af886555ee4e4f.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 37,
      completed_promise_count: 3,
      in_progress_promise_count: 34,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 10,
      resolved_promise_count: 8,
      total_required_funds: 5300700000000,
      total_secured_funds: null,
      total_executed_funds: null,
    },
    promise_count_detail: {
      completed_local_promise_count: null,
      completed_legislative_promise_count: 0,
      total_legislative_promise_count: 0,
      completed_financial_promise_count: 0,
      total_financial_promise_count: 0,
      completed_in_term_promise_count: 0,
      total_in_term_promise_count: 0,
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
      completed_ongoing_business_promise_count: 0,
      total_ongoing_business_promise_count: 0,
      completed_new_business_promise_count: 0,
      total_new_business_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '강서구',
        section: '병',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '보건복지위원회',
      },
    ],
  },
  {
    base_info: {
      name: '홍익표',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/FRN1867O.jpg',
      political_party: '더불어민주당',
      elected_count: 3,
      total_promise_count: 8,
      completed_promise_count: 5,
      in_progress_promise_count: 3,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 3,
      resolved_promise_count: 2,
      total_required_funds: 62200000000,
      total_secured_funds: null,
      total_executed_funds: 61910000000,
    },
    promise_count_detail: {
      completed_after_term_promise_count: 0,
      total_after_term_promise_count: 0,
    },
    constituency: [
      {
        region: '서울',
        district: '중구',
        section: '갑',
      },
      {
        region: '서울',
        district: '성동구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '문화체육관광위원회',
      },
    ],
  },
  {
    base_info: {
      name: '황희',
      assembly_term: 21,
      profile_url:
        'https://www.assembly.go.kr/static/portal/img/openassm/0VU8517U.jpg',
      political_party: '더불어민주당',
      elected_count: 2,
      total_promise_count: 24,
      completed_promise_count: 9,
      in_progress_promise_count: 15,
      pending_promise_count: 0,
      discarded_promise_count: 0,
      other_promise_count: 0,
      resolve_required_promise_count: 5,
      resolved_promise_count: 1,
      total_required_funds: 44900000000,
      total_secured_funds: 148000000000,
      total_executed_funds: 78600000000,
    },
    promise_count_detail: {},
    constituency: [
      {
        region: '서울',
        district: '양천구',
        section: '갑',
      },
    ],
    committee: [
      {
        is_main: true,
        name: '외교통일위원회',
      },
    ],
  },
];
