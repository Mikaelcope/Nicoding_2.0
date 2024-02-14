import React, {useState} from 'react';
import './style.css'
import dayjs from 'dayjs'; 
import RightSlider from '../../components/Offcanvas/index';
import UserProgress from '../../components/Progress/index';
import GoalsModal from '../../components/Modal/index';
function Readingchallenge() {
  const currentYear = dayjs().format('YYYY');
  
    return (
      <div className="App">
        
        <div className="flex-cont">
          <h1 className="heading-one">{currentYear} READING GOALS</h1>
          <div className="row-componets">
          <GoalsModal/>
          <RightSlider/>
          </div>
          <UserProgress/>
        
         
          </div>
        </div>
     
    );
  }

  export default Readingchallenge;