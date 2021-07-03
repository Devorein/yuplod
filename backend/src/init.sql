-- SQL Code to create posts table
create table posts (
  id serial primary key,
  user_id integer not null,
  image_url text,
  caption text,
  created_at timestamp,
  updated_at timestamp
);