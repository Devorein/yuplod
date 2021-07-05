import { Theme, ThemeOptions } from '@material-ui/core';

export type Color = {
  dark: string;
  base: string;
  light: string;
  opposite_dark: string;
  opposite_base: string;
  opposite_light: string;
};

export type AllowedTheme = 'dark' | 'light';
export interface ExtendedThemeOptions extends ThemeOptions {
  color: Color;
  theme: AllowedTheme;
}

export interface ExtendedTheme extends Theme {
  color: Color;
  theme: AllowedTheme;
}

export interface IPost {
  id: number;
  created_at: string;
  updated_at: string;
  image_url: string;
  caption: string;
  user_id: number;
}

export interface IUser {
  id: number;
  created_at: string;
  updated_at: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
}

export interface IApiSuccess<T> {
  data: T;
  status: 'success';
}

export interface FieldError {
  field: string | null;
  message: string;
}
export interface IApiError {
  messages: FieldError[];
  status: 'error';
}

export interface IPostWithUserAndVotes extends IPost {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  votes: string;
  voted: number | null;
}

export interface IRegisterAuthPayload {
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface IRegisterAuthResponse {
  user: IUser;
  token: string;
}

export interface IVote {
  amount: number;
  post_id: number;
  user_id: number;
}

export interface ILoginAuthResponse extends IRegisterAuthResponse {}
export interface ILoginAuthPayload extends IRegisterAuthPayload {}
export interface ICreateVoteResponse extends IVote {}
export interface ICreateVotePayload {
  post_id: number;
  amount: number;
}
export interface ICreatePostPayload {
  caption: string;
}
export interface ICreatePostResponse extends IPost {}

export interface IDeleteVotePayload {
  post_id: number;
}
