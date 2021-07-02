import cors from 'cors';
import 'dotenv/config';
import express from 'express';

async function main(){
  const app = express();
  app.use(
		cors({
			origin: 'http://localhost:3000',
			credentials: true,
		})
	);
  
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
		console.log(`Server listening on port http://localhost:${PORT}`);
	});
}

main()