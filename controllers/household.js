import express from 'express'
import mongoose from 'mongoose'

import Household from '../models/household.js'

const router = express.Router()

export const getHouseholds = async (req, res) => {
  try {
    const household = await Household.find()

    res.status(200).json(household)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createHousehold = async (req, res) => {
  const { 
    householdNo, 
    streetName, 
    householdType, 
    householdHead, 
    householdMembers 
  } = req.body

  const newHousehold = new Household({ 
    householdNo, 
    streetName, 
    householdType, 
    householdHead, 
    householdMembers 
  })

  try {
    await newHousehold.save()

    res.status(201).json(newHousehold)
  } catch (error) {
    res.status(404).json({ message: erros.message })
  }
}

export const updateHousehold = async (req, res) => {
  const { id: _id } = req.params
  const { 
    householdNo, 
    streetName, 
    householdType, 
    householdHead, 
    householdMembers,
    id,
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedHousehold = { 
    householdNo, 
    streetName, 
    householdType, 
    householdHead, 
    householdMembers,
    _id: id
  }

  await Household.findByIdAndUpdate(id, updatedHousehold, {new: true})

  res.json(updatedHousehold)
}

export const deleteHousehold = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Household.findByIdAndDelete(id)

  res.json({ message: "Household deleted successfully"})
}

export default router