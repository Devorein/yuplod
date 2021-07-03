export interface IPost{
  id: number
  created_at: number
  updated_at: number
  image_url: string
  caption: string
  user_id: number
}

export interface IUser{
  id: number
  created_at: number
  updated_at: number
  email: string
  username: string
  password: string
}