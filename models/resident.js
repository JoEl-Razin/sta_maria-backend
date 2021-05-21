import mongoose from 'mongoose'

const residentSchema = mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
    middleInitial: String,
  },
  sex: ['Female', 'Male'],
  civilStatus: String,
  address: {
    householdNo: String,
    streetName: String,
  },                                              // FIX TEST SAMPLES!!!!!
  precintNumber: String,
  birthday: Date,
  birthplace: String,
  profession: String,
  nationality: String,
  residentType: ['Voter', 'Non-Voter'],
  living: Boolean,
  blacklist: Boolean,
});

const Resident = mongoose.model('Resident', residentSchema)

export default Resident;

// combine all names, using virtual fields
// di makawa in pass if mag query sin get user/s