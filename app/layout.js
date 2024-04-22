import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import Link from 'next/link';

const RootLayout = ({ children }) => {
 return (
    <html>
      <body>
        <div className="flex flex-col items-center bg-gray-300 min-h-screen">
          <header className="w-full bg-maroon text-white py-4 flex justify-center">
            <h1 className="text-2xl">CFL Facts</h1>
          </header>
          <nav className="w-full bg-teal text-white py-2 flex justify-around">
            <Link href="/"><span className="hover:text-white">Home</span></Link>
            <Link href="./FactsPage/"><span className="hover:text-white">Facts</span></Link>
            <Link href="./ContactPage/"><span className="hover:text-white">Contact</span></Link>
            <Link href="./PremierLeague/"><span className="hover:text-white">Premire League</span></Link>
          </nav>
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
 );
};

export default RootLayout;

