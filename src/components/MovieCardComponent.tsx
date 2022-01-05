import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Movie} from '../interface/Movie';
import styles from '../styles/components/MovieCardComponent';
import DetailNavigateParam from '../types/DetailNavigateParam';

type MovieCardProps = {movie: Movie};

export default function MovieCardComponent(props: MovieCardProps) {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DetailNavigateParam>>();
  const {movie} = props;
  const source = {uri: movie.Poster};

  const goToMovie = () => {
    navigate('Detail', {imdbID: movie.imdbID});
  };

  return (
    <TouchableWithoutFeedback onPress={goToMovie}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <Image source={source} style={styles.image} />
          <Text style={styles.name}>{movie.Title}</Text>
          <Text style={styles.name}>{movie.imdbRating}</Text>
          <Text style={styles.name} numberOfLines={1}>
            {movie.Plot}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
