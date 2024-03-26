const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/npc-lookup', (req, res) => {
    res.send('NPC Lookup');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks') - get all tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update a task
// app.delete('/api/v1/tasks/:id') - delete a task


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});