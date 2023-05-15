import express, { Application, Request, Response } from 'express';
import routes from '../book-store/src/routes';
import compression from 'compression';
import morgan from 'morgan';
import helmet from 'helmet';
import db from './models';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


const app: Application = express()
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(helmet());

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: `Welcome to the book-store API! \n Endpoints available at http://localhost:${port}/api/v1` })
})
app.use(compression());

try {
  db.sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  });
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`)
}

app.use('/v1', routes);
