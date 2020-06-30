import * as actionsType from './Auth.actionsTypes';

export const setProfileData = (profilePhoto, name) => {
  return {type: actionsType.USER_AUTH_SUCCESS, profilePhoto, name};
};

