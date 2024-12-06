export interface Quote {
  id: string;
  text: string;
  mediaUrl: string;
  username: string;
  createdAt: string;
}

export interface LoginResponse {
  token: string;
  username: string;
}

export interface QuotesResponse {
  quotes: Quote[];
}