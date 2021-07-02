import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';

async function main(){
  const app = express();
  app.use(
		cors({
			origin: 'http://localhost:3000',
			credentials: true,
		})
	);
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, 'static')))
  app.use(fileUpload({}))
  
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
		console.log(`Server listening on port http://localhost:${PORT}`);
	});
}

main()