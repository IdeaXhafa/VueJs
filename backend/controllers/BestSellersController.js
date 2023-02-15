const BestSeller = require('../models/BestSeller')

const index = (req,res,next) => {
    BestSeller.find()
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
    BestSeller.findById(bestsellerID)
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
    let BestSeller = new BestSeller({
        title: equal.body.title,
        author: equal.body.author,
        price: equal.body.price,
        img: equal.body.img
    })
    BestSeller.save()
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
    BestSeller.findByIdAndUpdate(bestsellerID, {$set: updatedData})
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

    BestSeller.findOneAndRemove(bestsellerID)
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