import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

const router = express.Router()

export const authUser = async (req, res) => {
  console.log(req.body)
  const { username, password } = req.body

  const user = await User.findOne({ username: username, password: password });

  if (!user) {
    return res.status(404).json({ message: 'Invalid credentials' })
  }

  return res.status(200).json({
    token: jwt.sign({}, 'SECRET_KEY_HERE', { subject: user.id }),
  });
}

