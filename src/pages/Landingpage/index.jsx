import {useState} from 'react';
import './style.css'
import Bookcatagories from '../../components/Cateogories/catagories' 
import BookSwiper from '../../components/Swiper/BookSwiper';
import CardOutput from '../../components/CardOutput/CardOutput';
import SwiperHeading from '../../components/SwiperHeading/SwiperHeading';



function Landingpage() {
    const [genre, setGenre] = useState('romance');
  
    const handleGenreChange = (newGenre) => {
      setGenre(newGenre);
    };
  
    return (
      <div className="App">
        {/* <Navbar /> */}
        <div className="flex-container">
          <div className="book-categories"><Bookcatagories onGenreChange={handleGenreChange} /></div>
          <div className="disp-columns">
          <div className="search-display"><CardOutput /></div>
          <div className="swiper-heading"><SwiperHeading /></div>
          <div className="book-swiper"><BookSwiper genre={genre} /></div>
          </div>
        </div>
      </div>
    );
  }

  export default Landingpage;