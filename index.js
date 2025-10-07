const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const { connectToMongo } = require('./src/config/Connection');
const apiRoutes = require('./src/routes/index');

// Middleware to parse JSON bodies
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ message: "server created" });
});

// API routes
app.use('/api', apiRoutes);

connectToMongo();

app.listen(process.env.PORT, () => {
    
    console.log(`Server started successfully on port ${process.env.PORT}`);
});
