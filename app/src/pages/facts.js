// pages/facts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FactsPage = () => {
 const [games, setGames] = useState([]);
 const [filter, setFilter] = useState({});
 const [sort, setSort] = useState('');

 useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://api.cfl.ca/v1/games/2020', {
          params: {
            key: process.env.NEXT_PUBLIC_CFL_API_KEY,
            filter: filter,
            sort: sort,
          },
        });
        setGames(response.data);
      } catch (error) {
        console.error('Failed to fetch games:', error);
      }
    };

    fetchGames();
 }, [filter, sort]);

 return (
    <FactsLayout>
      <div>
        <h2>CFL Games</h2>
        {/* Placeholder for filtering and sorting options */}
        <div>
          <label>
            Filter by:
            {/* Implement filtering UI here */}
          </label>
          <label>
            Sort by:
            {/* Implement sorting UI here */}
          </label>
        </div>
        <ul>
          {games.map((game) => (
            <li key={game.game_id}>
              {game.date_start} - {game.team_1.nickname} vs {game.team_2.nickname}
            </li>
          ))}
        </ul>
      </div>
    </FactsLayout>
 );
};

FactsPage.getLayout = (page) => {
 return <FactsLayout>{page}</FactsLayout>;
};

export default FactsPage;
