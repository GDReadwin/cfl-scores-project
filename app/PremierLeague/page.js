"use client";

// app/PremierLeague/page.js
import React, { useState } from 'react';
import LeagueDetails from '../src/components/LeagueDetails';
import SeasonsList from '../src/components/SeasonsList';
import Standings from '../src/components/Standings';

const PremierLeaguePage = () => {
 const [selectedSeason, setSelectedSeason] = useState(null);
 const leagueId = 'eng.1'; // Premier League ID

 const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
 };

 return (
    <div>
      <LeagueDetails leagueId={leagueId} />
      <SeasonsList leagueId={leagueId} onSeasonSelect={handleSeasonSelect} />
      {selectedSeason && <Standings leagueId={leagueId} season={selectedSeason} />}
    </div>
 );
};

export default PremierLeaguePage;


