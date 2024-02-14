import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundPic from '../../assets/bookbackground.png';

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <Container style={{ backgroundImage: `url(${backgroundPic})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'auto', padding: '6.5rem', marginBottom: '1.5rem' }}>
      <h2 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>FIND YOUR NEW FAVOURITE READ</h2>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="text"
            id="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Title or Author"
          />
          <Button variant="primary" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
