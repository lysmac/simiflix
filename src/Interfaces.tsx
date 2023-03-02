export interface Recommendations {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: Date;
  poster_path: null;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface InterfaceMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface RecommendedMovie {
  title: string;
  id: number;
  posterurl: string;
  overview: string;
}

export interface MovieData {
  title: string;
  poster_path: string;
  id: number;
  overview: string;
}

export interface Props {
  movieData: MovieData;
}

export interface AppContextType {
  movie: InterfaceMovie;
  recommendations: Recommendations;
  setWatchlist: (watchlist: any[]) => void;
  watchlist: any[];
}

export interface HeaderProps {
  setUserSearch: (search: string) => void;
  userSearch: string;
}
