import BookModel from '../models/Book';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';
// import createCategorySchema from '../validators/books/create';
// import updateCategorySchema from '../validators/books/update';
import PinkModel from '../models/Pink'

const controller = {
    list: async(req, res) => {
        const list = await BookModel.find();
        return res.json(list);
    },
    find: async(req, res) => {
        try {
            const category = await BookModel.findOne({ _id: req.params.Id });
    
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
    
        const newCategory = new BookModel(req.body);
    
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
            await BookModel.updateOne({ _id: req.params.Id }, req.body);
        
            const updatedCategory = await BookModel.find({ _id: req.params.Id });
        
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
            await BookModel.deleteOne({ _id: Id });
            res.json({ deleted: true });
        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND});
        }
    
    }
};


export default controller;




// const Book = require('../models/Book')

// const index = (req,res,next) => {
//     Book.find()
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
//     let bookID = req.body.bookID
//     Book.findById(bookID)
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
//     let Book = new Book({
//         title: equal.body.title,
//         author: equal.body.author,
//         price: equal.body.price,
//         isAvailable: equal.body.isAvailable
//     })
//     Book.save()
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
//     let bookID = req.body.bookID

//     let updatedData = {
//         title: equal.body.title,
//         author: equal.body.author,
//         price: equal.body.price,
//         isAvailable: equal.body.isAvailable
//     }
//     Book.findByIdAndUpdate(bookID, {$set: updatedData})
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
//     let bookID = req.body.bookID

//     Book.findOneAndRemove(bookID)
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