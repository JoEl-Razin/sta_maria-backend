import express from 'express';

import { 
  getUser, 
  getUsers,
  createUser, 
  updateUser,
  deleteUser,
} from '../controllers/user.js'

const router = express.Router()

// router.get('/', getUser)
router.get('/', getUsers)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;