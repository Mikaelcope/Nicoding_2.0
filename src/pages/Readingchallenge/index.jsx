import React, { useState, useEffect } from 'react';
import './style.css'
import dayjs from 'dayjs';
import RightSlider from '../../components/Offcanvas/index';
import UserProgress from '../../components/Progress/index';
import GoalsModal from '../../components/Modal/index';
import { Card, Col } from 'react-bootstrap';
import { ReadingGoalsProvider } from '../../components/Context/context';

function Readingchallenge() {
  const currentYear = dayjs().format('YYYY');
  const [readArray, setReadArray] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const storedReadData = localStorage.getItem('Read');
      if (storedReadData) {
        setReadArray(JSON.parse(storedReadData));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App-reading-challenge">
      <div className="flex-cont">
      <div style={{backgroundColor: 'rgba(0, 0, 0, 0.683)', height: '100%'}}>
      <h1 className="heading-one">{currentYear} READING GOALS</h1>
      <div className="row-componets">
      <RightSlider />
      <ReadingGoalsProvider>
        <GoalsModal />
       


        <UserProgress />
      </ReadingGoalsProvider>
      </div>
      </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }} ><h1 className="landingPageHeader">Your Reads</h1></div>
      <div className='displayLocal'  style={{ marginLeft: '60px' }}>
        {readArray.length === 0 ? (
          <div className="empty-message">
            <p>No books read so far...</p>
          </div>
        ) : (
          readArray.map((item, index) => (
            <div className='shelf-1' key={index}>
              <div className='renderBox'>
                <Col className='imgdiv'>
                  <Card.Img className='boxIMG' variant="top" src={item.imageUrl} alt={`Cover of ${item.volumeInfo.title}`} />
                </Col>
                <div className='boxInfo'>
                  <Card.Body className='boxRight'>
                    <Card.Title className='boxTitle'>Title: {item.volumeInfo.title}</Card.Title>
                    <Card.Text className='boxTest'>Author: {item.volumeInfo.authors}</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Readingchallenge;