const Contact = require('../models/Contact')

const index = (req,res,next) => {
    Contact.find()
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
    let contactID = req.body.contactID
    Contact.findById(contactID)
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
    let Contact = new Contact({
        name: equal.body.name,
        email: equal.body.email,
        subject: equal.body.subject,
        message: equal.body.message
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

module.exports = {
    index,show,store
}