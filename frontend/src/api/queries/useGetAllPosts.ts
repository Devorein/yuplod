import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ENDPOINT } from '../../constants';
import { IPostWithUser } from '../../types';

export default function useGetAllPosts() {
  const query = useQuery(
    'posts',
    () => {
      return axios.get<{ data: IPostWithUser[] }>(`${API_ENDPOINT}/posts`);
    },
    {
      retry: false
    }
  );

  return query;
}
