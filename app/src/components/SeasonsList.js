// app/src/components/SeasonsList.js
import React from 'react';

const SeasonsList = ({ leagueId, onSeasonSelect }) => {
 const [seasons, setSeasons] = React.useState([]);

 React.useEffect(() => {
    fetch(`https://api-football-standings.azharimm.site/leagues/${leagueId}/seasons`)
      .then(response => response.json())
      .then(data => setSeasons(data.data.seasons))
      .catch(error => console.error('Error fetching seasons:', error));
 }, [leagueId]);

 return (
    <div>
      <h3>Seasons:</h3>
      <select onChange={(e) => onSeasonSelect(e.target.value)}>
        <option value="">Select a season</option>
        {seasons.map((season, index) => (
          <option key={index} value={season}>{season}</option>
        ))}
      </select>
    </div>
 );
};

export default SeasonsList;

