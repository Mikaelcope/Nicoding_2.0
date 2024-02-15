import SearchBar from '../Searchform/SearchBar';
import { useState } from 'react';
import CardResults from '../CardResults/CardResults';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardOutput({activeSection, setActiveSection}) {
  const [bookData, setBookData] = useState([]);
  const searchBooks = (searchTerm) => {
    const apiKey = 'AIzaSyDU7wOeXOzxK1owdR26UBuLPhJ2DnezAco';
    const query = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&key=${apiKey}&maxResults=12`;
    setActiveSection('searchSection')
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
       {activeSection=== 'searchSection' && <CardResults books={bookData} />}
      </div> 
    </>
  );
}
export default CardOutput;