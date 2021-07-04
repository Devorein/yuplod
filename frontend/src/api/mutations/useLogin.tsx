import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { API_ENDPOINT } from "../../constants";
import { IApiError, IApiSuccess, ILoginAuthPayload, ILoginAuthResponse } from "../../types";

export function useLoginMutation() {
  const mutation = useMutation<AxiosResponse<IApiSuccess<ILoginAuthResponse>>, AxiosResponse<IApiError>, ILoginAuthPayload>((loginData) => {
    return axios.post(`${API_ENDPOINT}/auth/login`, { data: loginData });
  });

  return mutation;
}