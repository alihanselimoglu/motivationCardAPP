const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const db = require('./config/db');

const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', require('./routes/userRoutes'));
app.use('/cards', require('./routes/cardRoutes'));

db();

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
