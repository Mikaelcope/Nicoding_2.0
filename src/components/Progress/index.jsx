import React, { useState } from 'react';
import './script.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function UserProgress() {
  const now = 60;
  return (
    <div style={{ width: '25%', margin: '50px'}}>
      <h4 className="progress-bar-title">Loading Progress</h4>
      <h5 className="progress-bar-title-two">You are almost at your monthly goal:</h5>
      <ProgressBar now={now} label={`${now}%`} className="custom-progress-bar" style={{ margin: '10px' }} />
      <h5 className="progress-bar-title-two">You are 10 books away from your yearly goal:</h5>
      <ProgressBar now={now} label={`${now}%`} className="custom-progress-bar" style={{ margin: '10px' }} />
    </div>
  );
}

export default UserProgress;