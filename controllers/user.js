import express from 'express'
import mongoose from 'mongoose'

import User from '../models/user.js'

const router = express.Router()

// getting user
export const getUser = async (req, res) => {
  const { id } = req.params

  try {
    const post = await User.findById(id)

    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// getting multiple user
export const getUsers = async (req, res) =>{
  try {
    const users = await User.find()

    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// creating user
export const createUser = async (req, res) => {
  const { 
    username, 
    password, 
    name, 
    roles 
  } = req.body

  const newUser = new User({ 
    username, 
    password, 
    name, 
    roles 
  })

  try {
    await newUser.save()

    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json( {message: error.message })
  }
}

// updating user's cred
export const updateUser = async (req, res) => {
  const { id: _id } = req.params
  const { 
    username, 
    password, 
    name, 
    roles 
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)

  const updatedUser = { 
    username, 
    password, 
    name, 
    roles, 
    _id: id 
  }

  await User.findByIdAndUpdate(id, updatedPost, {new: true})

  res.json(updatedUser)
}

//deleting user
export const deleteUser = async (req, res) => {
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await User.findByIdAndRemove(id)

  res.json({ message: "User deleted successfully"})
}

export default router