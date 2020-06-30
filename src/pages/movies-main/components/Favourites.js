import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getAllMovies} from '../actions/Movies.actions';
import MovieItem from './MovieItem';

const Favourites = props => {
  const {favouritesArr} = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <TouchableOpacity
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          style={styles.backBtnContainer}
          onPress={() => props.navigation.pop()}>
          <Image
            style={styles.backBtn}
            source={require('../assets/images/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Favorites</Text>
      </View>

      <FlatList
        data={Object.values(favouritesArr)}
        renderItem={({item}) => (
          <MovieItem
            movieImage={item.moviePoster}
            movieName={item.movieTitle}
            movieDescription={item.movieOverview}
            movieRating={item.movieRating}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#ffff',
    flex: 1,
  },

  headerTitle: {
    marginLeft: 80,
    height: 30,
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },

  backBtnContainer: {
    width: '10%',
  },

  backBtn: {
    width: 20,
    height: 20,
    marginTop: 23,
    marginStart: 5,
  },

  header: {
    flexDirection: 'row',
  },
});

export default Favourites;
