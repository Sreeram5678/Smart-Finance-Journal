const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
require('dotenv').config();

const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: false }));

// Session
app.use(session({
  secret: process.env.SESSION_SECRET || 'financejournal_secret',
  resave: false,
  saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 