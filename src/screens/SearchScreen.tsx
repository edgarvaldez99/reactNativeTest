import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import MovieListComponent from '../components/MovieListComponent';
import SearchComponent from '../components/SearchComponent';

export default function SearchScreen() {
  const [movies, setMovies] = useState([]);

  return (
    <SafeAreaView>
      <SearchComponent onChangeMovies={setMovies} />
      <MovieListComponent movies={movies} />
    </SafeAreaView>
  );
}
