import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { API_ENDPOINT } from "../../constants";
import { IApiError, IApiSuccess, IRegisterAuthPayload, IRegisterAuthResponse } from "../../types";

export function useRegisterMutation() {
  const mutation = useMutation<AxiosResponse<IApiSuccess<IRegisterAuthResponse>>, AxiosResponse<IApiError>, IRegisterAuthPayload>((registerData) => {
    return axios.post(`${API_ENDPOINT}/auth/register`, { data: registerData });
  });

  return mutation;
}