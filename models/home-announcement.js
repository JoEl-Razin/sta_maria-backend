import mongoose from 'mongoose'

const announcementSchema = mongoose.Schema({
  title: String,
  date: String,
  details: String,
})

const Announcement = mongoose.model('announcement', announcementSchema)

export default Announcement;