const express = require('express');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
// Initialize OAuth2Client
const oauth2Client = new OAuth2Client(
  process.env.OAUTH_CLIENTID,
  process.env.OAUTH_CLIENT_SECRET,
  process.env.OAUTH_REDIRECT_URI
);

// Generate the OAuth URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://mail.google.com/' // Scope for Gmail API
});

// Route to initiate OAuth2 flow
app.get('/auth/google', (req, res) => {
  res.redirect(authUrl);
});

// Route for OAuth2 callback
app.get('/oauthcallback', async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Tokens:', tokens);
    // Store tokens securely (e.g., in a database or environment variables)
    res.send('Authorization successful! You can now send emails.');
  } catch (error) {
    console.error('Error retrieving access token:', error);
    res.status(500).send('Error retrieving access token');
  }
});

// Route to send email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create transporter using OAuth2
    const accessToken = await getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER, // Your Gmail email address
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      }
    });

    // Setup email data
    const mailOptions = {
      from: `Nellys Sweet Treats <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL, // Replace with your client's email address
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Function to get access token
const getAccessToken = async () => {
  try {
    const { tokens } = await oauth2Client.refreshToken(process.env.OAUTH_REFRESH_TOKEN);
    return tokens.access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error.message);
    throw error;
  }
};


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
