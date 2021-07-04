DROP TABLE IF EXISTS votes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

-- SQL code to create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(25),
  last_name VARCHAR(25),
  username VARCHAR(25),
  email VARCHAR(50),
  password VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

ALTER TABLE users ADD CONSTRAINT email UNIQUE (email);
ALTER TABLE users ADD CONSTRAINT username UNIQUE (username);

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

-- SQL Code to create posts table
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  image_url TEXT,
  caption TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/487x134.png/5fa2dd/ffffff', 4, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '2021-05-04T21:06:11Z', '2021-06-02T10:11:58Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/400x166.png/dddddd/000000', 4, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '2021-05-21T17:41:27Z', '2021-06-05T03:01:45Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/445x233.png/dddddd/000000', 9, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '2021-05-12T18:32:27Z', '2021-06-05T12:20:42Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/331x135.png/cc0000/ffffff', 2, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '2021-05-05T08:29:44Z', '2021-06-11T11:41:31Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/417x206.png/cc0000/ffffff', 5, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '2021-05-14T10:08:42Z', '2021-06-14T04:28:15Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/282x103.png/ff4444/ffffff', 8, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2021-05-28T12:31:17Z', '2021-06-05T16:31:28Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/306x112.png/5fa2dd/ffffff', 1, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2021-05-06T21:32:49Z', '2021-06-13T13:46:49Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/395x244.png/ff4444/ffffff', 7, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '2021-05-11T23:40:49Z', '2021-06-06T08:33:00Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/264x134.png/5fa2dd/ffffff', 8, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '2021-05-28T19:34:23Z', '2021-06-02T11:35:43Z');
INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ('http://dummyimage.com/289x249.png/cc0000/ffffff', 5, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '2021-05-12T05:40:59Z', '2021-06-24T06:37:01Z');

-- SQL Code to create votes table
CREATE TABLE votes (
	id SERIAL PRIMARY KEY, 
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  amount INTEGER
);

INSERT INTO votes (user_id, post_id, amount) VALUES (1, 7, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (4, 1, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (10, 6, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (4, 7, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (4, 10, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (8, 10, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (6, 3, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (5, 5, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (7, 1, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (9, 8, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (5, 8, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (5, 1, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (10, 3, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (2, 10, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (1, 10, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (5, 7, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (6, 7, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (8, 1, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (8, 8, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (5, 4, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (3, 3, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (7, 2, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (6, 1, -1);
INSERT INTO votes (user_id, post_id, amount) VALUES (1, 10, 1);
INSERT INTO votes (user_id, post_id, amount) VALUES (7, 2, -1);