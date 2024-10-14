"use client";

import React, { useState, useEffect } from "react";

const Intro = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-screen bg-black text-white`}
    >
      {loading ? (
        <h1 className="text-4xl font-bold">Welcome Viewers</h1>
      ) : (
        <div>
          {/* Add your website content here */}
          <h1 className="text-2xl">This is the main website content!</h1>
        </div>
      )}
    </div>
  );
};

export default Intro;
