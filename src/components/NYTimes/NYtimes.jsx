import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBook, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './NYtimesstyle.css'


const nytBooks = () => {
  const [books, setBooks] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchNYTBooks = async () => {
  const apiKey = '1d0jaqVaQup273rQa15E7SOvPJcG87LI';
  const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`)
      setBooks(res.data.results.lists[0].books)
      console.log(res.data);
    }
    fetchNYTBooks()
  }, [])

  return (
    <div className='nytcontainer'>
      <h2>NEW YORK TIMES BEST SELLERS</h2>
      <div className='card-container'>
        {books.map((book) => {
          const { author, book_image, publisher, description, title } = book
         
          return (
            
            <Card>
              <div className="card-section">
                <img src={book_image} className='card-img-fluid'/>
                  <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}>
                    <div className='nyt-modal-box'>
                      <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>{description}</p>
                        <p>Author: {author}</p>
                        <p>Published By: {publisher}</p>
                      </Modal.Body>
                    </div>  
                  </Modal>
                  <div className="buttons-box">
                    <Button className='info-btn' onClick={handleShow}><FontAwesomeIcon id="icons" icon={faInfoCircle} /></Button>
                    <Button className='bookshelf-btn' onClick={handleShow}><FontAwesomeIcon id="icons" icon={faBook} /></Button>
                  </div>
              </div>
            </Card>
            
           )
        })}
      </div>
  </div>
  )
}

export default nytBooks


