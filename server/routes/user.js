const router = require("express").Router();
const User = require("../models/User");
const { regValidation } = require("./validation")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const verifyToken = require('./verifyToken')
require('dotenv').config();

router.post('/register', async (req, res) => {
    const { name, email, password, address } = req.body;
    const { error } = regValidation(req.body);
    if (error) return res.send(error.details[0].message);

    const usedEmail = await User.findOne({ email: req.body.email })
    if (usedEmail) return res.status(400).send("Email is already Registered");


    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        email,
        password: hash,
        address
    })

    try {
        const savedUser = await user.save();
        res.send(savedUser)
    } catch (error) {
        res.status(400).send(error)
    }


})

// const tokenSecret = '12345';
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const findedUser = await User.findOne({ email: email })
    if (!findedUser) return res.status(400).send("Email Incorrect");

    const compare = await bcrypt.compare(password, findedUser.password);
    if (!compare) return res.status(400).send("Password Incorrect");

    const token = jwt.sign({ email: findedUser.email },process.env.TOKEN_SECRET)
    res.header('token', token).send();
    

})


router.post('/forget-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("This email doesn't exist");
        }

        const token = jwt.sign({ id: user._id }, tokenSecret, { expiresIn: '1h' });
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000;
        await user.save();

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'alvena88@ethereal.email',
                pass: '4p8umPBq2heJ4bYVWE'
            }
        });

        const mailOptions = {
            to: user.email,
            from:"alvena88@ethereal.email",
            subject: "Password Reset",
            text: `Please click on the following link, or paste it into your browser to complete the process:\n\n
            http://localhost:3000/reset-password/${token}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.\n`
        }

        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                console.error('There was an error: ', err);
                return res.status(500).send('Error in sending email');
            }
            res.status(200).send('Recovery email sent');
        });
    } catch (err) {
        res.status(500).send('Error on the server');
    }

})


router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        console.log('Received reset-password request');
        console.log('Token:', token);
        
        const decoded = jwt.verify(token, tokenSecret);
        console.log('Decoded token:', decoded);

        const user = await User.findOne({
            _id: decoded.id,
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            console.log('No user found or token expired');
            return res.status(400).send('Password reset token is invalid or has expired');
        }

        console.log('User found:', user);

        user.password = await bcrypt.hash(password, 10);
        console.log('Password hashed');

        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
        console.log('User saved');

        res.status(200).send('Password has been reset');
    } catch (err) {
        console.error('Error during password reset:', err);
        res.status(500).send('Error on the server');
    }
});

module.exports = router;