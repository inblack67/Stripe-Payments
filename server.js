const express = require('express');
const app = express();
require('colors');
const charge = require('./routes/charge');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });

app.use(express.json());

app.use('/api/charge', charge);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.green.bold)
})