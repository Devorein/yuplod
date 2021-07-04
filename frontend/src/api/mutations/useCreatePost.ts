import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { API_ENDPOINT } from '../../constants';
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
    return axios.post(`${API_ENDPOINT}/post`, { data: createPostData });
  });

  return mutation;
}
