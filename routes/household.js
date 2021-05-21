import express from 'express'

import {
  getHouseholds,
  createHousehold,
  updateHousehold,
  deleteHousehold,
} from '../controllers/household.js'

const router = express.Router()

router.get('/', getHouseholds)
router.post('/', createHousehold)
router.patch('/:id', updateHousehold)
router.delete('/:id', deleteHousehold)

export default router;