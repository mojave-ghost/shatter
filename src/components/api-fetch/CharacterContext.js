import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
const [accessToken, setAccessToken] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [realm, setRealm] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch access token on component mount
    const fetchAccessToken = async () => {
      const clientId = process.env.REACT_APP_CLIENT_ID;
      const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
      const credentials = btoa(`${clientId}:${clientSecret}`);

      try {
        const response = await axios.post('https://oauth.battle.net/token', 
          'grant_type=client_credentials',
          {
            headers: {
              'Authorization': `Basic ${credentials}`,
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
        setError('Failed to authenticate with Blizzard API');
      }
    };

    fetchAccessToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const appearanceResponse = await axios.get(
        `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/appearance?namespace=profile-us&locale=en_US&access_token=${accessToken}`
      );

      const mediaResponse = await axios.get(
        `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/character-media?namespace=profile-us&locale=en_US&access_token=${accessToken}`
      );

      setCharacterData({
        name: appearanceResponse.data.character.name,
        realm: appearanceResponse.data.character.realm.name,
        class: appearanceResponse.data.playable_class.name,
        avatarUrl: mediaResponse.data.assets.find(asset => asset.key === 'avatar').value
      });

    } catch (error) {
      console.error('Error fetching character data:', error);
      setError('Failed to fetch character data. Please check the character name and realm.');
    } finally {
      setLoading(false);
    }
  };
};

