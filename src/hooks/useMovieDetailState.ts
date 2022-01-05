import {useState, useEffect} from 'react';
import {getMovieDetailApi} from '../api/movie-detail';
import {MovieDetail} from '../interface/MovieDetail';

export default function useMovieDetailState(imdbID: string) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const detail = await getMovieDetailApi(imdbID);
        setMovie(detail);
      } catch (error) {
        console.error('Error in useMovieDetailState', error);
      }
    })();
  }, [imdbID]);

  return movie;
}
