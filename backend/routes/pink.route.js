import express from 'express'
import PinkController from '../controllers/PinkController'

const contactRouter = express.Router({ mergeParams:true });

contactRouter.get('/get-logs', PinkController.list)

export default contactRouter;

