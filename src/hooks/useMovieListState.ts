import {useState, useEffect} from 'react';
import {getMovieListApi} from '../api/movie-list';
import {Movie} from '../interface/Movie';

export default function useMovieListState(search: string, year: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await getMovieListApi(search, year);
        setMovies(list);
      } catch (error) {
        console.error('Error in useMovieListState', error);
      }
    })();
  }, [search, year]);

  return movies;
}
