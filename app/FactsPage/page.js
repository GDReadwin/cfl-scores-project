"use client";

// FactsPage.js
import { useEffect, useState } from 'react';

const FactsPage = () => {
 const [standings, setStandings] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 // Replace 'YOUR_API_KEY' with your actual API key
 const API_KEY = 'Ru8FMQZaCNikBINjdQ09WR43GVHJZlXp';

 useEffect(() => {
    fetch(`http://api.cfl.ca/v1/standings/2023?key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Extract standings from the response
        const eastStandings = data.data.divisions.east.standings;
        const westStandings = data.data.divisions.west.standings;
        setStandings([...eastStandings, ...westStandings]);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
 }, []);

 if (isLoading) {
    return <div>Loading...</div>;
 }

 if (error) {
    return <div>Error: {error}</div>;
 }

 return (
    <div>
      <h1>Team Standings for 2023</h1>
      <div>
        <h2>East Division</h2>
        {standings.filter(team => team.division_name === 'East').map(team => (
          <div key={team.team_id}>
            <p>{team.full_name} - {team.wins}-{team.losses}-{team.ties}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>West Division</h2>
        {standings.filter(team => team.division_name === 'West').map(team => (
          <div key={team.team_id}>
            <p>{team.full_name} - {team.wins}-{team.losses}-{team.ties}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default FactsPage;