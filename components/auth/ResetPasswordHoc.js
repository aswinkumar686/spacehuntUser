import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoaderSpinner from '../../utils/Loader';
import { validateResetLink } from './redux/actions';

const ResetPasswordHoc = (Component) => {
  const ResetPasswordWrapper = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { validToken, loader } = useSelector((state) => state.auth);

    useEffect(() => {
      dispatch(validateResetLink(params.id));
    }, []);
    return (
      <>
        {(!validToken || loader) && <LoaderSpinner />}
        <Component />
      </>
    )
  }
  return ResetPasswordWrapper;
}
export default ResetPasswordHoc;