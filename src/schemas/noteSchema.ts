import Joi from 'joi';

export const noteSchema = Joi.object({
  title: Joi.string().trim().max(50).required(),
  text: Joi.string().trim().max(1000).required(),
});
