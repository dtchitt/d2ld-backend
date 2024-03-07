import dotenv from 'dotenv';
import app from './app';
import { Request, Response } from 'express';

dotenv.config();

const port = process.env.PORT || 778;

app.get('/', (req: Request, res: Response) => {
  res.send('Success');
  console.log(`Success!`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
