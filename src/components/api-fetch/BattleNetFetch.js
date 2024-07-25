import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BattleNetFetch = ({ playerName, realm }) => {
  const [data, setData] = useState(null);
  const [appearanceData, setAppearanceData] = useState(null);
  const [specData, setSpecData] = useState(null);
  const [avatarData, setAvatarData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playerName || !realm) return;

    const fetchData = async () => {
      try {
        const responseCharacterData = await axios.get(`/api/character/${realm}/${playerName}`);
        setData(responseCharacterData.data);

        const responseCharacterAppearance = await axios.get(`/api/character/${realm}/${playerName}/appearance`);
        setAppearanceData(responseCharacterAppearance.data);

        const responseCharacterSpec = await axios.get(`/api/character/${realm}/${playerName}/specializations`);
        setSpecData(responseCharacterSpec.data);

        const responseCharacterAvatar = await axios.get(`/api/character/${realm}/${playerName}/character-media`);
        setAvatarData(responseCharacterAvatar.data);
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
  if (!data || !appearanceData || !specData || !avatarData) {
    return <div>Loading...</div>;
  }

  let spec1, spec2, spec3;
  try {
    spec1 = specData.specializations[0]?.specialization?.name;
    spec2 = specData.specializations[1]?.specialization?.name;
    spec3 = specData.specializations[2]?.specialization?.name;
  } catch (err) {
    console.error("Error parsing specializations:", err.message);
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