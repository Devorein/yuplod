import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IApiError, IApiSuccess, ILoginAuthPayload, ILoginAuthResponse } from "../../types";

export function useLoginMutation() {
  const mutation = useMutation<AxiosResponse<IApiSuccess<ILoginAuthResponse>>, AxiosResponse<IApiError>, ILoginAuthPayload>((loginData) => {
    return axios.post(`http://localhost:4000/api/v1/auth/login`, { data: loginData });
  });

  return mutation;
}