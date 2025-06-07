const express = require('express');
const router = express.Router();

// POST login (to be implemented)
router.post('/login', (req, res) => {
  // Passport logic will go here
  res.send('Login logic not implemented yet');
});

// POST register (to be implemented)
router.post('/register', (req, res) => {
  // Registration logic will go here
  res.send('Register logic not implemented yet');
});

// GET logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

module.exports = router; 