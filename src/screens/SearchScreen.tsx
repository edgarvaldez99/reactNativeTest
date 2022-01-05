import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import MovieListComponent from '../components/MovieListComponent';
import useMovieListState from '../hooks/useMovieListState';
import styles from '../styles/screens/SearchScreen';

export default function SearchScreen() {
  const [search, setSearch] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const movies = useMovieListState(search, year);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.search}
        onChangeText={e => setSearch(e)}
        placeholder="Buscar..."
        value={search}
      />
      <TextInput
        style={styles.input}
        onChangeText={e => setYear(e)}
        placeholder="Escribir año..."
        value={year}
        keyboardType="numeric"
      />
      <MovieListComponent movies={movies} />
    </SafeAreaView>
  );
}
