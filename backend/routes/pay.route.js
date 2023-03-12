import express from 'express'
import PayController from '../controllers/PayController'

const contactRouter = express.Router({ mergeParams:true });

contactRouter.get('/get-pay', PayController.list)
contactRouter.post('/create-pay', PayController.create)

export default contactRouter;
