import express from 'express'
import mongoose from 'mongoose'

import About from '../models/home-about.js'

const router = express.Router()

export const getAbout = async (req, res) => {
  try {
    const about = await About.find()

    res.status(200).json(about)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createAbout = async (req, res) => {
  const {
    about,
  } = req.body

  const newAbout = new About({
    about
  })

  try {
    await newAbout.save()

    res.status(201).json(newAbout)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateAbout = async (req, res) => {
  const { id: _id } = req.params
  const { about } = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedAbout = {
    about,
  }

  await About.findByIdAndUpdate(id, updatedAbout, { new: true })

  res.json(updatedAbout)
}

export const deleteAbout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await About.findByIdAndDelete(id)

  res.json({ message: 'Deleted Successfully' })
}

export default router