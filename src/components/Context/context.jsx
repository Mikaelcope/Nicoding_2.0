import React, { createContext, useContext, useState, useEffect } from 'react';

const ReadingGoalsContext = createContext();

export const useReadingGoals = () => useContext(ReadingGoalsContext);

export const ReadingGoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState({});

  useEffect(() => {
    const savedGoals = localStorage.getItem('readingGoals');
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  const saveGoals = (newGoals) => {
    setGoals(newGoals);
    localStorage.setItem('readingGoals', JSON.stringify(newGoals));
  };

  return (
    <ReadingGoalsContext.Provider value={{ goals, saveGoals }}>
      {children}
    </ReadingGoalsContext.Provider>
  );
};