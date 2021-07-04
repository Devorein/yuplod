import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IApiError, IApiSuccess, ILoginInput, IUser } from "../../types";

export default function useRegisterMutation() {
  const mutation = useMutation<AxiosResponse<IApiSuccess<{ user: IUser, token: string }>>, AxiosResponse<IApiError>, ILoginInput>((loginData) => {
    return axios.post(`http://localhost:4000/api/v1/auth/login`, { data: loginData });
  });

  return mutation;
}