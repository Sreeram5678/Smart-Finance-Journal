const express = require('express');
const router = express.Router();

// Home redirects to login
router.get('/', (req, res) => {
  res.redirect('/login');
});

// Login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Register page
router.get('/register', (req, res) => {
  res.render('register');
});

// Dashboard (protected)
router.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.redirect('/login');
  }
  res.render('dashboard', { user: req.user });
});

module.exports = router; 