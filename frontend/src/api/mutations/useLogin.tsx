import axios, { AxiosResponse } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { IApiError, IApiSuccess, ILoginInput } from "../../types";

interface UseRegisterMutationProps {
  onError?: UseMutationOptions<AxiosResponse<IApiSuccess<{ token: string }>>, AxiosResponse<IApiError>, ILoginInput>["onError"],
  onSuccess?: UseMutationOptions<AxiosResponse<IApiSuccess<{ token: string }>>, AxiosResponse<IApiError>, ILoginInput>["onSuccess"],
  onSettled?: UseMutationOptions<AxiosResponse<IApiSuccess<{ token: string }>>, AxiosResponse<IApiError>, ILoginInput>["onSettled"],
}

export default function useRegisterMutation(props?: UseRegisterMutationProps) {
  const mutation = useMutation((loginData) => {
    return axios.post(`http://localhost:4000/api/v1/auth/login`, { data: loginData });
  }, {
    onError: props?.onError,
    onSuccess: props?.onSuccess,
    onSettled: props?.onSettled,
  });

  return mutation;
}