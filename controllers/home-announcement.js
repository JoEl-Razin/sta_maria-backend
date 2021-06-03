import express from 'express'
import mongoose from 'mongoose'

import Announcement from '../models/home-announcement.js'

const router = express.Router()

export const getAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.find()

    res.status(200).json(announcement)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createAnnouncement = async (req, res) => {
  const {
    title,
    date,
    details
  } = req.body

  const newAnnouncement = new Announcement({
    title,
    date,
    details
  })

  try {
    await newAnnouncement.save()

    res.status(201).json(newAnnouncement)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateAnnouncement = async (req, res) => {
  const { id: _id } = req.params
  const {
    title,
    date,
    details
  } = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedAnnouncement = {
    title,
    date,
    details
  }

  await Announcement.findByIdAndUpdate(id, updatedAnnouncement, { new: true })

  res.json(updatedAnnouncement)
}

export const deleteAnnouncement = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Resident.findByIdAndDelete(id)

  res.json({ message: 'Deleted Successfully' })
}