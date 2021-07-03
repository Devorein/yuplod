-- SQL code to create users table
create table users (
  id serial primary key,
  username varchar(255),
  email varchar(255),
  password varchar(255)
  created_at timestamp,
  updated_at timestamp
);

-- SQL Code to create posts table
create table posts (
  id serial primary key,
  user_id integer references users(id) on delete cascade,
  image_url text,
  caption text,
  created_at timestamp,
  updated_at timestamp
);
