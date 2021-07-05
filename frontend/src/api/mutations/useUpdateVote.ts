import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { API_ENDPOINT, JWT_TOKEN_LS_KEY } from '../../constants';
import {
  IApiError,
  IApiSuccess,
  IUpdateVotePayload,
  IUpdateVoteResponse
} from '../../types';

export function useUpdateVoteMutation() {
  const mutation = useMutation<
    AxiosResponse<IApiSuccess<IUpdateVoteResponse>>,
    AxiosResponse<IApiError>,
    IUpdateVotePayload
  >((deleteVoteData) => {
    const token = localStorage.getItem(JWT_TOKEN_LS_KEY);
    return axios.put(`${API_ENDPOINT}/votes`, {
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        data: deleteVoteData
      }
    });
  });

  return mutation;
}
