"use client";
import React from 'react';

// Define the defunct CFL teams
const defunctTeams = [
 "Atlantic Schooners",
 "Baltimore Stallions",
 "Birmingham Barracudas",
 "Edmonton Eskimos (Currently Edmonton Elk)",
 "Las Vegas Posse",
 "Memphis Mad Dogs",
 "Miami Manatees (CFL)",
 "Ottawa Renegades",
 "Sacramento Gold Miners",
 "San Antonio Riders",
 "San Antonio Texans",
 "Shreveport Pirates"
];

export default function Home() {
  return (
     <main className="flex flex-col items-center justify-center min-h-screen p-24">
       <header className="text-center mb-10">
         <h1 className="text-4xl font-bold" style={{ color: 'maroon' }}>Defunct CFL Teams</h1>
       </header>
       <div className="flex flex-col items-center">
         {defunctTeams.map((team, index) => (
           <div key={index} className="mb-4">
             <p style={{ color: 'maroon' }}>{team}</p>
           </div>
         ))}
       </div>
     </main>
  );
 }
