import Joi from 'joi';

export const credentialSchema = Joi.object({
  url: Joi.string().uri().trim().required(),
  username: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  title: Joi.string().trim().required(),
});
