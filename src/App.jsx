
import './App.css'
import Navbar from './components/Navbar/index'
import Bookcatagories from './components/Cateogories/catagories'
import SearchBar from './components/Searchform/SearchBar';
import { useState } from 'react';
import CardResults from './components/CardResults/CardResults';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [bookData, setBookData] = useState([]);

  const searchBooks = (searchTerm) => {
    const apiKey = 'AIzaSyDU7wOeXOzxK1owdR26UBuLPhJ2DnezAco';
    const query = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&key=${apiKey}&maxResults=12`;

    axios.get(query)
      .then(res => setBookData(res.data.items))
      .catch(err => console.error("Error fetching data:", err));
  };

  return (
    <>
      <div>
      <SearchBar onSearch={searchBooks} />
      </div>
      <div>
        <CardResults books={bookData} />
      </div>
      <div>
        <Bookcatagories />
      </div>
    </>
  );
}

export default App
