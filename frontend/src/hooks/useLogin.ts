import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RootContext } from '../contexts';
import { IUser } from '../types';

export function useLogin() {
  const { setCurrentUser } = useContext(RootContext);
  const history = useHistory();

  return {
    success(data: { user: IUser; token: string }) {
      const { token, user } = data;
      setCurrentUser(user);
      localStorage.setItem('yuplod.token', token);
      history.push('/');
    }
  };
}
