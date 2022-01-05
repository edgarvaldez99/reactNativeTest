import {Movie} from './Movie';

export interface MovieDetail extends Movie {
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
}
