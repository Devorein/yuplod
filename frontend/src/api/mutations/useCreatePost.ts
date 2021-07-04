import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { API_ENDPOINT, JWT_TOKEN_LS_KEY } from '../../constants';
import {
  IApiError,
  IApiSuccess,
  ICreatePostPayload,
  ICreatePostResponse
} from '../../types';

export function useCreatePostMutation() {
  const mutation = useMutation<
    AxiosResponse<IApiSuccess<ICreatePostResponse>>,
    AxiosResponse<IApiError>,
    ICreatePostPayload
  >((createPostData) => {
    const token = localStorage.getItem(JWT_TOKEN_LS_KEY);
    return axios.post(
      `${API_ENDPOINT}/posts`,
      {
        data: { ...createPostData, image_url: '' }
      },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
  });

  return mutation;
}
