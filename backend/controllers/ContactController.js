import ContactModel from '../models/Contact';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
import createContactSchema from '../validators/contact/create';

const controller = {
    list: async(req, res) => {
        const list = await ContactModel.find();
        return res.json(list);
    },
    find: async(req, res) => {
        try {
            const category = await ContactModel.findOne({ _id: req.params.Id });
    
            if (!category) throw Error("Category not found");
            return res.json(category);
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },
    create: async(req, res) => {
        console.log('req.body - ', req.body);
        const validationResult = createContactSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({
                    message: ReasonPhrases.UNAUTHORIZED,
                    error: validationResult.error.message
                });
        }
    
        const newCategory = new ContactModel(req.body);
    
        try {
            await newCategory.save();
        
            return res.json(newCategory);
        } catch (err) {
            return res.json(StatusCodes.UNAUTHORIZED)
                .json({
                    message: ReasonPhrases.UNAUTHORIZED,
                    error: err.message
                });
        }
    }
};


export default controller;

