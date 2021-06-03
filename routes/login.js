import express from 'express';

import { authUser } from '../controllers/login.js'

const router = express.Router()

router.post('/', authUser)

export default router;