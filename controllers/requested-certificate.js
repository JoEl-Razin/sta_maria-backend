import express from 'express'
import mongoose from 'mongoose'

import ReqCertificate from '../models/requested-certificate.js'

const router = express.Router()

export const getReqCerticate = async (req, res) => {
  const { id } = req.params

  try {
    const reqCertificate = await ReqCertificate.findById(id)

    res.status(200).json(reqCertificate)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getReqCertificates = async (req, res) => {
  try {
    const reqCertificate = await ReqCertificate.find()

    res.status(200).json(reqCertificate)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createReqCertificate = async (req, res) => {
  const {
    controlNo,
    name,
    address,
    sex,
    type,
    purpose,
    date
  } = req.body

  const newReqCert = new ReqCertificate({
    controlNo,
    name,
    address,
    sex,
    type,
    purpose,
    date
  })

  try {
    await newReqCert.save()

    res.status(201).json(newReqCert)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateReqCertificate = async (req, res) => {
  const { id: _id } = req.params
  const {
    controlNo,
    name,
    address,
    sex,
    type,
    purpose,
    date
  } = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedReqCert = {
    controlNo,
    name,
    address,
    sex,
    type,
    purpose,
    date
  }

  await ReqCertificate.findByIdAndUpdate(id, updatedAbout, { new: true })

  res.json(updatedReqCert)
}

export const deleteReqCertificate = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await ReqCertificate.findByIdAndDelete(id)

  res.json({ message: 'Deleted Successfully' })
}

export default router