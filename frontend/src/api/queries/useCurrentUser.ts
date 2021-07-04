import axios from 'axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { API_ENDPOINT, JWT_TOKEN_LS_KEY } from '../../constants';
import { RootContext } from '../../contexts';
import { IUser } from '../../types';

export default function useCurrentUser() {
  const { setCurrentUser } = useContext(RootContext);
  const query = useQuery('me', async () => {
    const token = localStorage.getItem(JWT_TOKEN_LS_KEY);
    if (token) {
      const { data } = await axios.get<{ data: IUser }>(
        `${API_ENDPOINT}/users/me`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      if (data.data) {
        setCurrentUser(data.data);
      }
    }
  });

  return query;
}
