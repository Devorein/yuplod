import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';
import shortid from 'shortid';
import { auth } from './middlewares';
import router from './routes';
import { createJsonErrorResponse, createJsonSuccessResponse } from './utils';

async function main() {
  const app = express();
  // Adding cors middleware
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  );
  app.use(express.json());
  // Adding express static middleware to serve static content in the dist/static folder
  app.use(express.static(path.resolve(__dirname, 'static')));
  app.use(fileUpload());
  app.use('/api/v1', router);
  // Upload api endpoint
  app.post('/api/v1/upload', auth(), (req: Request, res: Response) => {
    // If no files exist send an error message
    if (req.files === null) {
      createJsonErrorResponse(
        res,
        [{ field: 'file', message: 'No file uploaded' }],
        400
      );
    }
    const file = req.files?.file as fileUpload.UploadedFile;
    if (file) {
      // Get the extension of the file and generate a unique string as the filename
      const extension = path.basename(file.name);
      const generatedFileName = shortid();
      // Move the file to the static/uploads folder
      file.mv(
        `${__dirname}/static/uploads/${generatedFileName}.${extension}`,
        async (err) => {
          if (err) {
            createJsonErrorResponse(
              res,
              [{ field: 'file', message: err.message }],
              500
            );
          } else {
            // If the file has been moved successfully send a success response with the name of the file and its path
            createJsonSuccessResponse(res, {
              fileName: generatedFileName,
              filePath: `http://localhost:4000/uploads/${generatedFileName}.${extension}`
            });
          }
        }
      );
    } else {
      createJsonErrorResponse(
        res,
        [{ field: 'file', message: 'No file uploaded' }],
        400
      );
    }
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });
}

main();
