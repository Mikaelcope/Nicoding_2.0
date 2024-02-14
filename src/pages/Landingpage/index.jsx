import {useState} from 'react';
import './style.css'
import Bookcatagories from '../../components/Cateogories/catagories' 
import BookSwiper from '../../components/Swiper/BookSwiper';
import CardOutput from '../../components/CardOutput/CardOutput';
// import SwiperHeading from '../../components/SwiperHeading/SwiperHeading';
import NYTimes from '../../components/NYTimes/NYTimes';


function Landingpage() {
    const [genre, setGenre] = useState('');
    const [activeSection, setActiveSection] = useState('NYT');
  
    const handleGenreChange = (newGenre) => {
      setGenre(newGenre);
      setActiveSection ('swiper')
    };
  
    return (
      <div className="App-">
        <div className="flex-container">
          <div className="book-categories"><Bookcatagories onGenreChange={handleGenreChange} /></div>
          <div className="disp-columns">
          <div className="search-display"><CardOutput activeSection={activeSection} setActiveSection={setActiveSection} /></div>
            {activeSection === 'swiper' && <div className="book-swiper"><h1>{genre}</h1><BookSwiper genre={genre} /></div>}
            {activeSection === 'NYT' && <div className='nytimes-section'><NYTimes /></div>}
          </div>
        </div>
      </div>
    );
  }

  export default Landingpage;
  
