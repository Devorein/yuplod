import axios, { AxiosResponse } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { IApiError, IApiSuccess, IUser, IUserCreate } from "../../types";

interface UseRegisterMutationProps {
  onError?: UseMutationOptions<AxiosResponse<IApiSuccess<{ user: IUser, token: string }>>, AxiosResponse<IApiError>, IUserCreate>["onError"],
  onSuccess?: UseMutationOptions<AxiosResponse<IApiSuccess<{ user: IUser, token: string }>>, AxiosResponse<IApiError>, IUserCreate>["onSuccess"],
  onSettled?: UseMutationOptions<AxiosResponse<IApiSuccess<{ user: IUser, token: string }>>, AxiosResponse<IApiError>, IUserCreate>["onSettled"],
}

export default function useRegisterMutation(props?: UseRegisterMutationProps) {
  const mutation = useMutation((registerData) => {
    return axios.post(`http://localhost:4000/api/v1/auth/register`, { data: registerData });
  }, {
    onError: props?.onError,
    onSuccess: props?.onSuccess,
    onSettled: props?.onSettled,
  });

  return mutation;
}