import React from 'react';
import { useLocation } from 'react-router-dom';
import BattleNetFetch from '../api-fetch/BattleNetFetch';

const SearchResults = () => {
    const location = useLocation();
    const { characterData, loading, error } = location.state || {};

    return (
        <div className="relative flex justify-center align-center">
            <BattleNetFetch
                loading={loading}
                error={error}
                characterData={characterData}
            />
        </div>
    );
};

export default SearchResults;