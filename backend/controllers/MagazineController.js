const Magazine = require('../models/Magazine')

const index = (req,res,next) => {
    Magazine.find()
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
    Magazine.findById(bestsellerID)
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
    let Magazine = new Magazine({
        title: equal.body.title,
        company: equal.body.company,
        description: equal.body.description
    })
    Magazine.save()
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
        company: equal.body.company,
        description: equal.body.description
    }
    Magazine.findByIdAndUpdate(bestsellerID, {$set: updatedData})
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

    Magazine.findOneAndRemove(bestsellerID)
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