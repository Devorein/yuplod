import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';
import uuid from 'uuid';
import router from './routes';
import { createJsonErrorResponse, createJsonSuccessResponse } from './utils';

async function main() {
  const app = express();
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  );
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, 'static')));
  app.use(fileUpload());
  app.use('/api/v1', router);

  app.post('/api/v1/upload', (req: Request, res: Response) => {
    if (req.files === null) {
      createJsonErrorResponse(
        res,
        [{ field: 'file', message: 'No file uploaded' }],
        400
      );
    }
    const file = req.files?.file as fileUpload.UploadedFile;

    if (file) {
      file.mv(`${__dirname}/static/uploads/${file.name}`, (err) => {
        if (err) {
          createJsonErrorResponse(
            res,
            [{ field: 'file', message: err.message }],
            500
          );
        } else {
          const fileName = uuid.v4();
          createJsonSuccessResponse(res, {
            fileName,
            filePath: `/uploads/${fileName}`
          });
        }
      });
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
