# Yuplod

A fullstack app to upload photos and post your captions.

## Details

### Backend

Yuplod uses node.js as its backend and its server is created using express. It provides a rest api to do the basic crud operations for the post and users, along with endpoints to upload file using react and express-fileupload. For authentication it uses jwt to verify authenticate and authorize user. Most of the critical endpoints are protected using express middleware. For the database it uses postgresql and stores the data in `users` and `posts` table.

### Frontend

The frontend of yuplod is made using

1. React (UI Library)
2. Typescript (Static typing)
3. react-query (Industry grade library for caching, fetching and batching rest apis)
4. Material UI (UI components)
5. react-dropzone (For drag and drop file upload)
6. Yup (Validation library)
7. Formik (Form library)

## Breakdown

1. The user has to first register to use the app as otherwise, they wont be able to
1. Create any post
1. Vote on any posts
1. In the registration process the user has to provide their email, password, username, first_name and last_name.
1. Both email and password must be unique so user cannot create multiple accounts with similar username or email
1. After registration is done, the user can logout anytime.
1. If the user has logged out but has registered then they just need to login back using either email/username or password.
1. After logging in the user can create post. They can also vote on posts.

In the initial load the jwt token stored in users localStorage is sent to the server to validate the user. If the token is verified to be of a users, then they are logged in, otherwise they have to login again.

At the same time all the posts are fetched from the database, with the associated user and the total number of votes for that post. If the user is logged in they can upvote or downvote on the post.

A user can create a post, by providing its caption and image which can be uploaded from users side. The post create process is a three step process. The post is created first without its file_url. After that if the post contains a file associated with it its sent to the server and stored in the local fs. After that the posts image_url field is populated with the name of the file.

## Current Status

Currently yuplod is under heavy development and I plan on improving everything after the hackathon ends.

## Bugs

The user might face a few bugs here and there both on the client side and the server side as no unit or integration tests have been written for anything due to lack of time.

## Future plans

1. Improve the ui
2. Add theme change toggle
3. Add pagination support
4. Add forget password support
5. Add delete and update post support
6. View other users profile
7. Update logged in user's data feature
8. Upvote and downvote button updates the cache
