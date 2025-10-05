export interface ApiResponse<T> {
  data: T;
  count?: number;
  page?: number;
  rows?: number;
}

export interface ApiError {
  message: string;
  status: number;
  data?: unknown;
}