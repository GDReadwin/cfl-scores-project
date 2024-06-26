"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

// Define the teams constant directly in this file
const teams = [
 { name: "British Colombia Lions", primaryColor: "#f15524", secondaryColor: "#000000", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image1.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "12-6-0-24" },
 { name: "Calgary Stampeders", primaryColor: "#d0202d", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false, imagepath: './public/images/image2.jpg', greyCupWins: 8, mostRecentWin: "2018", lastSeasonRecord: "6-12-0-12" },
 { name: "Edmonton Elk", primaryColor: "#2b5235", secondaryColor: "#ffb612", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image3.jpg', greyCupWins: 14, mostRecentWin: "2015", lastSeasonRecord: "4-14-0-8" },
 { name: "Hamilton Tiger-Cats", primaryColor: "#ffb612", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false, imagepath: './public/images/image4.jpg', greyCupWins: 8, mostRecentWin: "1999", lastSeasonRecord: "8-10-0-16" },
 { name: "Montreal Alouettes", primaryColor: "#183c6e", secondaryColor: "#8c2334", tertiaryColor: "#a2a5aa", clicked: false, imagepath: './public/images/image5.jpg', greyCupWins: 8, mostRecentWin: "2023", lastSeasonRecord: "11-7-0-22" },
 { name: "Ottawa Redblacks", primaryColor: "#000000", secondaryColor: "#ffffff", tertiaryColor: "#a71930", clicked: false, imagepath: './public/images/image6.jpg', greyCupWins: 1, mostRecentWin: "2016", lastSeasonRecord: "4-14-0-8" },
 { name: "Saskatchewan Roughriders", primaryColor: "#036242", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false, imagepath: './public/images/image7.jpg', greyCupWins: 4, mostRecentWin: "2013", lastSeasonRecord: "6-12-0-12" },
 { name: "Toronto Argonauts", primaryColor: "#5f8fb1", secondaryColor: "#0d2240", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image8.jpg', greyCupWins: 18, mostRecentWin: "2022", lastSeasonRecord: "16-2-0-32" },
 { name: "Winnipeg Blue Bombers", primaryColor: "#1d3d37", secondaryColor: "#bc9658", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image9.jpg', greyCupWins: 12, mostRecentWin: "2021", lastSeasonRecord: "14-4-0-28" },
];

export default function Home() {
 const [selectedTeam, setSelectedTeam] = useState(null);
 const [teamsState, setTeamsState] = useState(teams); 

 useEffect(() => {
    if (selectedTeam) {
      document.documentElement.style.setProperty('--primary-color', selectedTeam.primaryColor);
      document.documentElement.style.setProperty('--secondary-color', selectedTeam.secondaryColor);
      document.documentElement.style.setProperty('--tertiary-color', selectedTeam.tertiaryColor);
    }
 }, [selectedTeam]);



  const handleTeamClick = (index) => {
    // Reset the "clicked" state for all teams to false
    const updatedTeams = teamsState.map(team => ({ ...team, clicked: false }));
   
    // Set the "clicked" state for the selected team to true
    updatedTeams[index] = { ...updatedTeams[index], clicked: true };
   
    // Update the state with the new array
    setTeamsState(updatedTeams);
   
    // Set the selected team
    setSelectedTeam(updatedTeams[index]);
   };
   

   return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      {selectedTeam && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '600px', // Adjust this value as needed
          margin: '0 auto',
        }}>
          <h1 className="text-4xl font-bold">Chosen Team</h1>
          <h2 className="text-2xl">{selectedTeam.name}</h2>
          <Image
            src={`/images/image${teams.findIndex(team => team.name === selectedTeam.name) + 1}.jpg`}
            alt={`Image ${selectedTeam.name}`}
            width={300} // Double the width
            height={300} // Double the height
            className="square"
          />
          <p>Number of Grey Cup Wins: {selectedTeam.greyCupWins}</p>
          <p>Most Recent Grey Cup Win: {selectedTeam.mostRecentWin}</p>
          <p>Last Season Record: {selectedTeam.lastSeasonRecord}</p>
          {/* New section for displaying team colors */}
          <div className="flex justify-center mt-4">
            <div className="flex flex-col items-center">
              <div style={{ backgroundColor: selectedTeam.primaryColor, width: '50px', height: '50px' }}></div>
              <p>Primary Color</p>
            </div>
            <div className="flex flex-col items-center ml-4">
              <div style={{ backgroundColor: selectedTeam.secondaryColor, width: '50px', height: '50px' }}></div>
              <p>Secondary Color</p>
            </div>
            <div className="flex flex-col items-center ml-4">
              <div style={{ backgroundColor: selectedTeam.tertiaryColor, width: '50px', height: '50px' }}></div>
              <p>Tertiary Color</p>
            </div>
          </div>
        </div>
      )}
   
       <header className="text-center mb-10">
         <h1 className="text-4xl font-bold">Choose your favorite team</h1>
       </header>
   
       <div className="flex flex-wrap justify-center gap-4">
         {teamsState.map((team, index) => (
           <div key={index} className="relative w-32 h-32">
             <Image
               src={`/images/image${index + 1}.jpg`}
               alt={`Image ${index + 1}`}
               width={150}
               height={150}
               className="square"
             />
             <button
               className={`absolute inset-0 bg-transparent text-black flex items-center justify-center w-32 h-32 button-hover ${team.clicked ? 'clicked-button' : ''}`}
               onClick={() => handleTeamClick(index)}
             >
               {/* Button content */}
             </button>
           </div>
         ))}
       </div>
    </main>
   );
   
}
