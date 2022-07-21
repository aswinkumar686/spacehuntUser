import spaceHuntGateway from '../../../config/service';
import userEndpoints from '../../../config/serviceEndpoints';
import types from './constants';

export const getSchoolsList = () => async (dispatch) => {
  dispatch({
      type: types.SCHOOL_LIST_REQUESTED,
  });
  try {
      const response = await spaceHuntGateway.get(
          userEndpoints.SCHOOL_LIST);
          const { success, data, message } = await response.data;
          console.log(data);
          if (success) {
              dispatch({
              type: types.SCHOOL_LIST_SUCCESS,
              payload: data
          });
      } else {
          dispatch({
              type: types.SC,
              payload: message
          });
      }
  } catch (error) {
      dispatch({
          type: types.SCHOOL_LIST_FAILURE
      });
  }
};
export const validateToken = (data) => async (dispatch) => {
  dispatch({
    type: types.VALIDATE_AUTH_TOKEN_REQUEST,
  });
  try {
    const response = await spaceHuntGateway.post(userEndpoints.VALIDATE_TOKEN, {
      verifyToken: true,
    });
    const {
      data: { success, permissions },
    } = response;
    sessionStorage.setItem('roles', JSON.stringify(permissions));
    if (success) {
      await dispatch({
        type: types.VALIDATE_AUTH_TOKEN_SUCCESS,
        payload: response.data,
      });
    } else {
      await dispatch({
        type: types.VALIDATE_AUTH_TOKEN_FAILED,
      });
      localStorage.clear();
      sessionStorage.clear();
    }
  } catch (error) {
    dispatch({
      type: types.VALIDATE_AUTH_TOKEN_FAILED,
    });
  }
};

export const resetMessages = () => async (dispatch) => {
    dispatch({
      type: types.RESET_MESSAGES,
    });
  };
