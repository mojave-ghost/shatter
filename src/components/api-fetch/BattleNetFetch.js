import React { useEffect, useState } from 'react';
import axios from 'axios';

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
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://us.api.blizzard.com/profile/wow/character/${realm}/your-character?namespace=${namespace}&locale=en_US&access_token=${apiKey}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return ( 
    <div>
      <h1>Character Information</h1>
      <p>Name: {data.name} </p>
      <p>Realm: {data.name} </p>
      <p>Level: {data.level} </p>
      <p>Class: {data.character_class.name} </p>
      {/* Add more fields as needed */}
    </div>
   );
}
 
export default BattleNetFetch;