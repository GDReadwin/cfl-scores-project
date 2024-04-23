"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

// Define the teams constant directly in this file
const teams = [
 { name: "British Colombia Lions", primaryColor: "#f15524", secondaryColor: "#000000", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image1.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "12-6-0-24" },
 { name: "Calgary Stampeders", primaryColor: "#d0202d", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false, imagepath: './public/images/image2.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "6-12-0-12" },
 { name: "Edmonton Elk", primaryColor: "#ffb612", secondaryColor: "#2b5235", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image3.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "4-14-0-8" },
 { name: "Hamilton Tiger-Cats", primaryColor: "#ffb612", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false, imagepath: './public/images/image4.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "8-10-0-16" },
 { name: "Montreal Alouettes", primaryColor: "#183c6e", secondaryColor: "#8c2334", tertiaryColor: "#a2a5aa", clicked: false, imagepath: './public/images/image5.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "11-7-0-22" },
 { name: "Ottawa Redblacks", primaryColor: "#000000", secondaryColor: "#ffffff", tertiaryColor: "#a71930", clicked: false, imagepath: './public/images/image6.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "4-14-0-8" },
 { name: "Saskatchewan Roughriders", primaryColor: "#036242", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false, imagepath: './public/images/image7.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "6-12-0-12" },
 { name: "Toronto Argonauts", primaryColor: "#5f8fb1", secondaryColor: "#0d2240", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image8.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "16-2-0-32" },
 { name: "Winnipeg Blue Bombers", primaryColor: "#1d3d37", secondaryColor: "#bc9658", tertiaryColor: "#ffffff", clicked: false, imagepath: './public/images/image9.jpg', greyCupWins: 6, mostRecentWin: "2011", lastSeasonRecord: "14-4-0-28" },
];

export default function Home() {
 const [selectedTeam, setSelectedTeam] = useState(null);
 const [teamsState, setTeamsState] = useState(teams); // Add a new state to manage the teams

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
         <div className="text-center mb-10">
           <h1 className="text-4xl font-bold">Favorite Team</h1>
           <h2 className="text-2xl">{selectedTeam.name}</h2>
           {/* Find the index of the selected team */}
    {teams.map((team, index) => {
      if (team.name === selectedTeam.name) {
        // Use the index to generate the image path
        return (
          <Image
            src={`/images/image${index + 1}.jpg`}
            alt={`Image ${index + 1}`}
            width={300} // Double the width
            height={300} // Double the height
            className="square"
          />
        );
      }
      return null;
    })}
           <p>Number of Grey Cup Wins: {selectedTeam.greyCupWins}</p>
           <p>Most Recent Grey Cup Win: {selectedTeam.mostRecentWin}</p>
           <p>Last Season Record: {selectedTeam.lastSeasonRecord}</p>
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
