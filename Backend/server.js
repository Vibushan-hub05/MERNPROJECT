const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Auth'); 
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://vibushanvinayak93:Vibu%402005s@wisdomwave-05.uoshf.mongodb.net/vibushanvinayak93?retryWrites=true&w=majority&appName=WisdomWave-05')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Could not connect to MongoDB Atlas...', err));
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});
app.use((req, res) => {
  res.status(404).send('404: Route not found');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
