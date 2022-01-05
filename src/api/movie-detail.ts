import {MovieDetail} from '../interface/MovieDetail';
import {API_HOST} from '../utils/constants';

export async function getMovieDetailApi(imdbID: string): Promise<MovieDetail> {
  try {
    const url = `${API_HOST}i=${imdbID}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
