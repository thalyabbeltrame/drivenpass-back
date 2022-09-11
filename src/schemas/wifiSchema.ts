import Joi from 'joi';

export const wifiSchema = Joi.object({
  wifiNetworkName: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  title: Joi.string().trim().required(),
});
