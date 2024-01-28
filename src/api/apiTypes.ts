export interface Constituency {
  id: string;
  region: string;
  district: string;
  section: string;
}

export interface Politician {
  id: string;
  name: string;
  profile_url: string;
  political_party: string;
  total_promise_count: string;
  completed_promise_count: string;
  promise_execution_rate: string;
  constituency: Constituency[];
}

export interface PromiseCountDetail {
  completed_national_promise_count: string;
  total_national_promise_count: string;
  completed_local_promise_count: string;
  total_local_promise_count: string;
  completed_legislative_promise_count: string;
  total_legislative_promise_count: string;
  completed_financial_promise_count: string;
  total_financial_promise_count: string;
  completed_in_term_promise_count: string;
  total_in_term_promise_count: string;
  completed_after_term_promise_count: string;
  total_after_term_promise_count: string;
  completed_ongoing_business_promise_count: string;
  total_ongoing_business_promise_count: string;
  completed_new_business_promise_count: string;
  total_new_business_promise_count: string;
}

export interface Committee {
  id: string;
  is_main: boolean;
  name: string;
}

export interface Constituency {
  id: string;
  region: string;
  district: string;
  section: string;
}

export interface PoliticianDetail {
  id: string;
  name: string;
  assembly_term: string;
  profile_url: string;
  political_party: string;
  elected_count: string;
  total_promise_count: string;
  completed_promise_count: string;
  in_progress_promise_count: string;
  pending_promise_count: string;
  discarded_promise_count: string;
  other_promise_count: string;
  resolve_required_promise_count: string;
  resolved_promise_count: string;
  total_required_funds: string;
  total_secured_funds: string;
  total_executed_funds: string;
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
  total: string;
  completed: string;
  inProgress: number;
  pending: number;
  other: number;
}

export interface CompletionStatusData {
  nation: string;
  region: string;
  legislative: string;
  budget: string;
  duringTerm: string;
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
