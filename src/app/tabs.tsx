import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image from Next.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShare, faComment } from '@fortawesome/free-solid-svg-icons'; // Adjust the path as needed
import './page.css';

const Tabs = () => {
  const [showDiscussion, setShowDiscussion] = useState(true); // State to toggle between Discussion Forums and Market Stories
  const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define the breakpoint for mobile devices (adjust as needed)
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for device size
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTabs = () => {
    setShowDiscussion(!showDiscussion); // Toggle between Discussion Forums and Market Stories
  };

  const marketStories = [
    { id: 1, image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", title: "Market Story 1", description: "Description for Market Story 1" },
    { id: 2, image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", title: "Market Story 2", description: "Description for Market Story 2" },
    { id: 3, image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", title: "Market Story 3", description: "Description for Market Story 3" },
    { id: 4, image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", title: "Market Story 4", description: "Description for Market Story 4" },
    { id: 5, image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", title: "Market Story 5", description: "Description for Market Story 5" }
  ];

  return (
    <div>
      {/* Toggle Button */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-4 rounded-md ${showDiscussion ? 'bg-blue-900 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={toggleTabs}
        >
          Discussion Forums
        </button>
        <button
          className={`px-4 py-2 rounded-md ${!showDiscussion ? 'bg-blue-900 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={toggleTabs}
        >
          Market Stories
        </button>
      </div>

      {/* Display either Discussion Forums or Market Stories based on state */}
      <div className="flex">
        {(showDiscussion || !isMobile) && (
           <div className="flex-1 bg-gray-200 p-4"> {/* Increase flex-basis */}
           <h1 className="text-lg font-semibold mb-4">Discussion Forums</h1>
           {[...Array(5)].map((_, index) => (
             <div
               key={index}
               className="bg-white p-4 shadow-md rounded-md flex flex-col mb-4"
             >
               {/* Profile Photo */}
               <div className="flex items-center mb-4">
                 <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                   <Image
                     src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" // Replace with actual profile photo source
                     alt="Profile Photo"
                     width={56}
                     height={56}
                   />
                 </div>
                 <p className="font-semibold relative text-blue-500">
                   Username
                   <span className="bg-blue-500 text-white px-2 py-1 rounded-full ml-2">
                     Label
                   </span>
                 </p>
               </div>
               {/* Post Title */}
               <h2 className="text-lg font-semibold mb-2">Post Title</h2>
               {/* Post Content */}
               <p className="text-gray-800">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus luctus mauris nec ante blandit, nec viverra felis
                 efficitur. Duis non justo urna.
               </p>
               {/* Like, Share, Comment */}
               <div className="flex items-center mt-4">
                 <button className="mr-4 text-black px-4 py-2 rounded-md">
                   <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
                   3k
                 </button>
                 <button className="mr-4 text-black px-4 py-2 rounded-md">
                   <FontAwesomeIcon icon={faShare} className="mr-2" />
                   4k
                 </button>
                 <button className=" text px-4 py-2 rounded-md">
                   <FontAwesomeIcon icon={faComment} className="mr-2" />
                   2k
                 </button>
               </div>
             </div>
           ))}
         </div>
        )}

        {(!showDiscussion || !isMobile) && (
          <div className="flex-2 bg-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4">Market Stories</h2>
            {/* Displaying market stories */}
            {marketStories.map((story) => (
              <div key={story.id} className="bg-white p-4 shadow-md rounded-md mb-4">
                {/* Image */}
                <div className="mb-2">
                  <Image
                    src={story.image} // Replace with actual image source
                    alt={story.title}
                    width={300}
                    height={200}
                  />
                </div>
                {/* Title */}
                <p className="text-lg font-semibold mb-2 text-blue-500">{story.title}</p>
                {/* Description */}
                <p className="text-sm text-gray-500">{story.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
