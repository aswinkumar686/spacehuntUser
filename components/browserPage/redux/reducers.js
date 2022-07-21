import constants from './constants';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case constants.SCHOOL_LIST_REQUESTED:
      return {
        ...state,
        loader: false,
        isLoggedIn: false,
        redirect: false,
        userLoggedIn: '',
      };
    case constants.SCHOOL_LIST_SUCCESS:
      return {
        ...state,
        loader: false,
      data: payload
      };
    case constants.SCHOOL_LIST_FAILURE:
      return {
        ...state,
        loader: false,
        token: null,
        redirect: false,
        isLoggedIn: false,
        rememberMe: false,
      };

    default:
      return state;
  }
};
