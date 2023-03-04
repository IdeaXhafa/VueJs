import Joi from 'joi';

const updateAudiobookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    listeners: Joi.number().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    _id: Joi.string().required(),
    __v: Joi.number()
});

export default updateAudiobookSchema;