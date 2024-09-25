import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import WoWLogo from '../../assets/images/war-within-logo.png';

const Home = () => {
    const [accessToken, setAccessToken] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [realm, setRealm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
        console.log(error);
        try {
            // Fetch general character data
            const summaryResponse = await axios.get(
                `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=${accessToken}`
            );
            const appearanceResponse = await axios.get(
                `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/appearance?namespace=profile-us&locale=en_US&access_token=${accessToken}`
            );
            const mediaResponse = await axios.get(
                `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/character-media?namespace=profile-us&locale=en_US&access_token=${accessToken}`
            );
            const characterData = {
                name: appearanceResponse.data.character.name,
                realm: appearanceResponse.data.character.realm.name,
                level: summaryResponse.data.level,
                race: summaryResponse.data.race.name,
                class: appearanceResponse.data.playable_class.name,
                activeSpec: summaryResponse.data.active_spec.name,
                avatarUrl: mediaResponse.data.assets.find(asset => asset.key === 'inset').value
            };

            // Fetch specialization data
            const specResponse = await axios.get(
              `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/specializations?namespace=profile-us&locale=en_US&access_token=${accessToken}`
            );
            const specializationData = {
              specOne: specResponse.data.specializations[0].specialization.name,
              specTwo: specResponse.data.specializations[1].specialization.name,
              specThree: specResponse.data.specializations[2].specialization.name,
            };
            try {
              let specFour = specializationData.specFour = specResponse.data.specializations[0].specialization.name;
              Object.assign(specializationData, { specFour });
            } catch (error) {
              console.error('Error fetching fourth specialization:', error);
              specializationData.specFour = 'None';
            }
              
            
            // Fetch PvP ratings 
            let twoVStwoResponse, threeVSthreeResponse, soloShuffleOneResponse, soloShuffleTwoResponse, soloShuffleThreeResponse, soloShuffleFourResponse;

            try {
              twoVStwoResponse = await axios.get(
                  `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/pvp-bracket/2v2?namespace=profile-us&locale=en_US&access_token=${accessToken}`
              );
            } catch (error) {
              console.error('Error fetching 2v2 rating:', error);
              twoVStwoResponse = { data: { rating: 0 } };
            }
            try {
              threeVSthreeResponse = await axios.get(
                  `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=${accessToken}`
              );
            } catch (error) {
              console.error('Error fetching 3v3 rating:', error);
              threeVSthreeResponse = { data: { rating: 0 } };
            }
            try {
              soloShuffleOneResponse = await axios.get(
                  `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/pvp-bracket/shuffle-${characterData.class.toLowerCase()}-${specializationData.specOne.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=${accessToken}`
              );
            } catch (error) {
              console.error('Error fetching solo shuffle 1 rating:', error);
              soloShuffleOneResponse = { data: { rating: 0 } };
            }
            try {
              soloShuffleTwoResponse = await axios.get(
                  `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/pvp-bracket/huffle-${characterData.class.toLowerCase()}-${specializationData.specTwo.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=${accessToken}`
              );
            } catch (error) {
              console.error('Error fetching solo shuffle 2 rating:', error);
              soloShuffleTwoResponse = { data: { rating: 0 } };
            }
            try {
              soloShuffleThreeResponse = await axios.get(
                  `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/pvp-bracket/huffle-${characterData.class.toLowerCase()}-${specializationData.specThree.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=${accessToken}`
              );
            } catch (error) {
              console.error('Error fetching solo shuffle 3 rating:', error);
              soloShuffleThreeResponse = { data: { rating: 0 } };
            }
            try {
              soloShuffleFourResponse = await axios.get(
                  `https://us.api.blizzard.com/profile/wow/character/${realm.toLowerCase()}/${characterName.toLowerCase()}/pvp-bracket/huffle-${characterData.class.toLowerCase()}-${specializationData.specFour.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=${accessToken}`
              );
            } catch (error) {
              console.error('Error fetching solo shuffle 4 rating:', error);
              soloShuffleFourResponse = { data: { rating: 0 } };
            }

            const pvpData = {
              twosRating: twoVStwoResponse.data.rating,
              threesRating: threeVSthreeResponse.data.rating,
              soloRating1: soloShuffleOneResponse.data.rating,
              soloRating2: soloShuffleTwoResponse.data.rating,
              soloRating3: soloShuffleThreeResponse.data.rating,
              soloRating4: soloShuffleFourResponse.data.rating,
            }

            // Combine all character data
            Object.assign(characterData, specializationData);
            Object.assign(characterData, pvpData);
            // Navigate to the search results page with the character data
            navigate('/search-results', { state: { characterData, loading: false, error: null } });
        } catch (error) {
            console.error('Error fetching character data:', error);
            setError('Failed to fetch character data. Please check the character name and realm.');
            setLoading(false);
        }
    };

    return (
        <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-custom">
            <img src={WoWLogo} alt="DragonflightLogo" />
            <div className="relative flex flex-col items-center justify-center">
                <h1 className="font-secondary font-bold text-4xl md:text-5xl md:tracking-widest text-primaryText tracking-wider">
                    SHATTER.IO
                </h1>
                <h2 className="font-primary text-2xl text-primaryText md:tracking-wider md:text-3xl">
                    World of Warcraft PvP Search Engine
                </h2>
                <p className="font-primary italic text-xl text-primaryText md:tracking-wide md:text-2xl">
                    Find your next opponent or team!
                </p>
            </div>
            <Search
                characterName={characterName}
                realm={realm}
                setCharacterName={setCharacterName}
                setRealm={setRealm}
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </section>
    );
}

export default Home;