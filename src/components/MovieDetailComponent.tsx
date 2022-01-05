import React from 'react';
import {View, Text, Image} from 'react-native';
import {MovieDetail} from '../interface/MovieDetail';
import styles from '../styles/components/MovieDetailComponent';

type MovieDetailProps = {
  movie: MovieDetail;
};

export default function MovieDetailComponent(props: MovieDetailProps) {
  const {movie} = props;
  const source = {uri: movie.Poster};

  return (
    <View style={styles.card}>
      <View style={styles.spacing}>
        <Image source={source} style={styles.image} />
        <Text style={styles.name}>{movie.Title}</Text>
        <Text style={styles.name}>{movie.imdbRating}</Text>
        <Text style={styles.name}>{movie.Genre}</Text>
        <Text style={styles.name}>{movie.Plot}</Text>
        <Text style={styles.name}>{movie.Director}</Text>
        <Text style={styles.name}>{movie.Actors}</Text>
        <Text style={styles.name}>{movie.Writer}</Text>
        <Text style={styles.name}>{movie.Runtime}</Text>
        <Text style={styles.name}>{movie.Released}</Text>
      </View>
    </View>
  );
}
