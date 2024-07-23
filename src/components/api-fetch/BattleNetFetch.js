import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

const BattleNetFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const region = 'us';
  const namespace = 'profile-us';
  const realm = 'your-realm';

  /* To request access tokens, an application must make a POST request with the following multipart form 
data to the token URI: grant_type=client_credentials.
The application must pass basic HTTP auth credentials using the client_id as the user and 
client_secret as the password.*/


// Set up the AJAX request
$.ajax({
  url: 'https://oauth.battle.net/token',
  type: 'POST',
  headers: {
    'Authorization': 'Basic ' + credentials,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: {
    'grant_type': 'client_credentials'
  },
  success: function(response) {
    // Handle the successful response
    accessToken = response.access_token;
  },
  error: function(error) {
    // Handle the error
    console.error(error);
  }
});

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          'https://oauth.battle.net/token',
          'grant_type=client_credentials',
          {
            headers: {
              'Authorization': 'Basic ' + btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        setAccessToken(response.data.access_token);
      } catch (error) {
        setError(error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (!accessToken || !playerName || !realm) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${playerName}?namespace=${namespace}&locale=en_US&access_token=${accessToken}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [accessToken, playerName, realm]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return ( 
    <div>
      <h1>Character Information</h1>
      <p>Name: {data.name}</p>
      <p>Realm: {data.realm.name}</p>
      <p>Level: {data.level}</p>
      <p>Class: {data.character_class.name}</p>
      {/* Add more fields as needed */}
    </div>
   );
}
 
export default BattleNetFetch;