import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BattleNetFetch = ({ playerName, realm, children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playerName || !realm) return;

    const fetchData = async () => {
      try {
        const [responseCharacterData, responseCharacterAppearance, responseCharacterSpec, responseCharacterAvatar] = await Promise.all([
          axios.get(`/api/character/${realm}/${playerName}`),
          axios.get(`/api/character/${realm}/${playerName}/appearance`),
          axios.get(`/api/character/${realm}/${playerName}/specializations`),
          axios.get(`/api/character/${realm}/${playerName}/character-media`)
        ]);

        const fetchedData = {
          characterData: responseCharacterData.data,
          appearanceData: responseCharacterAppearance.data,
          specData: responseCharacterSpec.data,
          avatarData: responseCharacterAvatar.data
        };

        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching character data:', error);
        setError(error);
      }
    };

    fetchData();
  }, [playerName, realm]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return children(data);
};

export default BattleNetFetch;