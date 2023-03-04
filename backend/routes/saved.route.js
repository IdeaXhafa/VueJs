import express from 'express'
import SavedController from '../controllers/SavedController'

const bestsellerRouter = express.Router({ mergeParams:true });

bestsellerRouter.get('/get-saved/:id', SavedController.list)
//bestsellerRouter.get('/get-cart/:id', CartController.find)
bestsellerRouter.post('/create-saved', SavedController.create)
bestsellerRouter.put('/update-saved/:id', SavedController.edit)
bestsellerRouter.delete('/delete-saved/:id', SavedController.delete)

export default bestsellerRouter;
