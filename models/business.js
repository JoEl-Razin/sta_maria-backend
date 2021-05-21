import mongoose from 'mongoose'

const businessSchema = mongoose.Schema({
  businessName: String,
  businessAddress: String,
  businessType: String,
  businessPermit: String,
  owner: {
    name: String,
    contactNo: String,
    address: String,
  }
});

const Business = mongoose.model('business', businessSchema)

export default Business;

// combine all names, using virtual fields
// di makawa in pass if mag query sin get user/s