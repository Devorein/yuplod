import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IApiError, IApiSuccess, IUser, IUserCreate } from "../../types";

export default function useRegisterMutation() {
  const mutation = useMutation<AxiosResponse<IApiSuccess<{ user: IUser, token: string }>>, AxiosResponse<IApiError>, IUserCreate>((registerData) => {
    return axios.post(`http://localhost:4000/api/v1/auth/register`, { data: registerData });
  });

  return mutation;
}