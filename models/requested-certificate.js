import mongoose from 'mongoose'

const reqCertSchema = mongoose.Schema({
  controlNo: Number,
  type: String,
  name: String,
  address: String,
  purpose: String,
  sex: String,
  date: String,
})

const reqCertificate = mongoose.model('reqCertificate', reqCertSchema)

export default reqCertificate;