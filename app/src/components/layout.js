import React, { useState } from 'react';
import { teams } from '../src/assets/TeamColours';

function Layout({ children }) {
 const [selectedTeam, setSelectedTeam] = useState(teams[0]);

 return (
    <div>
      <select onChange={(e) => setSelectedTeam(teams.find(team => team.name === e.target.value))}>
        {teams.map((team, index) => (
          <option key={index} value={team.name}>{team.name}</option>
        ))}
      </select>
      {/* Your layout content here */}
      <style jsx global>{`
        :root {
          --primary-color: ${selectedTeam.primaryColor};
          --secondary-color: ${selectedTeam.secondaryColor};
          --tertiary-color: ${selectedTeam.tertiaryColor};
        }
        /* Use the CSS variables in your styles */
      `}</style>
      {children}
    </div>
 );
}

export default Layout;

