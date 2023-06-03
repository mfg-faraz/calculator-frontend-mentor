import React from "react";
import { useEffect } from "react";

const Main = ({ children }) => {
  useEffect(()=>{
document.body.className="bg-background-main"
  },[])
  return (
    <main className="flex justify-center items-center flex-col min-h-screen  px-3 sm:p-0 transition-all duration-300">
      {children}
    </main>
  );
};

export default Main;
