import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const MovieItem = ({
  movieImage,
  movieName,
  movieDescription,
  movieRating,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle}>{movieName}</Text>
        <Text numberOfLines={5} style={styles.descriptionText}>
          {movieDescription}
        </Text>
        <Text numberOfLines={1} style={styles.ratingText}>
          Rating: {movieRating}
        </Text>
      </View>
      <Image style={styles.coverPhoto} source={{uri: movieImage}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 160,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    elevation: 4,
  },

  coverPhoto: {
    width: 100,
    height: 160,
    marginTop: 0,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },

  infoContainer: {
    height: '100%',
    padding: 12,
  },

  movieTitle: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 17,
    textAlign: 'left',
    color: '#111111',
    alignSelf: 'flex-start',
  },

  descriptionText: {
    fontSize: 12,
    textAlign: 'left',
    color: '#000000',
    maxWidth: 260,
    marginVertical: 4,
  },

  ratingText: {
    width: '100%',
    textAlign: 'right',
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 20,
    marginVertical: 4,
  },
});

export default MovieItem;
