import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ENDPOINT, JWT_TOKEN_LS_KEY } from '../../constants';
import { IPostWithUserAndVotes } from '../../types';

export default function useGetAllPosts() {
  const token = localStorage.getItem(JWT_TOKEN_LS_KEY);
  const query = useQuery('posts', () => {
    return axios.get<{ data: IPostWithUserAndVotes[] }>(
      `${API_ENDPOINT}/posts`,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
  });

  return query;
}
