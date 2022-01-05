import {Movie} from '../interface/Movie';
import {API_HOST} from '../utils/constants';

export async function getMovieApi(title: string, year: string): Promise<Movie> {
  try {
    const url = `${API_HOST}t=${title}&y=${year}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
