import mongoose from 'mongoose'

const aboutSchema = mongoose.Schema({
  about: String,
})

const About = mongoose.model('about', aboutSchema)

export default About;