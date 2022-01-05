import {Movie} from '../interface/Movie';
import {getMovieApi} from './movie';
import {searchMovieApi} from './search';

export async function getMovieListApi(
  searchText: string,
  year: string,
): Promise<Movie[]> {
  try {
    const results = await searchMovieApi(searchText, year);
    const movies: Movie[] = [];
    for await (const movieSearch of results.Search) {
      try {
        const movie = await getMovieApi(movieSearch.Title, movieSearch.Year);
        const alreadyExists = movies.find(m => m.imdbID === movie.imdbID);
        if (!alreadyExists) {
          movies.push(movie);
        }
      } catch (error) {
        console.log('Error en getMovieListApi', error);
      }
    }
    return movies;
  } catch (error) {
    throw error;
  }
}
