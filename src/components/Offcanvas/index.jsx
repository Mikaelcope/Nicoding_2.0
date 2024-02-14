import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import React, { useState } from 'react';
import { Button, ModalBody, Offcanvas } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import dragonImage from '../../assets/dragonunlocked.jpg';


function RightSlider() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const data = {
    labels: ['Slow', 'Average', 'Fast'],
    datasets: [
      {
        label: 'Books',
        data: [12, 19, 3],
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
        color: 'black' 
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'white' // Add this line to change the legend text color
        }
      },
    },
    
  };
  return (
    <>
      <Button  style={{ backgroundColor: '#7CC3B1', borderColor: 'white', margin: '20px'}} className="hover-button" onClick={handleShow}> 
        Reading Tracker
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: '#85CDCA '}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ margin: '10px', color: 'black'}}>Track Your Reading Habits</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding:'0px'}}>
         <div style={{ width: '75%', heigth:'70%'}} className="pie">
         <Pie data={data} options={options}/> 
         </div>
         <div className="text">
         <Offcanvas.Title ><FontAwesomeIcon icon={faClock} /> 13.6 Million Minutes Read So Far</Offcanvas.Title>
         </div>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>
         <Button style={{ backgroundColor: '#E8A87C ', borderColor: '#E8A87C' }} className="hover-button" onClick={() => {
            handleCloseModal();
            handleShowModal();
          }}>
            Reading Milestone Unlocked
          </Button>
          </div>
         <p className="text">
          Congratulations! You've read 1000 pages this year... Keep up the good work!<br /><br />
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={{ fontSize: '24px', fontWeight: 'bold', backgroundColor: '#85CDCA ' }}>Dragon Reader Unlocked</Modal.Header >
          <ModalBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="modal">
            <img src={dragonImage} alt="Dragon" style={{ width: '40%'}}/>
            <p>You are within the top 10% of readers in the UK !</p>
            </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RightSlider;