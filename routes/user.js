import express from 'express';
import authMiddleware from '../middleware/auth.js';

import { 
  getUser, 
  getUsers,
  createUser, 
  updateUser,
  deleteUser,
} from '../controllers/user.js'

const router = express.Router()

// Authorization: Bearer JWT_TOKEN
// router.use(authMiddleware);

// router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;