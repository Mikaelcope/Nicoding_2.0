import {useState} from 'react';
import './style.css'
import Bookcatagories from '../../components/Cateogories/catagories' 
import BookSwiper from '../../components/Swiper/BookSwiper';
import CardOutput from '../../components/CardOutput/CardOutput';
// import SwiperHeading from '../../components/SwiperHeading/SwiperHeading';
import NewYork from '../../components/Newyork/newyork';
import BookFooter from '../../components/Footer/footer';


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
        <div className="search-display"><CardOutput activeSection={activeSection} setActiveSection={setActiveSection} /></div>
         
          <div className="disp-columns">
          {activeSection !== 'searchSection' && (
          <div className="book-categories">
            <Bookcatagories onGenreChange={handleGenreChange} />
          </div>
         )}
            {activeSection === 'swiper' && <div className="book-swiper"><h1>{genre}</h1><BookSwiper genre={genre} /></div>}
            {activeSection === 'NYT' && <div className='nytimes-section'><NewYork /></div>}
          </div>
        </div>
          <div className="footer-section"><BookFooter /></div>
      </div>
    );
  }

  export default Landingpage;
  
