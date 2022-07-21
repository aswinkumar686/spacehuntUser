import spaceHuntGateway from '../../../config/service';
import userEndpoints from '../../../config/serviceEndpoints';
import types from './constants';

export const spaceHuntLogin = (param) => async (dispatch) => {
  dispatch({
      type: types.LOGIN_REQUESTED,
  });
  try {
      const response = await spaceHuntGateway.post(
          userEndpoints.USER_SIGNIN, param);
          const { success, message } = await response.data;
          if (success) {
              dispatch({
              type: types.LOGIN_SUCCESS,
              payload: response.data
          });
      } else {
          dispatch({
              type: types.LOGIN_FAILURE,
              payload: message
          });
      }
  } catch (error) {
      dispatch({
          type: types.LOGIN_FAILURE
      });
  }
};
// export const validateToken = (data) => async (dispatch) => {
//   dispatch({
//     type: types.VALIDATE_AUTH_TOKEN_REQUEST,
//   });
//   try {
//     const response = await spaceHuntGateway.post(userEndpoints.VALIDATE_TOKEN, {
//       verifyToken: true,
//     });
//     const {
//       data: { success, permissions },
//     } = response;
//     sessionStorage.setItem('roles', JSON.stringify(permissions));
//     if (success) {
//       await dispatch({
//         type: types.VALIDATE_AUTH_TOKEN_SUCCESS,
//         payload: response.data,
//       });
//     } else {
//       await dispatch({
//         type: types.VALIDATE_AUTH_TOKEN_FAILED,
//       });
//       localStorage.clear();
//       sessionStorage.clear();
//     }
//   } catch (error) {
//     dispatch({
//       type: types.VALIDATE_AUTH_TOKEN_FAILED,
//     });
//   }
// };

export const resetMessages = () => async (dispatch) => {
    dispatch({
      type: types.RESET_MESSAGES,
    });
  };
