import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {addToFavourite, removeFromFavourite} from '../actions/Movies.actions';

const Movie = props => {
  const {
    moviePoster,
    movieTitle,
    movieOverview,
    movieRating,
    movieId,
    favouritesArr,
  } = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const renderHeartIcon = () => {
    let currId = movieId;
    let isFavourite = !favouritesArr.currId != undefined ? true : false;
    return (
      <TouchableOpacity
        style={styles.favouriteBtnContainer}
        onPress={() => {
          {
            favouritesArr[movieId]
              ? dispatch(removeFromFavourite(movieId))
              : dispatch(
                  addToFavourite(
                    moviePoster,
                    movieTitle,
                    movieOverview,
                    movieRating,
                    movieId,
                  ),
                );
          }
        }}>
        <Image
          source={
            isFavourite
              ? require('../assets/images/full-heart.png')
              : require('../assets/images/hollow-heart.png')
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.amount}>{Object.values(favouritesArr).length}</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Favourites')}
          style={styles.favouriteContainer}>
          <Image
            source={require('../assets/images/full-heart.png')}
            style={styles.favouriteIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => props.navigation.pop()}>
          <Image
            style={styles.backBtn}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            source={require('../assets/images/back.png')}
          />
        </TouchableOpacity>
      </View>

      <Image style={styles.image} source={{uri: moviePoster}} />

      <ScrollView style={styles.scrollView}>
        {renderHeartIcon()}
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {movieTitle}
          </Text>
          <Text style={styles.descriptionText}>{movieOverview}</Text>
          <Text numberOfLines={1} style={styles.ratingText}>
            Rating: {movieRating}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  backBtn: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 12,
    start: 5,
  },
  scrollView: {
    flex: 1,
  },
  favouriteIcon: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  amount: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginTop: 25,
  },

  descriptionText: {
    fontSize: 12,
    textAlign: 'left',
    color: '#a0a0a0',
    width: '90%',
    marginBottom: 10,
  },

  ratingText: {
    fontSize: 12,
    textAlign: 'right',
    alignSelf: 'stretch',
    color: '#a0a0a0',
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 400,
    marginTop: 15,
  },

  infoContainer: {
    marginHorizontal: 10,
    flex: 1,
    marginBottom: 20,
  },

  favouriteBtnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 15,
    right: 15,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  favourites: {
    fontSize: 16,
    lineHeight: 18,
    marginStart: 10,
    textAlign: 'left',
  },
  favouriteContainer: {
    flexDirection: 'row',
  },
});

export default Movie;
