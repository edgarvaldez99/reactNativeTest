import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {getMovieListApi} from '../api/movie-list';
import styles from '../styles/components/SearchComponent';

type SearchComponentProps = {
  onChangeMovies: Function;
};

export default function SearchComponent(props: SearchComponentProps) {
  const {onChangeMovies} = props;
  const [search, setSearch] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const searchPress = async () => {
    try {
      const list = await getMovieListApi(search, year);
      onChangeMovies(list);
    } catch (error) {
      console.error('Error in useMovieListState', error);
    }
  };

  return (
    <>
      <TextInput
        style={styles.search}
        onChangeText={setSearch}
        placeholder="Buscar..."
        value={search}
      />
      <TextInput
        style={styles.input}
        onChangeText={setYear}
        placeholder="Escribir año..."
        value={year}
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={searchPress} />
    </>
  );
}
