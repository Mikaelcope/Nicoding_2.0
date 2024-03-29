import React, { useState } from 'react';
import './questions.css'

function Questionnaire() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleClose = () => setShow(false);
  

  const [answers, setAnswers] = useState({
    answer1: '',
    answer2: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingAnswers = JSON.parse(localStorage.getItem('answers')) || {};
    
    const updatedAnswers = {
      ...existingAnswers,
      days: existingAnswers.days ? existingAnswers.days + ', ' + answers.answer1 : answers.answer1,
      hours: existingAnswers.hours ? existingAnswers.hours + ', ' + answers.answer2 : answers.answer2
     
    };

    localStorage.setItem('answers', JSON.stringify(updatedAnswers));
    alert('Answers saved to local storage!');
    
    setAnswers({
      answer1: '',
      answer2: '' 
    });
    
    const booksReadCount = parseInt(localStorage.getItem('booksread')) || 0;
    localStorage.setItem('booksread', booksReadCount + 1);
 

    
  };

  return (
    
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="answer1" style={{margin:'10px'}}>How many days did you spend reading this book?</label>
            <input 
              type="text" 
              id="answer1" 
              name="answer1" 
              value={answers.answer1} 
              onChange={handleInputChange} 
              style={{margin:'10px'}}
            />
          </div>
          <div>
            <label htmlFor="answer2" style={{margin:'10px'}}>How many hours per day did you spend reading this book?</label>
            <input 
              type="text" 
              id="answer2" 
              name="answer2" 
              value={answers.answer2} 
              onChange={handleInputChange} 
              style={{margin:'10px'}}
            />
          </div>
          
          <button style={{margin:'10px'}} type="submit">Submit</button>
          
        </form>
      </div>
    
  )
}

export default Questionnaire;