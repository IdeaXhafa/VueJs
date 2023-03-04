import Joi from 'joi';

const createBestsellerSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    isAvailable: Joi.string().required(),
    photoUrl: Joi.string().required(),
    filePath: Joi.string().required(),
});

export default createBestsellerSchema;