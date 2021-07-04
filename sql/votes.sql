-- SQL Code to create votes table
CREATE TABLE votes (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  amount INTEGER
);

insert into VOTES (user_id, post_id, amount) values (1, 7, 1);
insert into VOTES (user_id, post_id, amount) values (4, 1, -1);
insert into VOTES (user_id, post_id, amount) values (10, 6, -1);
insert into VOTES (user_id, post_id, amount) values (4, 7, -1);
insert into VOTES (user_id, post_id, amount) values (4, 10, -1);
insert into VOTES (user_id, post_id, amount) values (8, 10, 1);
insert into VOTES (user_id, post_id, amount) values (6, 3, 1);
insert into VOTES (user_id, post_id, amount) values (5, 5, 1);
insert into VOTES (user_id, post_id, amount) values (7, 1, 1);
insert into VOTES (user_id, post_id, amount) values (9, 8, 1);
insert into VOTES (user_id, post_id, amount) values (5, 8, 1);
insert into VOTES (user_id, post_id, amount) values (5, 1, 1);
insert into VOTES (user_id, post_id, amount) values (10, 3, -1);
insert into VOTES (user_id, post_id, amount) values (2, 10, -1);
insert into VOTES (user_id, post_id, amount) values (1, 10, -1);
insert into VOTES (user_id, post_id, amount) values (5, 7, 1);
insert into VOTES (user_id, post_id, amount) values (6, 7, 1);
insert into VOTES (user_id, post_id, amount) values (8, 1, -1);
insert into VOTES (user_id, post_id, amount) values (8, 8, -1);
insert into VOTES (user_id, post_id, amount) values (5, 4, 1);
insert into VOTES (user_id, post_id, amount) values (3, 3, 1);
insert into VOTES (user_id, post_id, amount) values (7, 2, -1);
insert into VOTES (user_id, post_id, amount) values (6, 1, -1);
insert into VOTES (user_id, post_id, amount) values (1, 10, 1);
insert into VOTES (user_id, post_id, amount) values (7, 2, -1);