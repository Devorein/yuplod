import axios from 'axios';
import { useQuery } from 'react-query';
import { IPostWithUser } from '../../types';

export default function useGetAllPosts() {
  const query = useQuery(
    'posts',
    () => {
      return axios.get<{ data: IPostWithUser[] }>(
        'http://localhost:4000/api/v1/posts'
      );
    },
    {
      retry: false
    }
  );

  return query;
}
