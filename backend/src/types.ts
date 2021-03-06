import { Request } from 'express';
export interface IPost {
  id: number;
  created_at: string;
  updated_at: string;
  image_url: string;
  caption: string;
  user_id: number;
}

export interface IPostWithVotesAndUsers extends IPost {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  votes: number;
  voted: number;
}

export interface IUser {
  id: number;
  created_at: string;
  updated_at: string;
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface IUserCreate {
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface IPostCreate {
  image_url: string;
  caption: string;
}

export interface IPostUpdate extends Partial<IPostCreate> {}
export interface ILoginInput {
  password: string;
  username: string;
  email: string;
}

export type IRequest = Request & { user: IUser };

export interface IVote {
  amount: number;
  user_id: number;
  post_id: number;
}
