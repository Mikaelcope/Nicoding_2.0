import { useState, useEffect } from 'react';
import './bookshelf.css'
import { Card, Button, Row, Col } from 'react-bootstrap';
import FinishedMod from '../../components/FinishedModal/finishedMod';

function BookshelfPage(storedData) {
  const [dataArray, setDataArray] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem('savedBooks');
      if (storedData) {
        setDataArray(JSON.parse(storedData));
      }
      // console.log(storedData)
    };

    fetchData();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleFinishedClick = () => {
    setShowModal(true); 
  };

  return (
    <div className="App">
      <div className="bookshelfdiv">
        <h1>My Bookshelf</h1>
        <div className='displayLocal'>
          {dataArray.map((item, index) => (
            <div className='shelf-1' key={index}>
              <div className='renderBox'>
                <Col className='imgdiv'>
                  <Card.Img className='boxIMG' variant="top" src={item.imageUrl} alt={`Cover of ${item.volumeInfo.title}`} />
                </Col>
                <div className='boxInfo'>
                  <Card.Body className='boxRight'>
                    <Card.Title className='boxTitle'>{item.volumeInfo.title}</Card.Title>
                    <Card.Text className='boxTest'>{item.volumeInfo.authors}</Card.Text>
                    <div className="button-container">
                      <Button className='boxBTN1' id='boxBTN1' onClick={handleFinishedClick}>Finished!</Button>{' '}
                      <Button className='boxBTN2' id='boxBTN2' >Remove</Button>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <FinishedMod
          show={showModal}
          item={storedData}
          onClose={() => setShowModal(false)}
        />
      )}
      </div>
  );
}

export default BookshelfPage;

