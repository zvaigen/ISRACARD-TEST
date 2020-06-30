import * as actionTypes from '../actions/Auth.actionsTypes.js';

const INITIAL_STATE = {
  profilePhoto: null,
  name: null,
  isUserLogged: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTH_SUCCESS:
      return {
        ...state,
        profilePhoto: action.profilePhoto,
        name: action.name,
        isUserLogged: true,
      };

    default:
      return state;
  }
};
