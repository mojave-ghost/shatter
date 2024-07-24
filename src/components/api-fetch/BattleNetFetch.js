import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

const BattleNetFetch = ({ playerName, realm }) => {
  const [data, setData] = useState(null);
  const [appearanceData, setAppearanceData] = useState(null);
  const [specData, setSpecData] = useState(null);
  const [avatarData, setAvatarData] = useState(null);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const region = 'us';
  const namespace = 'profile-us';

  useEffect(() => {
    // Set up the AJAX request to get the access token
    const credentials = btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`);
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
        setAccessToken(response.access_token);
      },
      error: function(error) {
        // Handle the error
        console.error(error);
        setError(error);
      }
    });
  }, []);

  useEffect(() => {
    if (!accessToken || !playerName || !realm) return;

    const fetchData = async () => {
      try {
        // Fetch character data
        const responseCharacterData = await axios.get(
          `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${playerName}?namespace=${namespace}&locale=en_US&access_token=${accessToken}`
        );
        setData(responseCharacterData.data);

        // Fetch character appearance data
        const responseCharacterAppearance = await axios.get(
          `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${playerName}/appearance?namespace=${namespace}&locale=en_US&access_token=${accessToken}`
        );
        setAppearanceData(responseCharacterAppearance.data);

        // Fetch character specialization data
        const responseCharacterSpec = await axios.get(
          `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${playerName}/specializations?namespace=${namespace}&locale=en_US&access_token=${accessToken}`
        );
        setSpecData(responseCharacterSpec.data);

        // Fetch character avatar data
        const responseCharacterAvatar = await axios.get(
          `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${playerName}/character-media?namespace=${namespace}&locale=en_US&access_token=${accessToken}`
        );
        setAvatarData(responseCharacterAvatar.data);

        // Scroll to the result containers
        $('html, body').animate({
          scrollTop: $('#container2').offset().top
        }, 2000);

      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [accessToken, playerName, realm]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data || !appearanceData || !specData || !avatarData) {
    return <div>Loading...</div>;
  }

  let spec1, spec2, spec3;
  try {
    spec1 = specData.specializations[0]?.specialization?.name;
    spec2 = specData.specializations[1]?.specialization?.name;
    spec3 = specData.specializations[2]?.specialization?.name;
  } catch (err) {
    console.error("oops!", err.message);
  }

  return (
    <div id="container2">
      <h1>Character Information</h1>
      <p>Name: {data.name}</p>
      <p>Realm: {data.realm.name}</p>
      <p>Level: {data.level}</p>
      <p>Class: {appearanceData.playable_class.name}</p>
      <p>Spec 1: {spec1}</p>
      <p>Spec 2: {spec2}</p>
      <p>Spec 3: {spec3}</p>
      <div>
        <h3>{avatarData.character.name}</h3>
        <h4>{avatarData.character.realm.name}</h4>
        <img
          src={avatarData.assets[1]?.value}
          alt="Character Avatar"
          style={{
            width: '80%',
            background: 'black',
            margin: '5%',
            borderRadius: '50px',
            borderStyle: 'inset',
          }}
        />
      </div>
    </div>
  );
}

export default BattleNetFetch;