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
