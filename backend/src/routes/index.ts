import { Router } from 'express';
import appointmentsRouter from './appointiments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
