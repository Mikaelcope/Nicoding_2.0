import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from 'react-bootstrap';
function SearchBar() {
  const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.request(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDU7wOeXOzxK1owdR26UBuLPhJ2DnezAco`)
            .then((response) => {
                console.log(response);
            })
    };
  
    return (
    <>
    <Container style={{ backgroundImage: `url('https://i.pinimg.com/564x/91/91/dd/9191ddc29a7e465c3b28e65cb20b8551.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem', maxHeight: '400vh' }}>
        <h2 style={{color: 'white'}}>Find your new favourite read</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="search-input"></Form.Label>
        <InputGroup>
        <Form.Control
            type="text"
            id="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Title or Author"
        />
        <Button 
          variant="primary" 
          type="submit"
        ><FontAwesomeIcon icon={faSearch} />
        </Button>
        </InputGroup>
        </Form>
    </Container>
    </>
  )
}

export default SearchBar;
