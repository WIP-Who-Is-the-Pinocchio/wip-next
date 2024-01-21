export interface Constituency {
  id: number;
  region: string;
  district: string;
  section: string;
}

export interface Politician {
  id: number;
  name: string;
  profile_url: string;
  political_party: string;
  total_promise_count: number;
  completed_promise_count: number;
  promise_execution_rate: number;
  constituency: Constituency[];
}

export interface PromiseCountDetail {
  completed_national_promise_count: number;
  total_national_promise_count: number;
  completed_local_promise_count: number;
  total_local_promise_count: number;
  completed_legislative_promise_count: number;
  total_legislative_promise_count: number;
  completed_financial_promise_count: number;
  total_financial_promise_count: number;
  completed_in_term_promise_count: number;
  total_in_term_promise_count: number;
  completed_after_term_promise_count: number;
  total_after_term_promise_count: number;
  completed_ongoing_business_promise_count: number;
  total_ongoing_business_promise_count: number;
  completed_new_business_promise_count: number;
  total_new_business_promise_count: number;
}

export interface Committee {
  id: number;
  is_main: boolean;
  name: string;
}

export interface Constituency {
  id: number;
  region: string;
  district: string;
  section: string;
}

export interface PoliticianDetail {
  id: number;
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
  total_required_funds: number;
  total_secured_funds: number;
  total_executed_funds: number;
  promise_count_detail: PromiseCountDetail;
  committee: Committee[];
  constituency: Constituency[];
}

//여기 아래서부터는 클라이언트 데이터타입

export interface CommonColumn {
  label: string;
  key: string;
}

export interface TableProps {
  data: { [key: string]: any }[];
  columns: CommonColumn[];
  colName1: string;
  colName2: string;
}

export interface PledgesData {
  total: number;
  completed: number;
  inProgress: number;
  pending: number;
  other: number;
}

export interface CompletionStatusData {
  nation: number;
  region: number;
  legislative: number;
  budget: number;
  duringTerm: number;
}

export interface LegislativeStatusData {
  totalRequired: number;
  completedResolution: number;
}

export interface FinancialStatusData {
  totalRequired: number;
  secured: number;
  executed: number;
}
