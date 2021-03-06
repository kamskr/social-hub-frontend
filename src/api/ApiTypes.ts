export interface SocialAPI {}

export interface ApiError {
  content: string;
}

export interface PaginatedData<T = any> {
  total_count: number;
  data: T;
}
