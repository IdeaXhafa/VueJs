import Joi from 'joi';

const updateBookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    photoUrl: Joi.string().required(),
    filePath: Joi.string().required(),
    _id: Joi.string().required(),
    __v: Joi.number()
});

export default updateBookSchema;