const { User } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const authenticate = (req, res, next) => {
    const { email, pass } = req.body;
    const token = req.cookies.uuid;

    try {
        if (!token) {
            return res.status(401).json({ message: 'No token provided.' });
        }
        // Verify the token
        jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
            if (err) {
                // Token verification failed
                return res.status(403).json({ message: 'Token verification failed.' });
            }
    
            // Token is valid, and the payload is available in the decoded object
            const emailID = decoded.email; // Assuming your JWT payload has a 'userId' field
            console.log('Email ID:', emailID);
            console.log('Cookie value:', token);
            // Continue with your logic for the protected route
            // return res.json({ message: 'Protected route accessed successfully.' });

            req.token = token;
            next();
        });   
    } catch (error) {
        res.status(500).json({
            "error":error
        })
    }

}

module.exports = authenticate;