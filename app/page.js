"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

// Define the teams constant directly in this file
const teams = [
 { name: "BC Lions", primaryColor: "#f15524", secondaryColor: "#000000", tertiaryColor: "#ffffff", clicked: false },
 { name: "Calgary Stampeders", primaryColor: "#d0202d", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false },
 { name: "Edmonton Elk", primaryColor: "#ffb612", secondaryColor: "#2b5235", tertiaryColor: "#ffffff", clicked: false },
 { name: "Hamilton Tiger-Cats", primaryColor: "#ffb612", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false },
 { name: "Montreal Alouettes", primaryColor: "#183c6e", secondaryColor: "#8c2334", tertiaryColor: "#a2a5aa", clicked: false },
 { name: "Ottawa Redblacks", primaryColor: "#000000", secondaryColor: "#ffffff", tertiaryColor: "#a71930", clicked: false },
 { name: "Saskatchewan Roughriders", primaryColor: "#036242", secondaryColor: "#ffffff", tertiaryColor: "#000000", clicked: false },
 { name: "Toronto Argonauts", primaryColor: "#5f8fb1", secondaryColor: "#0d2240", tertiaryColor: "#ffffff", clicked: false },
 { name: "Winnipeg Blue Bombers", primaryColor: "#1d3d37", secondaryColor: "#bc9658", tertiaryColor: "#ffffff", clicked: false },
 { name: "Ottawa Renegades", primaryColor: "#989482", secondaryColor: "#da9b3b", tertiaryColor: "#e13a3e", clicked: false }
];

export default function Home() {
 const [selectedTeam, setSelectedTeam] = useState(null);
 const [teamsState, setTeamsState] = useState(teams); // Add a new state to manage the teams
 const [count, setCount] = useState(0); // State for the counter

 useEffect(() => {
    if (selectedTeam) {
      document.documentElement.style.setProperty('--primary-color', selectedTeam.primaryColor);
      document.documentElement.style.setProperty('--secondary-color', selectedTeam.secondaryColor);
      document.documentElement.style.setProperty('--tertiary-color', selectedTeam.tertiaryColor);
    }
 }, [selectedTeam]);

  // Function to increment the counter
  const incrementCount = () => {
    setCount(count + 1);
  };

 const handleTeamClick = (index) => {
   const updatedTeams = teamsState.map((team, i) => i === index ? { ...team, clicked: true } : team);
   setSelectedTeam(updatedTeams[index]);
   setTeamsState(updatedTeams); // Update the teams state with the new array
 };

 return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <header className="text-center mb-10 text-maroon">
        <h1 className="text-4xl font-bold">Choose your favorite team</h1>
      </header>

      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="relative w-32 h-32">
            <Image
              src={`/images/image${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
              width={150}
              height={150}
              className="square"
            />
            <button
              className={`absolute inset-0 bg-transparent text-black flex items-center justify-center w-32 h-32 button-hover ${teamsState[index].clicked ? 'clicked-button' : ''}`}
              onClick={() => handleTeamClick(index)}
            >
              {/* Button content */}
            </button>
          </div>
        ))}
      </div>
            {/* Counter button */}
            <div className="mt-10">
        <button type="button" onClick={incrementCount}>
          You clicked {count} times
        </button>
      </div>
    </main>
 );
}
