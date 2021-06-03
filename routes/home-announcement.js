import express from 'express'

import { 
  get,
  createAbout,
  updateAbout,
  deleteAbout,
} from '../controllers/home-about.js'

const router = express.Router()

router.get('/', getAbout)
router.post('/', createAbout)
router.patch(':id', updateAbout)
router.delete('/:id', deleteAbout)

export default router