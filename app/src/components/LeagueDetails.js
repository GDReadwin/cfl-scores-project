// components/LeagueDetails.js
import React, { useEffect, useState } from 'react';

const LeagueDetails = ({ leagueId }) => {
 const [leagueDetails, setLeagueDetails] = useState(null);

 useEffect(() => {
    fetch(`https://api-football-standings.azharimm.site/leagues/${leagueId}`)
      .then(response => response.json())
      .then(data => setLeagueDetails(data.data))
      .catch(error => console.error('Error fetching league details:', error));
 }, [leagueId]);

 return (
    <div>
      {leagueDetails ? (
        <>
          <h2>{leagueDetails.name}</h2>
          <img src={leagueDetails.logos.light} alt={leagueDetails.name} />
        </>
      ) : (
        <p>Loading league details...</p>
      )}
    </div>
 );
};

export default LeagueDetails;
