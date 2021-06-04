import express from 'express'
import mongoose from 'mongoose'

import Resident from '../models/resident.js'

const router = express.Router()

//getting resident
export const getResident = async (req, res) => {
  const { id } = req.params

  try {
    const resident = await Resident.findById(id)

    res.status(200).json(resident)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getResidents = async (req, res) => {
  try {
    const residents = await Resident.find()

    res.status(200).json(residents)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createResident = async (req, res) => {
  const { 
    name, 
    sex, 
    civilStatus, 
    religion,
    address, 
    precintNumber, 
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    blacklist,
  } = req.body

  const newResident = new Resident({ 
    name, 
    sex, 
    civilStatus, 
    religion,
    address, 
    precintNumber, 
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    blacklist 
  })

  try {
    await newResident.save()

    res.status(201).json(newResident)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateResident = async (req, res) => {
  const { id: _id } = req.params
  const { 
    name, 
    sex, 
    civilStatus, 
    religion,
    address, 
    precintNumber, 
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    blacklist,
    id,
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedResident = { 
    name, 
    sex, 
    civilStatus, 
    religion,
    address, 
    precintNumber,
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    blacklist,
    _id: id
  }

  await Resident.findByIdAndUpdate(id, updatedResident, {new: true})

  res.json(updatedResident)
}

export const deleteResident = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Resident.findByIdAndDelete(id)
  
  res.json({ message: 'Deleted Successfully'})
}

export default router