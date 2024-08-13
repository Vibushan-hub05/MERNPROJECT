const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./User'); 
const router = express.Router();
router.post('/signup', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match" });
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.json({ success: false, message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.json({ success: true });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ success: false, message: `Error creating user: ${error.message}` });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }
        res.json({ success: true });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: `Error logging in: ${error.message}` });
    }
});

module.exports = router;
