// import { RootState } from '@redux/reducers';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import {LoginInput} from '../redux/action-types'
const useLogin = () => {
//   const loading = useSelector<RootState>((state) => state.masterData.getMasterDataState.loading) as boolean;
//   const reloadData = useSelector<RootState>((state) => state.masterData.getMasterDataState.reloadData) as boolean;
//   const variables = useSelector<RootState>(
//     (state) => state.masterData.getMasterDataState.variables,
//   ) as AdminGetAllMasterDataQueryVariables;

  const dispatch = useDispatch();
  const onLogin = useCallback((data: LoginInput) => {
    dispatch(login(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onLogin,
  };
};

export default useLogin;
