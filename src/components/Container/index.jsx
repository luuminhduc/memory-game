import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-3 bg-white text-coolGray-700 py-10 min-h-screen w-screen">
      <div className="w-full md:max-w-2xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
