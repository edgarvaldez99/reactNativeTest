import {Movie} from '../interface/Movie';
import {getMovieApi} from './movie';
import {searchMovieApi} from './search';

export async function getMovieListApi(
  searchText: string,
  year: string,
): Promise<Movie[]> {
  try {
    const results = await searchMovieApi(searchText, year);
    const movies = [];
    for await (const movieSearch of results.Search) {
      const movie = await getMovieApi(movieSearch.Title, movieSearch.Year);
      movies.push(movie);
    }
    return movies;
  } catch (error) {
    throw error;
  }
}
