import React, { useState, useEffect } from 'react';
import './script.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useReadingGoals } from '../Context/context'


function UserProgress() {
  const { goals } = useReadingGoals();
  const [hasRead, setHasRead] = useState([]);
  const [goalGet, setgoalGet] = useState([]);

  // const now = 60;

  useEffect(() => {
    const fetchData = () => {
      const storedReadData = localStorage.getItem('Read');
      if (storedReadData) {
        setHasRead(JSON.parse(storedReadData));
      }
      const storedGoals = localStorage.getItem('readingGoals');
      if (storedGoals) {
        setgoalGet(JSON.parse(storedGoals));
      }
    };

    fetchData();
  }, []);
  const booksRead = hasRead?.length || 0; 
  const yearlyGoal = goals?.booksPerYear || 0; 
  const progressNow = yearlyGoal > 0 ? Math.round(yearlyGoal / 12) : 0; 

  return (
    <div style={{ width: '25%', margin: '10px'}}>
      <h4 className="progress-bar-title">Loading Progress</h4>
      <h5 className="progress-bar-title-two">You are almost at your monthly goal:</h5>
      <div style={{ position: 'relative' }}>
        <ProgressBar now={(booksRead/progressNow)*100} label={`${booksRead}`}  className="custom-progress-bar" style={{ margin: '20px' }} />
        <span className= "span-num" style={{ position: 'absolute', left: 19, bottom: 0, top: 12 }}>0</span>
        <span className= "span-num" style={{ position: 'absolute', right: 8, bottom: 0, top: 13 }}>{progressNow}</span>
      </div>
      <h5 className="progress-bar-title-two">You are {goalGet.booksPerYear-booksRead} books away from your yearly goal:</h5>
      <div style={{ position: 'relative' }}>
      <ProgressBar now={(booksRead/yearlyGoal)*100} label={`${booksRead}`} className="custom-progress-bar" style={{ margin: '20px' }} />
        <span className= "span-num" style={{ position: 'absolute', left: 19, bottom: 0, top: 12 }}>0</span>
        <span className= "span-num" style={{ position: 'absolute', right: 7, bottom: 0, top: 13 }}>{yearlyGoal}</span>
      </div>
    </div>
  );
}

export default UserProgress;