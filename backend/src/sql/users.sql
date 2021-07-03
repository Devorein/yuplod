-- SQL code to create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Suzette', 'Filliskirk', 'sfilliskirk0@gravatar.com', 'mhsvMAw', 'sfilliskirk0', '2021-05-22T21:38:22Z', '2021-06-16T04:16:42Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Ugo', 'Shellum', 'ushellum1@sitemeter.com', 'pWrW01Y6', 'ushellum1', '2021-05-23T11:40:31Z', '2021-06-07T12:15:33Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Abigail', 'Lethbury', 'alethbury2@so-net.ne.jp', 'VgX3dhl4vj', 'alethbury2', '2021-05-25T11:14:22Z', '2021-06-13T08:36:55Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Bill', 'Yeell', 'byeell3@amazonaws.com', 'NjiTCCf', 'byeell3', '2021-05-05T12:22:26Z', '2021-06-28T23:06:34Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Kaela', 'Ridding', 'kridding4@nbcnews.com', 'tBxhRdyENTkQ', 'kridding4', '2021-05-01T06:01:03Z', '2021-06-10T07:29:31Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Myrta', 'O'' Byrne', 'mobyrne5@t-online.de', 'P9Cn9X0Jp', 'mobyrne5', '2021-05-09T19:59:06Z', '2021-06-27T20:19:24Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Ina', 'Nestoruk', 'inestoruk6@dyndns.org', 'byMVhj', 'inestoruk6', '2021-05-19T07:00:50Z', '2021-06-12T23:07:22Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Althea', 'Downgate', 'adowngate7@prnewswire.com', 'QgkmT0b', 'adowngate7', '2021-05-04T20:17:22Z', '2021-06-24T02:53:34Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Cchaddie', 'McFeat', 'cmcfeat8@upenn.edu', 'rsGZYXXYYyJg', 'cmcfeat8', '2021-05-28T21:32:16Z', '2021-06-10T01:14:16Z');
INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ('Cathrine', 'Thieme', 'cthieme9@acquirethisname.com', 'tre4Q6hIxRCd', 'cthieme9', '2021-05-24T13:54:59Z', '2021-06-09T18:58:29Z');