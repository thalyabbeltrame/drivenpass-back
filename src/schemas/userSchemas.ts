import Joi from 'joi';

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().trim().min(10).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().trim().min(10).required(),
});
