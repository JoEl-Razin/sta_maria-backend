import mongoose from 'mongoose'

const certificateSchema = mongoose.Schema({
  controlNo: Number,
  certificateType: String,
  name: String,
  address: String,
  certificatePurpose: String,
  sex: String,
  date: String,
});

const Certificate = mongoose.model('certificate', certificateSchema)

export default Certificate;

// combine all names, using virtual fields
// di makawa in pass if mag query sin get user/s