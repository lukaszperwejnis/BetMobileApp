interface ApiResponse {
  status: number;
}

export interface SuccessApiResponse<T> extends ApiResponse {
  data: T;
}

export interface ErrorApiResponse extends ApiResponse {
  message: string;
}
