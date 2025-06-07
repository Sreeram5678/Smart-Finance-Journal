# Smart Finance Journal

A modern finance journal web app with secure authentication and a beautiful login/register experience.

## Stack
- Node.js + Express.js
- EJS (server-rendered HTML)
- CSS3, Vanilla JS
- Passport.js (local + social login)

## Folder Structure
```
smart-finance-journal/
│
├── public/                # Static assets (CSS, images, JS)
│   ├── css/
│   ├── images/
│   └── js/
│
├── routes/                # Express route handlers
│   ├── auth.js
│   └── index.js
│
├── views/                 # EJS templates
│   ├── partials/
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
│
├── config/                # Passport and other configs
│   └── passport.js
│
├── app.js                 # Main Express app
├── package.json
└── README.md
```

## Features
- Beautiful login/register UI
- Local and social authentication (Google, Facebook, Apple)
- Modular, easy-to-manage codebase
- Redirect to dashboard after login 