import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Auth from '../pages/auth/components/Auth';
import Movies from './../pages/movies-main/components/Movies'
import Movie from './../pages/movies-main/components/Movie'
import Favourites from '../pages/movies-main/components/Favourites'

const AppNavigator = createStackNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        header: null,
      },
    },
    Movies: {
        screen: Movies,
        navigationOptions: {
            header: null,
        },
    },
    Movie: {
        screen: Movie,
        navigationOptions: {
            header: null,
        },
    },
    Favourites:{
        screen: Favourites,
        navigationOptions: {
            header: null,
        },
    }
  },
  {
    navigationOptions: {
      initialRouteName: 'Auth',
      header: null,
    },
  },
);

export default AppNavigator;
