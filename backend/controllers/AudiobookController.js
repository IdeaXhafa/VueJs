import AudiobookModel from '../models/Audiobook';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
import createAudiobookSchema from '../validators/audiobooks/create'
import updateAudiobookSchema from '../validators/audiobooks/update'
import PinkModel from '../models/Pink'

const controller = {
    list: async(req, res) => {
        const list = await AudiobookModel.find();
        return res.json(list);
    },
    find: async(req, res) => {
        try {
            const category = await AudiobookModel.findOne({ _id: req.params.Id });
    
            if (!category) throw Error("Category not found");
            return res.json(category);
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },
    create: async(req, res) => {
        console.log('req.body - ', req.body);
        const validationResult = createAudiobookSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({
                    message: ReasonPhrases.UNAUTHORIZED,
                    error: validationResult.error.message
                });
        }
    
        const newCategory = new AudiobookModel(req.body);

        const logs = new PinkModel({ userId: req.body.userId , data: Date.now() , type: 'created', description: 'Audiobook'});
    
        try {
            await newCategory.save();
            await logs.save();
        
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
        const validationResult = updateAudiobookSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({
                    message: ReasonPhrases.UNAUTHORIZED,
                    error: validationResult.error.message
                })
        }

        const logs = new PinkModel({ userId: req.body.userId , data: Date.now() , type: 'updated', description: 'Audiobook'});

        try {
            await AudiobookModel.updateOne({ _id: req.params.id }, req.body);
            await logs.save();
        
            const updatedCategory = await AudiobookModel.find({ _id: req.params.id });
        
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
        const Id = req.params.id;

        const logs = new PinkModel({ userId: req.body.userId , data: Date.now() , type: 'deleted', description: 'Audiobook'});
    
        try {
            await AudiobookModel.deleteOne({ _id: Id });
            await logs.save();
            
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }
    
    }
};


export default controller;
