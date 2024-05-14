const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const npcs = require('./routes/npcs');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error');

const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/v1/npcs', npcs);

app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();