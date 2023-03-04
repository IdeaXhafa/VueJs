import BestsellerModel from '../models/BestSeller';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
import createBestsellerSchema from '../validators/bestsellers/create';
import updateBestsellerSchema from '../validators/bestsellers/update';
import PinkModel from '../models/Pink'

const controller = {
    list: async(req, res) => {
        const list = await BestsellerModel.find();
        return res.json(list);
    },
    find: async(req, res) => {
        try {
            const category = await BestsellerModel.findOne({ _id: req.params.Id });
    
            if (!category) throw Error("Category not found");
            return res.json(category);
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },
    create: async(req, res) => {
        console.log('req.body - ', req.body);
        const validationResult = createBestsellerSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({
                    message: ReasonPhrases.UNAUTHORIZED,
                    error: validationResult.error.message
                });
        }
    
        const newCategory = new BestsellerModel(req.body);

        const logs = new PinkModel({ userId: req.body.userId , data: Date.now() , type: 'created', description: 'BestSellers'});
    
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
        const validationResult = updateBestsellerSchema.validate(req.body);
    
        if (validationResult.error) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({
                    message: ReasonPhrases.UNAUTHORIZED,
                    error: validationResult.error.message
                })
        }

        const logs = new PinkModel({ userId: req.body.userId , data: Date.now() , type: 'updated', description: 'BestSellers'});
    
    
        try {
            await BestsellerModel.updateOne({ _id: req.params.id }, req.body);
            await logs.save();
        
            const updatedCategory = await BestsellerModel.find({ _id: req.params.id });
        
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
    
        const logs = new PinkModel({ userId: req.body.userId , data: Date.now() , type: 'deleted', description: 'BestSellers'});
    
        try {
            await BestsellerModel.deleteOne({ _id: Id });
            await logs.save();
            
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }
    
    }
};


export default controller;






// const BestSeller = require('../models/BestSeller')

// const index = (req,res,next) => {
//     BestSeller.find()
//     .then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error occured!'
//         })
//     })
// }

// const show = (req,res,next) => {
//     let bestsellerID = req.body.bestsellerID
//     BestSeller.findById(bestsellerID)
//     .then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error occured!'
//         })
//     })
// }

// const store = (req,res,next) => {
//     let BestSeller = new BestSeller({
//         title: equal.body.title,
//         author: equal.body.author,
//         price: equal.body.price,
//         isAvailable: equal.body.isAvailable,
//         photoUrl: equal.body.photoUrl,
//         filePath: equal.body.filePath
//     })
//     BestSeller.save()
//     .then(response => {
//         res.json({
//             message: 'Added successfully!'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error occured!'
//         })
//     })
// }

// const update = (req,res,next) => {
//     let bestsellerID = req.body.bestsellerID

//     let updatedData = {
//         title: equal.body.title,
//         author: equal.body.author,
//         price: equal.body.price,
//         isAvailable: equal.body.isAvailable,
//         photoUrl: equal.body.photoUrl,
//         filePath: equal.body.filePath
//     }
//     BestSeller.findByIdAndUpdate(bestsellerID, {$set: updatedData})
//     .then(response => {
//         res.json({
//             message: 'Updated successfully!'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error occured!'
//         })
//     })
// }

// const destroy = (req,res,next) => {
//     let bestsellerID = req.body.bestsellerID

//     BestSeller.findOneAndRemove(bestsellerID)
//     .then(response => {
//         res.json({
//             message: 'Deleted successfully!'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error occured!'
//         })
//     })
// }

// module.exports = {
//     index,store,show,update,destroy
// }