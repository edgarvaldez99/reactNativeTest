import {Error} from '../interface/Error';
import {Movie} from '../interface/Movie';
import {API_HOST} from '../utils/constants';

export async function getMovieApi(title: string, year: string): Promise<Movie> {
  try {
    const url = `${API_HOST}t=${title}&y=${year}`;
    const response = await fetch(url);
    const result: Movie | Error = await response.json();
    if ((result as Error).Error) {
      throw result;
    }
    return result as Movie;
  } catch (error) {
    throw error;
  }
}
