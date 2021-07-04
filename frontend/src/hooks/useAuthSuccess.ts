import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { JWT_TOKEN_LS_KEY } from '../constants';
import { RootContext } from '../contexts';
import { IUser } from '../types';

export function useAuthSuccess() {
  const { setCurrentUser } = useContext(RootContext);
  const history = useHistory();

  return function (data: { user: IUser; token: string }) {
    const { token, user } = data;
    setCurrentUser(user);
    localStorage.setItem(JWT_TOKEN_LS_KEY, token);
    history.push('/');
  };
}
