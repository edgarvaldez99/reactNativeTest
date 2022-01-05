import React from 'react';
import {FlatList} from 'react-native';
import MovieCardComponent from './MovieCardComponent';
import styles from '../styles/components/MovieListComponent';
import {Movie} from '../interface/Movie';

type MovieListProps = {movies: Movie[]};

export default function MovieListComponent(props: MovieListProps) {
  const {movies} = props;

  return (
    <FlatList
      data={movies}
      numColumns={2}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      keyExtractor={item => String(item.imdbID)}
      renderItem={({item}) => <MovieCardComponent movie={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}
