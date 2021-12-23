import UsersController from './controllers/UsersController'
import express from 'express'

const router = express.Router()

router.post('/users', UsersController.create)
router.get('/users', UsersController.findAll)
router.get('/users/:userID', UsersController.findOne)
router.put('/users/:userID', UsersController.update)
router.delete('/users/:userID', UsersController.destroy)

export { router }
