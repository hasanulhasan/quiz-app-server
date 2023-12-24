import express from 'express'
import { UserController } from './user.controller'

const router = express.Router();

router.get('/:id', UserController.getSingleUser)
router.patch('/:id', UserController.updateSingleUser)
router.get('/', UserController.getAllUsers);
router.post('/create-user', UserController.insertToDB)


export const UserRoutes = router