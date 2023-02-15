const AudioBook = require('../models/Audiobook')

const index = (req,res,next) => {
    AudioBook.find()
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
    let bestsellerID = req.body.bestsellerID
    AudioBook.findById(bestsellerID)
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
    let AudioBook = new AudioBook({
        title: equal.body.title,
        author: equal.body.author,
        price: equal.body.price,
        img: equal.body.img
    })
    AudioBook.save()
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
    let bestsellerID = req.body.bestsellerID

    let updatedData = {
        title: equal.body.title,
        author: equal.body.author,
        price: equal.body.price,
        img: equal.body.img
    }
    AudioBook.findByIdAndUpdate(bestsellerID, {$set: updatedData})
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
    let bestsellerID = req.body.bestsellerID

    AudioBook.findOneAndRemove(bestsellerID)
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