import mongoose from 'mongoose'

const reqCertSchema = mongoose.Schema({
  controlNo: Number,
  name: String,
  address: String,
  sex: String,
  type: String,
  purpose: String,
  date: String,
})

const reqCertificate = mongoose.model('reqCertificate', reqCertSchema)

export default reqCertificate;