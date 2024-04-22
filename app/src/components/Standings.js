// components/Standings.js
import React, { useEffect, useState } from 'react';

const Standings = ({ leagueId, season }) => {
 const [standings, setStandings] = useState([]);

 useEffect(() => {
    fetch(`https://api-football-standings.azharimm.site/leagues/${leagueId}/standings?season=${season}&sort=asc`)
      .then(response => response.json())
      .then(data => setStandings(data.data.standings))
      .catch(error => console.error('Error fetching standings:', error));
 }, [leagueId, season]);

 return (
    <div>
      <h3>Standings for {season}:</h3>
      <ul>
        {standings.map((team, index) => (
          <li key={index}>{team.name} - {team.points}</li>
        ))}
      </ul>
    </div>
 );
};

export default Standings;
