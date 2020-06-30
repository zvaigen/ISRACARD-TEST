import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {getAllMovies, setSelectedMovie} from '../actions/Movies.actions';
import MovieItem from './MovieItem';

const Movies = props => {
  const {moviesArr} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  onMoviePress = item => {
    dispatch(
      setSelectedMovie(
        `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`,
        item.original_title,
        item.overview,
        item.vote_average,
        item.id,
      ),
    );

    props.navigation.navigate('Movie');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.headerText}>Popular Movies</Text>

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => props.navigation.pop()}>
        <Image
          style={styles.backBtn}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          source={require('../assets/images/back.png')}
        />
      </TouchableOpacity>

      <FlatList
        data={moviesArr}
        style={styles.list}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item}) => (
          <MovieItem
            movieImage={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
            movieName={item.original_title}
            movieDescription={item.overview}
            movieRating={item.vote_average}
            onPress={() => {
              onMoviePress(item);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 18,
    height: 25,
    marginTop: 25,
  },
  backBtn: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 12,
    start: 5,
  },
  list: {
    marginTop: 25,
  },
});

export default Movies;
