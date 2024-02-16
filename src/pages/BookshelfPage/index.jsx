import React, { useState, useEffect } from 'react';
import './bookshelf.css';
import { Card, Button, Col } from 'react-bootstrap';
import FinishedMod from '../../components/FinishedModal/finishedMod';

function BookshelfPage() {
  const [dataArray, setDataArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem('savedBooks');
      if (storedData) {
        setDataArray(JSON.parse(storedData));
      }
    };

    fetchData();
  }, []);

  const handleFinishedClick = () => {
    setShowModal(true);
  };

  // Remove book from local storage when Remove button is clicked
  const handleDelete = (index) => {
    const updatedDataArray = [...dataArray];
    updatedDataArray.splice(index, 1);
    setDataArray(updatedDataArray);
    localStorage.setItem('savedBooks', JSON.stringify(updatedDataArray));
  };

  // Removes the book from savedBooks and adds to the Read array in local storage
  const handleRead = (index) => {
    const bookToDelete = dataArray[index];
    const updatedDataArray = [...dataArray];

    updatedDataArray.splice(index, 1);
    setDataArray(updatedDataArray);
    localStorage.setItem('savedBooks', JSON.stringify(updatedDataArray));
    const currentReads = JSON.parse(localStorage.getItem('Read') || '[]');
    currentReads.push(bookToDelete);
    localStorage.setItem('Read', JSON.stringify(currentReads));
    handleFinishedClick();
  };

  return (
    <div className="App">
      <div className="bookshelfdiv">
        <h1 className = "heading-book-shelf">My Bookcase</h1>
        <div className='displayLocal'>
          {dataArray.length === 0 ? (
            <div className="empty-message" style ={{backgroundColor: 'rgba(0, 0, 0, 0.783)', marginLeft:'10px', color: 'white'}}>
              <p>Your bookshelf is empty. Add books to your bookshelf for them to appear. If you're stuck, go to the home page, click on a category, scroll through to choose a book you like, and click on the bottom right-hand corner book icon.</p>
            </div>
          ) : (
            dataArray.map((item, index) => (
              <div className='shelf-1' key={index}>
                <div className='renderBox'>
                  <Col className='imgdiv'>
                    <Card.Img className='boxIMG' variant="top" src={item.imageUrl} alt={`Cover of ${item.volumeInfo.title}`} />
                  </Col>
                  <div className='boxInfo'>
                    <Card.Body className='boxRight'>
                      <Card.Title className='boxTitle'>{item.volumeInfo.title} </Card.Title>
                      <Card.Text className='boxTest' style={{textAlign: 'center'}}>By: {item.volumeInfo.authors}</Card.Text>
                      <div className="button-container">
                        <Button className='boxBTN1' id='boxBTN1' onClick={() => handleRead(index)}>Finished!</Button>{' '}
                        <Button className='boxBTN2' id='boxBTN2' onClick={() => handleDelete(index)}>Remove</Button>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showModal && (
        <FinishedMod
          show={showModal}
          item={dataArray}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default BookshelfPage;