import Joi from 'joi';

const createAcronymSchema = Joi.object({
  acronym: Joi.string().required(),
  definition: Joi.string().required(),
});

const editAcronymSchema = Joi.object({
  acronym: Joi.string(),
  definition: Joi.string(),
});

export { createAcronymSchema, editAcronymSchema };
