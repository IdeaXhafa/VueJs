import Joi from 'joi';

const updateBestsellerSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    isAvailable: Joi.string().required(),
    photoUrl: Joi.string().required(),
    filePath: Joi.string().required(),
    _id: Joi.string().required(),
    __v: Joi.number()
});

export default updateBestsellerSchema;