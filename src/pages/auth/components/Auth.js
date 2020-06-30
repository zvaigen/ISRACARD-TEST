import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {setProfileData} from '../actions/Auth.actions';

const Auth = props => {
  const {name, profilePhoto, isUserLogged} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '179039608484-l33d3bnnu4bpnjrmuipj19g2tugvpm5n.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // iosClientId: '<>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      console.warn({userInfo: info});
      dispatch(setProfileData(info.user.photo, info.user.givenName));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const renderMoviesBtn = () => {
    return (
      <TouchableOpacity
        style={styles.moviesBtn}
        onPress={() => {
          props.navigation.navigate('Movies');
        }}>
        <Text style={styles.moviesBtnText}>Movies List</Text>
      </TouchableOpacity>
    );
  };

  const renderProfilePicture = () => {
    return (
      <Image
        source={
          profilePhoto ? {uri: profilePhoto} : require('../assets/profile.png')
        }
        style={styles.profileImage}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.row}>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>{`${
          isUserLogged ? name : 'Stranger'
        }!`}</Text>
      </View>

      {renderProfilePicture()}
      {/* {renderMoviesBtn()} */}

      <View style={styles.container}>
        {isUserLogged ? renderMoviesBtn() : null}
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 50,
    flex: 1,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 220,
  },
  text: {
    fontSize: 22,
  },
  profileImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    marginTop: 25,
    borderRadius: 150,
  },
  moviesBtn: {
    width: '90%',
    backgroundColor: '#4784EF',
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
    height: 30,
    borderRadius: 22,
    lineHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moviesBtnText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default Auth;
