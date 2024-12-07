const express = require('express');
const session = require('express-session');
const passport = require('passport');
const OpenIDConnectStrategy = require('passport-openidconnect').Strategy;
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

const app = express();

// Proxy and trust settings
app.set('trust proxy', true);

// Base path for the application
const BASE_PATH = '/nodedev';

// Logging middleware
app.use(morgan('combined'));

// Session middleware with proxy support
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: true,
  proxy: true,
  cookie: { 
    secure: true,
    sameSite: 'none',
    path: BASE_PATH
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  console.log('Serializing user:', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('Deserializing user:', user);
  done(null, user);
});

// Configure OpenID Connect Strategy with proxy-aware callback
passport.use(new OpenIDConnectStrategy({
    issuer: process.env.OIDC_ISSUER,
    authorizationURL: process.env.OIDC_AUTHORIZATION_URL,
    tokenURL: process.env.OIDC_TOKEN_URL,
    userInfoURL: process.env.OIDC_USERINFO_URL,
    clientID: process.env.OIDC_CLIENT_ID,
    clientSecret: process.env.OIDC_CLIENT_SECRET,
    callbackURL: `https://psintern.neuro.uni-bremen.de${BASE_PATH}/login/callback`,
    scope: 'openid profile email',
    passReqToCallback: true,
    // Add proxy-specific options
    proxy: true
  },
  (res, issuer, profile, callback) => {
    console.log('OpenID Connect Authentication Details:');
    console.log('Issuer:', issuer);
    console.log('Profile:', JSON.stringify(profile, null, 2));
    console.log('callback:', callback);
    return callback(null, profile);
    
  }
));

// Middleware to handle base path
const attachBasePath = (req, res, next) => {
  req.BASE_PATH = BASE_PATH;
  next();
};

// Apply base path middleware
app.use(BASE_PATH, attachBasePath);

// Routes with base path
app.get(`${BASE_PATH}/`, (req, res) => {
  res.send(`
    <h1>Keycloak OpenID Connect Test</h1>
    ${req.isAuthenticated() 
      ? `<p>Welcome, you are logged in!</p>
         <a href="${BASE_PATH}/profile">View Profile</a>
         <a href="${BASE_PATH}/logout">Logout</a>` 
      : `<a href="${BASE_PATH}/login">Login with Keycloak</a>`
    }
  `);
});

// Initiate login
app.get(`${BASE_PATH}/login`, 
  passport.authenticate('openidconnect', { 
    scope: 'openid profile email' 
  })
);

// Callback handler
app.get(`${BASE_PATH}/login/callback`, 
  (req, res, next) => {
    console.log('Callback received. Query parameters:', req.query);
    next();
  },
  passport.authenticate('openidconnect', { 
    failureRedirect: `${BASE_PATH}/login-failure`,
    successRedirect: `${BASE_PATH}/profile`
  })
);

// Profile route
app.get(`${BASE_PATH}/profile`, ensureAuthenticated, (req, res) => {
  res.send(`
    <h1>User Profile</h1>
    <pre>${JSON.stringify(req.user, null, 2)}</pre>
    <a href="${BASE_PATH}/">Back to Home</a>
    <a href="${BASE_PATH}/logout">Logout</a>
  `);
});

// Login failure route
app.get(`${BASE_PATH}/login-failure`, (req, res) => {
  res.status(401).send(`
    <h1>Login Failed</h1>
    <p>Authentication unsuccessful. Check server logs for details.</p>
    <a href="${BASE_PATH}/">Back to Home</a>
  `);
});

// Logout route
app.get(`${BASE_PATH}/logout`, (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.redirect(`${BASE_PATH}/`);
    }
    res.redirect(`${BASE_PATH}/`);
  });
});

// Middleware to ensure authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  
  console.log('Unauthenticated access attempt');
  res.redirect(`${BASE_PATH}/login`);
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).send(`
    <h1>Internal Server Error</h1>
    <pre>${err.stack}</pre>
  `);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Keycloak OpenID Connect Test Application');
  console.log('Base Path:', BASE_PATH);
  console.log('Callback URL:', `https://psintern.neuro.uni-bremen.de${BASE_PATH}/login/callback`);
});

