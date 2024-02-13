import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you want to call the onSearch prop with the search term.
    onSearch(search);
  };

  return (
    <Container style={{ backgroundImage: `url('https://i.pinimg.com/564x/91/91/dd/9191ddc29a7e465c3b28e65cb20b8551.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem' }}>
      <h2 style={{ color: 'white' }}>Find your new favourite read</h2>
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
