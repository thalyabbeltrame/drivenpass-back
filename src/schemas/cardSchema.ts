import Joi from 'joi';

export const cardSchema = Joi.object({
  number: Joi.string()
    .regex(/^[0-9]{16}$/)
    .required(),
  cardholderName: Joi.string()
    .regex(/^[a-zA-Z ]{3,30}$/)
    .required(),
  expirationDate: Joi.string()
    .length(5)
    .regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/)
    .required(),
  securityCode: Joi.string().regex(/^[0-9]{3}$/),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid('credit', 'debit', 'both').required(),
  password: Joi.string()
    .regex(/^[0-9]{4}$/)
    .required(),
  title: Joi.string().trim().required(),
});
