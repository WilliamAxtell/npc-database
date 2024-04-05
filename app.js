const express = require('express');
const path = require('path');
const app = express();
const npcs = require('./routes/npcs');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error');

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/npc-lookup', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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