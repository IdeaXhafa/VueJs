import PayModel from '../models/Pay';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';

const controller = {
    list: async(req, res) => {
        const list = await PayModel.find();
        return res.json(list);
    },
    find: async(req, res) => {
        try {
            const category = await PayModel.findOne({ _id: req.params.id });
    
            if (!category) throw Error("Category not found");
            return res.json(category);
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },
    create: async(req, res) => {
        console.log('req.body - ', req.body);
    
        const newCategory = new PayModel(req.body);
    
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
