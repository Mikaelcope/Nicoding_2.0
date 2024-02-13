import React, {useState} from 'react';
import './style.css'

function BookshelfPage() {
    // const [genre, setGenre] = useState('romance');
  
    // const handPageChange = (newGenre) => {
    //   setPage(BookshelfPage);
    // };
  
    return (
      <div className="App">
        <div className="container bookshelfdiv">
          <div className="shelf-1"></div>
          <div className="shelf-2"></div>
          <div className="shelf-3"></div>
        </div>
      </div>
    );
  }

  export default BookshelfPage;