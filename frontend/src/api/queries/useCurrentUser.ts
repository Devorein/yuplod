import axios from 'axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { RootContext } from '../../contexts';
import { IUser } from '../../types';

export default function useCurrentUser() {
  const { setCurrentUser } = useContext(RootContext);
  const query = useQuery('me', async () => {
    const token = localStorage.getItem('yuplod.token');
    if (token) {
      const { data } = await axios.get<{ data: IUser }>(
        `http://localhost:4000/api/v1/users/me`,
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
