import { Modal, Button } from 'react-bootstrap';
import Questionnaire from '../Questions/quistions';


const FinishedMod = ({ show, onClose }) => {
  if (!show) return null;

  const addToLocalStorage = (book, event) => {
    event.stopPropagation();
    const existingBooks = JSON.parse(localStorage.getItem('savedBooks') || '[]');
    if (!existingBooks.some(savedBook => savedBook.id === book.id)) {
      existingBooks.push(book);
      localStorage.setItem('savedBooks', JSON.stringify(existingBooks));
      alert('Book added to your collection!');
    } else {
      alert('This book is already in your collection.');
    }
  };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Finished!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Questionnaire></Questionnaire>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};



export default FinishedMod;
