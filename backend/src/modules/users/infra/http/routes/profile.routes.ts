import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profilecontroller = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profilecontroller.show);
profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      old_password: Joi.string().min(6),
      password: Joi.string().min(6),
      password_confirmation: Joi.string().min(6).valid(Joi.ref('password')),
    },
  }),
  profilecontroller.update,
);

export default profileRouter;
