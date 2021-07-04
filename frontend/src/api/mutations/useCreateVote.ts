import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { API_ENDPOINT, JWT_TOKEN_LS_KEY } from '../../constants';
import {
  IApiError,
  IApiSuccess,
  ICreateVotePayload,
  ICreateVoteResponse
} from '../../types';

export function useCreateVoteMutation() {
  const mutation = useMutation<
    AxiosResponse<IApiSuccess<ICreateVoteResponse>>,
    AxiosResponse<IApiError>,
    ICreateVotePayload
  >((createVoteData) => {
    const token = localStorage.getItem(JWT_TOKEN_LS_KEY);
    return axios.post(
      `${API_ENDPOINT}/votes`,
      {
        data: createVoteData
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
