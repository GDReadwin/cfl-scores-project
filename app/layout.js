import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';

const Layout = ({ children }) => {
 return (
    <div className="flex flex-col items-center bg-gray-300 min-h-screen">
      <header className="w-full bg-maroon text-white py-4 flex justify-center">
        <h1 className="text-2xl">CFL Facts</h1>
      </header>
      <nav className="w-full bg-teal text-white py-2 flex justify-around">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/pages/facts" className="hover:text-white">Facts</a>
        <a href="/pages/contact" className="hover:text-white">Contact</a>
      </nav>
      <div>
      </div>
      <main className="flex-grow">{children}</main>
    </div>
 );
};

export default Layout;
