import axios from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { IApiError, IApiSuccess, IUser, IUserCreate } from "../../types";

interface UseRegisterMutationProps {
  onError?: UseMutationOptions<IApiSuccess<IUser>, IApiError, IUserCreate>["onError"],
  onSuccess?: UseMutationOptions<IApiSuccess<IUser>, IApiError, IUserCreate>["onSuccess"],
  onSettled?: UseMutationOptions<IApiSuccess<IUser>, IApiError, IUserCreate>["onSettled"],
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