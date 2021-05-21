import mongoose from 'mongoose'

const householdSchema = mongoose.Schema({
  householdNo: String,
  streetName: String,
  householdType: String,
  householdHead: String,
  householdMembers: [String],
});

const Household = mongoose.model('Household', householdSchema)

export default Household;

// combine all names, using virtual fields
// di makawa in pass if mag query sin get user/s