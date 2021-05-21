import express from 'express'
import mongoose from 'mongoose'

import Resident from '../models/resident.js'

const router = express.Router()

//getting resident
/* export const getResident = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Resident.findById(id)

    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
} */

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
    address, 
    precintNumber, 
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    living, 
    blacklist 
  } = req.body

  const newResident = new Resident({ 
    name, 
    sex, 
    civilStatus, 
    address, 
    precintNumber, 
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    living, 
    blacklist 
  })

  try {
    await newResident.save()

    res.status(201).json(newResident)
  } catch (error) {
    res.status(404).json({ message: erros.message })
  }
}

export const updateResident = async (req, res) => {
  const { id: _id } = req.params
  const { 
    name, 
    sex, 
    civilStatus, 
    address, 
    precintNumber, 
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    living, 
    blacklist 
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedResident = { 
    name, 
    sex, 
    civilStatus, 
    address, 
    precintNumber, 
    birthday, 
    birthplace, 
    profession, 
    nationality, 
    residentType, 
    living, 
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

  res.json({ message: "Resident deleted successfully"})
}

export default router