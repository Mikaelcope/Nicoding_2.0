import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import React, { useState, useEffect } from 'react';
import { Button, ModalBody, Offcanvas } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import dragonImage from '../../assets/dragom_480.png';


function RightSlider() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [pieData, setPieData] = useState([0, 0, 0]); 
  const [minutesRead, setMinutesRead] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem('answers')) || {};
    // Split the string of inputs for days and hours into an Number array.
    const daysArray = answers.days ? answers.days.split(',').map(Number) : [];
    const hoursArray = answers.hours ? answers.hours.split(',').map(Number) : [];
    let paceCounts = { Slow: 0, Average: 0, Fast: 0 };

    let totalMins = 0;
    // Calculate reading pace
    daysArray.forEach((days, index) => {
      const hours = hoursArray[index] || 0; 
      const hoursPerBook = days * hours;
      totalMins += hoursArray[index];
      if (hoursPerBook <= 10) {
        paceCounts.Fast += 1;
      } else if (hoursPerBook > 10 && hoursPerBook <= 20) {
        paceCounts.Average += 1;
      } else {
        paceCounts.Slow += 1;
      }
    });
    // Calculate and set total number of minutes read
    const minutes = totalMins * 60;
    setMinutesRead(minutes);
    setPieData([paceCounts.Slow, paceCounts.Average, paceCounts.Fast]);

    // Accumlate page count of all books read
    const Reads = JSON.parse(localStorage.getItem('Read') || '[]');
    const totalPages = Reads.reduce((acc, book) => acc + (book.volumeInfo.pageCount || 0), 0);
    setPages(totalPages)
  }, []);

  

  const data = {
    labels: ['Slow', 'Average', 'Fast'],
    datasets: [
      {
        label: 'Books',
        data: pieData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Reading Pace',
        font: {
          size: 24
        },
        padding: {
          top: 0,
          bottom: 10
        },
        color: '#787775' 
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#787775'
        }
      },
    },
    
  };
  return (
    <>
      <Button  style={{ backgroundColor: '#caa976', borderColor: '#caa976', margin: '20px'}} className="hover-button" onClick={handleShow}> 
        Reading Tracker
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: 'var(--cream)'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ margin: '10px', color: '#787775'}}>Track Your Reading Habits</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding:'0px'}}>
         <div style={{ width: '75%', heigth:'70%'}} className="pie">
         <Pie data={data} options={options}/> 
         </div>
         <div className="text">
         <Offcanvas.Title ><FontAwesomeIcon icon={faClock} /> {minutesRead} Minutes Read So Far</Offcanvas.Title>
         </div>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>
         <Button style={{ backgroundColor: 'rgb(202, 169, 118) ', borderColor: 'rgb(202, 169, 118)' }} className="hover-button" onClick={() => {
            handleCloseModal();
            handleShowModal();
          }}>
            Reading Milestone Unlocked
          </Button>
          </div>
         <p className="text">
          Congratulations! You've read {pages} pages this year... Keep up the good work!<br /><br />
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={{ fontSize: '24px', fontWeight: 'bold', backgroundColor:'var(--cream)'}}>Dragon Reader Unlocked</Modal.Header >
          <ModalBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'var(--cream)', color:'#787775'}} className="modal">
            <img src={dragonImage} alt="Dragon" style={{ width: '40%'}}/>
            <p>You are within the top 10% of readers in the UK !</p>
            </ModalBody>
        <Modal.Footer style={{backgroundColor:'var(--cream)'}}>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RightSlider;