import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { API_ENDPOINT, JWT_TOKEN_LS_KEY } from '../../constants';
import { IApiError, IApiSuccess, IDeleteVotePayload } from '../../types';

export function useDeleteVoteMutation() {
  const mutation = useMutation<
    AxiosResponse<IApiSuccess<null>>,
    AxiosResponse<IApiError>,
    IDeleteVotePayload
  >((deleteVoteData) => {
    const token = localStorage.getItem(JWT_TOKEN_LS_KEY);
    return axios.delete(`${API_ENDPOINT}/votes`, {
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
