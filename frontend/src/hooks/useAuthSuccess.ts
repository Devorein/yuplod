import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RootContext } from '../contexts';
import { IUser } from '../types';

export function useAuthSuccess() {
  const { setCurrentUser } = useContext(RootContext);
  const history = useHistory();

  return function (data: { user: IUser; token: string }) {
    const { token, user } = data;
    setCurrentUser(user);
    localStorage.setItem('yuplod.token', token);
    history.push('/');
  };
}
