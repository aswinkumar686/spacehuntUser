import constants from './constants';

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.LOGIN_REQUESTED:
      sessionStorage.removeItem('auth_token');
      localStorage.removeItem('auth_token');
      return {
        ...state,
        loader: true,
        isLoggedIn: false,
        userLoggedIn: '',
      };
    case constants.LOGIN_SUCCESS:
      // if (state.rememberMe) {
      //   localStorage.setItem(
      //     'username',
      //     `${payload.data.username}`,
      //   );
      //   // localStorage.setItem('avatar', payload.data.data.userDetails.profile_pic);
      //   localStorage.setItem('auth_token', payload.data.accessToken);
      // }
      // sessionStorage.setItem(
      //   'name',
      //   `${payload.admin.firstName} ${payload.admin.lastName}`,
      // );
      // // sessionStorage.setItem('avatar', payload.data.data.userDetails.profile_pic);
      // sessionStorage.setItem('auth_token', payload.data.accessToken);
      return {
        ...state,
        loader: false,
        isLoggedIn: true,
        userLoggedIn: payload.data.username,
        redirect: true
      };
    case constants.LOGIN_FAILURE:
      if (initialState.rememberMe) {
        localStorage.clear();
      }
      sessionStorage.clear();
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
