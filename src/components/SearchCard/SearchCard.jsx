import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';
import SearchModal from '../SearchModal/SearchModal';
import './SearchCard.css';

const SearchCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [addedToBookshelf, setAddedToBookshelf] = useState(false); // State to track if book is added to bookshelf
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.smallThumbnail || 'default_book_thumbnail.jpg';
  const title = volumeInfo.title;
  const authors = volumeInfo.authors?.join(', ') || 'Unknown Author';

  const handleMoreInfoClick = () => {
    setShowModal(true);
  };

  const handleAddToBookshelfClick = () => {
    const existingBooks = JSON.parse(localStorage.getItem('savedBooks') || '[]');
    if (!existingBooks.some(savedBook => savedBook.id === book.id)) {
      const bookWithImageUrl = {
        ...book,
        imageUrl: volumeInfo.imageLinks?.thumbnail || volumeInfo.imageLinks?.smallThumbnail || 'default_book_thumbnail.jpg'
      };
      existingBooks.push(bookWithImageUrl);
      localStorage.setItem('savedBooks', JSON.stringify(existingBooks));
      setAddedToBookshelf(true);
    }
  };

  return (
    <Card className="h-100 search-card">
      <Row g-2>
        <Col md={4}>
          <Card.Img variant="top" src={thumbnail} alt={`Cover of ${title}`} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>by {authors}</Card.Text>
            <div className="button-container">
              <Button className='more-info' onClick={handleMoreInfoClick}>More Info</Button>{' '}
              <Button className={`add-to ${addedToBookshelf ? 'added-to-bookshelf' : ''}`} onClick={handleAddToBookshelfClick} disabled={addedToBookshelf}>
                {addedToBookshelf ? 'Added to Bookshelf' : 'Add to Bookshelf'}
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
      {showModal && (
        <SearchModal
          show={showModal}
          item={book}
          onClose={() => setShowModal(false)}
        />
      )}
    </Card>
  );
};

SearchCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default SearchCard;
