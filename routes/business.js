import express from 'express'

import {
  getBusinesses,
  createBusiness,
  updateBusiness,
  deleteBusiness,
} from '../controllers/business.js'

const router = express.Router()

router.get('/', getBusinesses)
router.post('/', createBusiness)
router.patch('/:id', updateBusiness)
router.delete('/:id', deleteBusiness)

export default router;