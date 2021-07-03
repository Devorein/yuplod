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

export interface IPostUpdate {
  image_url: string;
  caption: string;
}

export interface IPostCreate {
  image_url: string;
  caption: string;
  user_id: number;
}
