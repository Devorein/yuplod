import axios from 'axios';
import { useQuery } from 'react-query';
import { API_ENDPOINT } from '../../constants';
import { IPostWithUserAndVotes } from '../../types';

export default function useGetAllPosts() {
  const query = useQuery('posts', () => {
    return axios.get<{ data: IPostWithUserAndVotes[] }>(
      `${API_ENDPOINT}/posts`
    );
  });

  return query;
}
