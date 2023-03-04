import Joi from 'joi';

const createBookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    photoUrl: Joi.string().required(),
    filePath: Joi.string().required(),
});

export default createBookSchema;