// pages/index.js
"use client";
import React, { useState } from 'react';
import Layout from '../src/components/layout';
import { teams } from '../src/assets/TeamColours';

export default function LandingPage() {
 const [selectedTeam, setSelectedTeam] = useState(teams[0]);

 return (
    <Layout>
      <h1>Welcome to CFL Scores</h1>
      <select onChange={(e) => setSelectedTeam(teams.find(team => team.name === e.target.value))}>
        {teams.map((team, index) => (
          <option key={index} value={team.name}>{team.name}</option>
        ))}
      </select>
      {/* Other content */}
      <style jsx global>{`
        :root {
          --primary-color: ${selectedTeam.primaryColor};
          --secondary-color: ${selectedTeam.secondaryColor};
          --tertiary-color: ${selectedTeam.tertiaryColor};
        }
        body {
          background-color: var(--primary-color);
          color: var(--secondary-color);
        }
        /* Add more styles using the CSS variables */
      `}</style>
    </Layout>
 );
}
