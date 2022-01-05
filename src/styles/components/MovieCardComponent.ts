import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    display: 'flex',
    alignContent: 'space-around',
    height: 220,
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
  },
  spacing: {
    flex: 1,
    padding: 10,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 90,
    height: 90,
  },
});

export default styles;
