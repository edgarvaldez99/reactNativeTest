import {Error} from '../interface/Error';
import {Search} from '../interface/Search';
import {API_HOST} from '../utils/constants';

export async function searchMovieApi(
  searchText: string,
  year: string,
): Promise<Search> {
  if (searchText && year) {
    try {
      const url = `${API_HOST}s=${searchText}&y=${year}`;
      const response = await fetch(url);
      const result: Search | Error = await response.json();
      if ((result as Error).Error) {
        return Promise.resolve({Search: [], Response: 'True', totalResults: 0});
      }
      return result as Search;
    } catch (error) {
      throw error;
    }
  }
  return Promise.resolve({Search: [], Response: 'True', totalResults: 0});
}
