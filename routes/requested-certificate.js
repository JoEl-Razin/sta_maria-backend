import express from 'express'

import { 
  getReqCerticate,
  getReqCertificates,
  createReqCertificate,
  updateReqCertificate,
  deleteReqCertificate,
} from '../controllers/requested-certificate.js'

const router = express.Router()

router.get('/:id', getReqCerticate)
router.get('/', getReqCertificates)
router.post('/', createReqCertificate)
router.patch(':id', updateReqCertificate)
router.delete('/:id', deleteReqCertificate)

export default router