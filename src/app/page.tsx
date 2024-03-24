"use client"


import { useState, useEffect } from "react";
import Image from "next/image";
import Tabs from "./tabs"; // Import the Tabs component

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showRedSidebar, setShowRedSidebar] = useState(false); // State for red sidebar

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex justify-center items-start h-screen p-4">
      {/* Render blue sidebar for desktop view */}
      {!isMobile && (
        <div className={`w-1/4 mr-4 ${showSidebar ? '' : 'hidden'}`}>
          <div className="bg-blue-900 p-4 rounded-md">
            <h2 className="text-white text-lg font-semibold mb-4">Hello, User</h2>
            <ul className="text-white">
              <li className="mb-2">Market Stories</li>
              <li className="mb-2">Discussion Forums</li>
              <li className="mb-2">Sentiment</li>
              <li className="mb-2">Market Sector Watchlist</li>
              <li className="mb-2">Portfolio Management</li>
              <li className="mb-2">Financial News</li>
              <li className="mb-2">Analysis Tools</li>
              <li className="mb-2">Trading Dashboard</li>
            </ul>
          </div>
        </div>
      )}

      {/* Render blue button if not in mobile view */}
      {!isMobile && (
        <button
          className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowSidebar(prevState => !prevState)}
          style={{ height: '150px', width: '1px', backgroundColor: '#1E40AF' , top: '300px' }}
        ></button>
      )}

      {/* Render red button and sidebar if in mobile view */}
      {isMobile && (
        <div>
          <button
            className="fixed top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-md"
            onClick={() => setShowRedSidebar(prevState => !prevState)}
            style={{ height: '150px', width: '1px', backgroundColor: '#1E40AF', top: '300px' }}
          ></button>

          {/* Red Sidebar */}
          {showRedSidebar && (
            <div className="fixed top-0 left-0 left-12 bg-blue-900 text-white px-4 py-2 rounded-md z-20">
              {/* Sidebar Content */}
              <div className="p-4 rounded-md">
    <h2 className="text-white text-lg font-semibold mb-4">Hello, User</h2>
    <ul className="text-white">
      <li className="mb-2">Market Stories</li>
      <li className="mb-2">Discussion Forums</li>
      <li className="mb-2">Sentiment</li>
      <li className="mb-2">Market Sector Watchlist</li>
      <li className="mb-2">Portfolio Management</li>
      <li className="mb-2">Financial News</li>
      <li className="mb-2">Analysis Tools</li>
      <li className="mb-2">Trading Dashboard</li>
    </ul>
  </div>
            </div>
          )}
        </div>
      )}

      {/* Integrate the Tabs component */}
      <Tabs />
    </main>
  );
}
