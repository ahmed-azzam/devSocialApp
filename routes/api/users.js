const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const User = require('../../models/User');
const { getMaxListeners } = require('../../models/User');

// @route           Post api/users
// @description     Register user
// @access          Public

router.post(
  '/',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Email not valid').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
  ],

  async (req, res) => {
    //console.log(req.body); // this line works becouse of the Init Middleware line "express.json" in server.js
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // see if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ mas: 'User already exist' }] });
      }
      //Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //encrypt pasword using bcrtypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken

      res.send('User registered');
    } catch (err) {
      console.log(err.massage);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
