const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Function to create a JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);

        // Set the token as an HttpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'Strict',
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
        });

        res.status(200).json({ user_id: user._id, email: user.email });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Login error:', error);

        // Provide more context in the error response
        res.status(400).json({ 
            error: error.message,
            context: 'Login failed. Please check your email and password and try again.'
        });
    }
};


// Signup user
const signupUser = async (req, res) => {
    const { businessName, slug, email, password } = req.body;

    try {
        const user = await User.signup(businessName, slug, email, password);

        res.status(200).json({ user_id: user._id, slug: user.slug });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const logoutUser = (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'Strict',
        expires: new Date(0) // Set the cookie to expire immediately
    });

    res.status(200).json({ message: 'Logout successful' });
};

// Get registered user
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const email = user.email;
        const businessName = user.businessName;

        res.status(200).json({ email, businessName });
    } catch (error) {
        res.status(500).json({ error: 'Unable to get user' });
    }
};

module.exports = { signupUser, loginUser, getUser, logoutUser };
