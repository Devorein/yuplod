import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IApiError, IApiSuccess, IRegisterAuthPayload, IRegisterAuthResponse } from "../../types";

export function useRegisterMutation() {
  const mutation = useMutation<AxiosResponse<IApiSuccess<IRegisterAuthResponse>>, AxiosResponse<IApiError>, IRegisterAuthPayload>((registerData) => {
    return axios.post(`http://localhost:4000/api/v1/auth/register`, { data: registerData });
  });

  return mutation;
}