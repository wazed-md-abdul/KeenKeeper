"use client";
import { createContext, useState } from "react";

export const InterectionsContext = createContext();

const InterectionsProvider = ({ children }) => {
  const [interections, setInterections] = useState([]);
  const data = {
    interections, setInterections,
    
  };

  return (
    <InterectionsContext value={data}>
      {children}
    </InterectionsContext>
  );
};

export default InterectionsProvider;