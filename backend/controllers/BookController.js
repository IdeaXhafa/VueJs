const Book = require('../models/Book')

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
    let Book = new Book({
        title: equal.body.title,
        author: equal.body.author,
        price: equal.body.price,
        isAvailable: equal.body.isAvailable
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
        title: equal.body.title,
        author: equal.body.author,
        price: equal.body.price,
        isAvailable: equal.body.isAvailable
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