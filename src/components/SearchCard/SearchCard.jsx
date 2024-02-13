import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';
import SearchModal from '../SearchModal/SearchModal';
import './SearchCard.css'; 

const SearchCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.smallThumbnail || 'default_book_thumbnail.jpg';
  const title = volumeInfo.title;
  const authors = volumeInfo.authors?.join(', ') || 'Unknown Author';

  const handleMoreInfoClick = () => {
    setShowModal(true); 
  };

  const handleAddToBookshelfClick = () => {
    console.log('Add to Bookshelf clicked for:', title);
  };

  return (
    <Card className="h-100">
      <Row noGutters>
        <Col md={4}>
          <Card.Img variant="top" src={thumbnail} alt={`Cover of ${title}`} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{authors}</Card.Text>
            <div className="button-container">
            <Button className='more-info' onClick={handleMoreInfoClick}>More Info</Button>{' '}
            <Button className='add-to' onClick={handleAddToBookshelfClick}>Add to Bookshelf</Button>
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
