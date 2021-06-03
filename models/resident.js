import mongoose from 'mongoose'

const residentSchema = mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
    middleInitial: String,
  },
  sex: String,
  civilStatus: String,
  religion: String,
  address: {
    householdNo: String,
    streetName: String,
  },
  precintNumber: String,
  birthday: Date,
  birthplace: String,
  profession: String,
  nationality: String,
  residentType: String,
  blacklist: {
    blacklisted: String,
    details: String,
  }
});

const Resident = mongoose.model('Resident', residentSchema)

export default Resident;

// combine all names, using virtual fields
// di makawa in pass if mag query sin get user/s