import Joi from 'joi';

const createAudiobookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    listeners: Joi.number().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    photoUrl: Joi.string().required(),
    filePath: Joi.string().required(),
});

export default createAudiobookSchema;