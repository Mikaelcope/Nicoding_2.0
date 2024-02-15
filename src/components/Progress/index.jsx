import React, { useState, useEffect } from 'react';
import './script.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useReadingGoals } from '../Context/context'


// const displayGoals = () => {
//   const savedDataString = localStorage.getItem('readingGoals');
//   const goals = savedDataString ? JSON.parse(savedDataString) : null;

//   if (goals) {
//     console.log(`Days per week: ${goals.daysPerWeek}`);
//     console.log(`Hours per day: ${goals.hoursPerDay}`);
//     console.log(`Books to read per year: ${goals.booksPerYear}`);
//   } else {
//     console.log('No reading goals data found.');
//   }
// };
function UserProgress() {
  const { goals } = useReadingGoals();
  const [hasRead, setHasRead] = useState([]);
  const [goalGet, setgoalGet] = useState([]);

  const now = 60;

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
        <ProgressBar now={now} label={`${booksRead}`}  className="custom-progress-bar" style={{ margin: '20px' }} />
        <span style={{ position: 'absolute', left: 17, bottom: 0, top: 12 }}>0</span>
        <span style={{ position: 'absolute', right: 5, bottom: 0, top: 13 }}>{progressNow}</span>
      </div>
      <h5 className="progress-bar-title-two">You are {goalGet.booksPerYear-booksRead} books away from your yearly goal:</h5>
      <div style={{ position: 'relative' }}>
      <ProgressBar now={booksRead} label={`${booksRead}`} className="custom-progress-bar" style={{ margin: '20px' }} />
        <span style={{ position: 'absolute', left: 17, bottom: 0, top: 12 }}>0</span>
        <span style={{ position: 'absolute', right: 5, bottom: 0, top: 13 }}>{yearlyGoal}</span>
      </div>
    </div>
  );
}

export default UserProgress;