import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen bg-background-main px-3 sm:p-0 transition-all duration-300">
      {children}
    </main>
  );
};

export default Main;
