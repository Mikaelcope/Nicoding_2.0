import PropTypes from 'prop-types';
import SearchCard from '../SearchCard/SearchCard';
import { Container, Row, Col } from 'react-bootstrap';

const CardResults = ({ books }) => {
  return (
    <Container>
      <Row xs={1} sm={1} md={1} lg={2} className="g-4">
        {books.map((book) => (
          <Col key={book.id}>
            <SearchCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

CardResults.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardResults;
