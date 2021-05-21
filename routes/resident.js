import express from 'express'

import {
  getResidents,
  createResident,
  updateResident,
  deleteResident,
} from '../controllers/resident.js'

const router = express.Router()

router.get('/', getResidents)
router.post('/', createResident)
router.patch('/:id', updateResident)
router.delete('/:id', deleteResident)

export default router;