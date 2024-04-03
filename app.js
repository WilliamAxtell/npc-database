const express = require('express');
const app = express();
const npcs = require('./routes/npcs');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/npc-lookup', (req, res) => {
    res.send('NPC Lookup');
});

app.use('/api/v1/npcs', npcs);

const port = 3000;

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