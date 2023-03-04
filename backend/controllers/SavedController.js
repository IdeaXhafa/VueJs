import SavedModel from '../models/Saved';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
// import createCategorySchema from '../validators/books/create';
// import updateCategorySchema from '../validators/books/update';

const controller = {
    list: async(req, res) => {
        const list = await SavedModel.find({ userId: req.params.id } );
        console.log(list)
        return res.json(list);
    },
    find: async(req, res) => {
        try {
            const category = await SavedModel.findOne({ _id: req.params.Id });
    
            if (!category) throw Error("Category not found");
            return res.json(category);
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },
    create: async(req, res) => {
        console.log('req.body - ', req.body);
        // const validationResult = createCategorySchema.validate(req.body);
    
        // if (validationResult.error) {
        //     return res
        //         .status(StatusCodes.UNAUTHORIZED)
        //         .json({
        //             message: ReasonPhrases.UNAUTHORIZED,
        //             error: validationResult.error.message
        //         });
        // }
    
        const newCategory = new SavedModel(req.body);
    
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
    },
    edit: async(req, res) => {
        // const validationResult = updateCategorySchema.validate(req.body);
    
        // if (validationResult.error) {
        //     return res
        //         .status(StatusCodes.UNAUTHORIZED)
        //         .json({
        //             message: ReasonPhrases.UNAUTHORIZED,
        //             error: validationResult.error.message
        //         })
        // }
    
        try {
            await SavedModel.updateOne({ _id: req.params.Id }, req.body);
        
            const updatedCategory = await SavedModel.find({ _id: req.params.Id });
        
            return res.json(updatedCategory);
        } catch (err) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({
                    message: ReasonPhrases.UNAUTHORIZED,
                    error: validationResult.error.message
                })
        }
        
    },
    delete: async(req, res) => {
        const Id = req.params.Id;
    
        try {
            await SavedModel.deleteOne({ _id: Id });
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }
    
    }
};


export default controller;