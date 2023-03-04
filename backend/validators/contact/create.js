import Joi from 'joi';

const createContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
});

export default createContactSchema;