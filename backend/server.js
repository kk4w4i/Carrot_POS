// Import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');

// Create Express app
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to your frontend URL
    credentials: true
}));

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// Routes
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
