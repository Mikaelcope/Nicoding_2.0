import React, {useState} from 'react';
import './style.css'
import Navbar from '../../components/Navbar';
import Bookcatagories from '../../components/Cateogories/catagories'
import SearchBar from '../../components/Searchform/SearchBar'; 
import BookSwiper from '../../components/Swiper/BookSwiper';



function Landingpage() {
    const [genre, setGenre] = useState('romance');
  
    const handleGenreChange = (newGenre) => {
      setGenre(newGenre);
    };
  
    return (
      <div className="App">
        <Navbar />
        <div className="flex-container">
          <div className="book-categories"><Bookcatagories onGenreChange={handleGenreChange} /></div>
          <div className="disp-columns">
          <div className="search-display"><SearchBar/></div>
          <div className="book-swiper"><BookSwiper genre={genre} /></div>
          </div>
        </div>
      </div>
    );
  }

  export default Landingpage;