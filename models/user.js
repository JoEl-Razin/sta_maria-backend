import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: {
    firstName: String,
    lastName: String,
    middleInitial: String,
  },
  roles: [String],
});

const User = mongoose.model('User', userSchema)

export default User;

// combine all names, using virtual fields
// di makawa in pass if mag query sin get user/s