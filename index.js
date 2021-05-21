import { Server } from 'http';
import * as mongoose from './library/mongoose.js';
import express from 'express';
import cors from 'cors'


import user from './routes/user.js'
import resident from './routes/resident.js'
import household from './routes/household.js'
import business from './routes/business.js'
import certificate from './routes/certificate.js'

// const CONNECTION_URL = `mongodb+srv://elrazinmjo:elrazinmjo@cluster0.ihq4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const CONNECTION_URL = 'mongodb://localhost/stamaria';

let server;

export async function start(port) {
  const PORT = process.env.PORT || port || 5000

  const app = express();
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  app.use(cors());

  // user routes
  app.use('/users', user);
  app.use('/resident', resident)
  app.use('/household', household)
  app.use('/business', business)
  app.use('/certificate', certificate)

  await mongoose.start(CONNECTION_URL);

  server = app.listen(PORT);

  console.log(`Server running on port: ${PORT}`);

  return server
}

export async function stop() {
  if (server) {
    Promise.all([
      server.close(),
      mongoose.stop(),
    ]);
  }
}



// WEB SERVER

// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors'

// import users from './routes/user.js'

// const app = express()

// app.use(bodyParser.json({ limit: '30mb', extended: true}));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}));
// app.use(cors());

// app.use('/api/', user)

// // MONGOOSE CONNECTION
// const CONNECTION_URL = `mongodb+srv://elrazinmjo:elrazinmjo@cluster0.ihq4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// const PORT = process.env.PORT || 5000

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false)


