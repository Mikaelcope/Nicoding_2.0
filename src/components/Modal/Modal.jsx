
import './modal.css'
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const displayGoals = () => {
  const savedDataString = localStorage.getItem('readingGoals');
  const goals = savedDataString ? JSON.parse(savedDataString) : null;

  if (goals) {
    console.log(`Days per week: ${goals.daysPerWeek}`);
    console.log(`Hours per day: ${goals.hoursPerDay}`);
    console.log(`Books to read per year: ${goals.booksPerYear}`);
  } else {
    console.log('No reading goals data found.');
  }
};


function GoalsModal()  {

  // To open and close modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // To update an existing goal
  const [readingHours, setReadingHours] = useState(0);
  const [daysPerWeek, setDaysPerWeek] = useState('0');
  const [booksPerYear, setBooksPerYear] = useState(0);

  useEffect(() => {
    const savedDataString = localStorage.getItem('readingGoals');
    const goal = savedDataString ? JSON.parse(savedDataString) : null;

    setDaysPerWeek(goal.daysPerWeek || 0);
    setReadingHours(goal.hoursPerDay || 0);
    setBooksPerYear(goal.booksPerYear || 0);
  }, []);

  const saveReadingHabits = () => {
    const readingGoals = {
      daysPerWeek: daysPerWeek,
      hoursPerDay: readingHours,
      booksPerYear: booksPerYear
    };
    localStorage.setItem('readingGoals', JSON.stringify(readingGoals));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveReadingHabits();
    displayGoals();
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Set your reading goals
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reading Goals</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              type="radio" aria-label="radio 1"
            >
              <Form.Label> How many days a week do you spend reading? </Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  {[...Array(8).keys()].map((day) =>
                    <Form.Check
                      inline
                      key={day}
                      label={day}
                      name="daysPerWeek"
                      id={`day-${day}`}
                      value={day}
                      type={type}
                      checked={daysPerWeek === `${day}`}
                      onChange={(e) => setDaysPerWeek(e.target.value)}
                    />
                  )}
                </div>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>On average, how many hours do you spend reading in a week? </Form.Label>
              <div>{readingHours}</div>
              <Form.Range
                min="0"
                max="24"
                value={readingHours}
                onChange={(e) => setReadingHours(Number(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> How many books would you like to read this year? </Form.Label>
              <div>{booksPerYear}</div>
              <Form.Range
                min="0"
                max="150"
                value={booksPerYear}
                onChange={(e) => setBooksPerYear(Number(e.target.value))}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default GoalsModal;