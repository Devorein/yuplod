import { Theme, ThemeOptions } from '@material-ui/core';

export type Color = {
  dark: string;
  base: string;
  light: string;
  opposite_dark: string;
  opposite_base: string;
  opposite_light: string;
};

export interface ExtendedThemeOptions extends ThemeOptions {
  color: Color;
}

export interface ExtendedTheme extends Theme {
  color: Color;
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
