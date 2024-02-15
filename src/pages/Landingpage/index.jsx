import {useState} from 'react';
import './style.css'
import Bookcatagories from '../../components/Cateogories/catagories' 
import BookSwiper from '../../components/Swiper/BookSwiper';
import CardOutput from '../../components/CardOutput/CardOutput';
import SwiperHeading from '../../components/SwiperHeading/SwiperHeading';
import BookFooter from '../../components/Footer/footer';


function Landingpage() {
    const [genre, setGenre] = useState('');
    const [swiper, setSwiper] = useState(false);
  
    const handleGenreChange = (newGenre) => {
      setGenre(newGenre);
      setSwiper(true)
    };
  
    return (
      <div className="App-">
        {/* <Navbar /> */}
        <div className="flex-container">
          <div className="book-categories"><Bookcatagories onGenreChange={handleGenreChange} /></div>
          <div className="disp-columns">
          <div className="search-display"><CardOutput setSwiper={setSwiper} /></div>
          <div className="swiper-heading"><SwiperHeading /></div>
          {swiper &&<div className="book-swiper"><BookSwiper genre={genre} /></div>}
          </div>
        </div>
          <div className="footer-section"><BookFooter /></div>
      </div>
    );
  }

  export default Landingpage;