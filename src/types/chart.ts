export interface ChartDataPoint {
  _id: string;
  year: number;
  month: number;
  month_index: number;
  amount: number;
  debt_repayment: number;
  interest_payment: number | null;
  revenues: number;
  real_debt_repayment: number;
  real_interest_payment: number;
  operating_expenses: number;
  ebitda: number;
  depreciation: number;
  capex: number;
  payment_date: string;
  asset: string;
  created_at: string;
  updated_at: string;
  last_payment_made: boolean;
  token_price?: number;
}

export interface ChartResponse {
  data: ChartDataPoint[];
  count: number;
  page: number;
  rows: number;
}

/**
 * Interfaz extendida que incluye los datos procesados para el gráfico
 */
export interface ChartResponseWithProcessedData extends ChartResponse {
  processedData: ChartDataPoint[];
}