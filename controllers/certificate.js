import express from 'express'
import mongoose from 'mongoose'

import Certificate from '../models/certificate.js'

const router = express.Router()

export const getCertificate = async (req, res) =>{
  try {
    const certificates = await Certificate.find()

    res.status(200).json(certificates)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}


export const createCertificate = async (req, res) => {
  const { 
    controlNo,
    certificateType,
    name,
    address,
    certificatePurpose,
    sex
  } = req.body

  const newCertificate = new Certificate({ 
    controlNo,
    certificateType,
    name,
    address,
    certificatePurpose,
    sex
  })

  try {
    await newCertificate.save()

    res.status(201).json(newCertificate);
  } catch (error) {
    res.status(404).json( {message: error.message })
  }
}

export const updateCertificate = async (req, res) => {
  const { id: _id } = req.params
  const { 
    controlNo,
    certificateType,
    name,
    address,
    certificatePurpose,
    sex
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedCertificate = { 
    controlNo,
    certificateType,
    name,
    address,
    certificatePurpose,
    sex,
    _id: id 
  }

  await User.findByIdAndUpdate(id, updatedCertificate, {new: true})

  res.json(updatedCertificate)
}

export const deleteCertificate = async (req, res) => {
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Certificate.findByIdAndRemove(id)

  res.json({ message: "User deleted successfully"})
}

export default router