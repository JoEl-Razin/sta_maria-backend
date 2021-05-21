import express from 'express'
import mongoose from 'mongoose'

import Business from '../models/business.js'

const router = express.Router()

export const getBusinesses = async (req, res) => {
  try {
    const business = await Business.find()

    res.status(200).json(business)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createBusiness = async (req, res) => {
  const { 
    businessName, 
    businessAddress,
    businessType,
    businessPermit,
    owner
  } = req.body

  const newBusiness = new Business({ 
    businessName, 
    businessAddress,
    businessType,
    businessPermit,
    owner 
  })

  try {
    await newBusiness.save()

    res.status(201).json(newBusiness)
  } catch (error) {
    res.status(404).json({ message: erros.message })
  }
}

export const updateBusiness = async (req, res) => {
  const { id: _id } = req.params
  const { 
    businessName, 
    businessAddress,
    businessType,
    businessPermit,
    owner 
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedBusiness = { 
    businessName, 
    businessAddress,
    businessType,
    businessPermit,
    owner,
    _id: id
  }

  await Business.findByIdAndUpdate(id, updatedBusiness, {new: true})

  res.json(updatedBusiness)
}

export const deleteBusiness = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Business.findByIdAndDelete(id)

  res.json({ message: "Business deleted successfully"})
}

export default router