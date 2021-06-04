import express from 'express'

import { 
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../controllers/home-announcement.js'

const router = express.Router()

router.get('/', getAnnouncement)
router.post('/', createAnnouncement)
router.patch(':id', updateAnnouncement)
router.delete('/:id', deleteAnnouncement)

export default router