const express = require('express');
const verifyToken = require('../middleware/requireAuth');
const { loginUser, signupUser, getUser, logoutUser } = require('../controllers/userControllers');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/logout', logoutUser)

router.get('/profile', verifyToken, getUser);

router.get('/verify-token', verifyToken, (req, res) => {
    res.status(200).json({ user: req.user });
});

module.exports = router;
