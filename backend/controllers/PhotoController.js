const Book = require('../models/Photos')

const index = (req,res,next) => {
    Book.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const show = (req,res,next) => {
    let bookID = req.body.bookID
    Book.findById(bookID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const store = (req,res,next) => {
    let Photo = new Photo({
        Photo: equal.body.Photo,
        Filepath: equal.body.Filepath
       
    })
    Book.save()
    .then(response => {
        res.json({
            message: 'Added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const update = (req,res,next) => {
    let bookID = req.body.bookID

    let updatedData = {
        Photo: equal.body.Photo,
        Filepath: equal.body.Filepath
       
    }
    Book.findByIdAndUpdate(bookID, {$set: updatedData})
    .then(response => {
        res.json({
            message: 'Updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const destroy = (req,res,next) => {
    let bookID = req.body.bookID

    Book.findOneAndRemove(bookID)
    .then(response => {
        res.json({
            message: 'Deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    index,store,show,update,destroy
}