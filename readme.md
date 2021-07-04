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
