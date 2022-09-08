import cors from 'cors';
import express, { Express, json } from 'express';
import 'express-async-errors';

import { router } from './routers/index';

export const app: Express = express();
app.use(json());
app.use(cors());
app.use(router);
