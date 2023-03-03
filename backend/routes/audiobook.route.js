import express from 'express'
import AudiobookController from '../controllers/AudiobookController'

const bookRouter = express.Router({ mergeParams:true });

bookRouter.get('/get-audiobook', AudiobookController.list)
bookRouter.post('/create-audiobook', AudiobookController.create)
bookRouter.put('/update-audiobook/:id', AudiobookController.edit)
bookRouter.delete('/delete-audiobook/:id', AudiobookController.delete)

export default bookRouter;
