import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RootContext } from '../contexts';

export function useRedirect(forAuth: boolean) {
  const { currentUser } = useContext(RootContext);
  const history = useHistory();
  if (forAuth ? !currentUser : currentUser) {
    history.push('/');
  }
  return currentUser;
}
