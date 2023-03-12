import express from 'express'
import ContactController from '../controllers/ContactController'

const contactRouter = express.Router({ mergeParams:true });

contactRouter.get('/get-messages', ContactController.list)
contactRouter.post('/send-message', ContactController.create)

export default contactRouter;
