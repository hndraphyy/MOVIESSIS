export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}

export interface Movie {
  id: number;
  title: string;
}

export interface TV {
  id: number;
  name: string;
}

export interface Person {
  id: number;
  name: string;
}

export interface Stat {
  value: number;
  label: string;
}
