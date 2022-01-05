import React from 'react';
import {SafeAreaView} from 'react-native';
import MovieDetailComponent from '../components/MovieDetailComponent';
import useMovieDetailState from '../hooks/useMovieDetailState';
import {MovieDetail} from '../interface/MovieDetail';
import DetailRouteParam from '../types/DetailRouteParam';

type DetailScreenProps = {
  route: {
    params: DetailRouteParam;
  };
  movie: MovieDetail;
};

export default function DetailScreen(props: DetailScreenProps) {
  const {
    route: {
      params: {imdbID},
    },
  } = props;
  const movie = useMovieDetailState(imdbID);
  return (
    <SafeAreaView>
      {movie && <MovieDetailComponent movie={movie} />}
    </SafeAreaView>
  );
}
