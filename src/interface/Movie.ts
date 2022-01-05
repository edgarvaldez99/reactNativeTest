import {MovieSearch} from './MovieSearch';

export interface Movie extends MovieSearch {
  Plot: string;
  imdbRating: string;
}
