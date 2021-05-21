import mongoose from 'mongoose'

const certificateSchema = mongoose.Schema({
  controlNo: Number,
  certificateType: [
    'Barangay Clearance', 
    'Business Clearance', 
    'Certificate of Good moral', 
    'Certificate of good moral'
  ],
  name: String,
  address: String,
  certificatePurpose: [
    'Police Clearance',
    'NBI Clearance',
    'BIR(TIN)',
    'Employment',
    'School Purpose',
    'Others'
  ],
  sex: ['Male', 'Female']
});

const Certificate = mongoose.model('certificate', certificateSchema)

export default Certificate;

// combine all names, using virtual fields
// di makawa in pass if mag query sin get user/s