import express from 'express'

import {
  getCertificate,
  createCertificate,
  updateCertificate,
  deleteCertificate
} from '../controllers/certificate.js'

const router = express.Router()

router.get('/', getCertificate)
router.post('/', createCertificate)
router.patch('/:id', updateCertificate)
router.delete('/:id', deleteCertificate)

export default router;