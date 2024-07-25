const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(bodyParser.json());

let accessToken = null;
let tokenExpiration = null;

const fetchToken = async () => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await axios.post(
      'https://oauth.battle.net/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    accessToken = response.data.access_token;
    // Set token expiration time (considering a small buffer of a few minutes)
    tokenExpiration = Date.now() + (response.data.expires_in - 300) * 1000; // expires_in is in seconds
  } catch (error) {
    console.error('Error fetching access token:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch access token');
  }
};

// Middleware to check and refresh the token if necessary
const checkTokenMiddleware = async (req, res, next) => {
  if (!accessToken || Date.now() >= tokenExpiration) {
    try {
      await fetchToken();
    } catch (error) {
      return res.status(500).json({ error: 'Failed to refresh access token' });
    }
  }
  next();
};

app.use(checkTokenMiddleware);

app.get('/api/character/:realm/:name', async (req, res) => {
  const { realm, name } = req.params;
  const region = 'us';
  const namespace = 'profile-us';

  try {
    const responseCharacterData = await axios.get(
      `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}?namespace=${namespace}&locale=en_US&access_token=${accessToken}`
    );

    res.json(responseCharacterData.data);
  } catch (error) {
    console.error('Error fetching character data:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});