import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBook, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './swipe.css'; 
import { EffectCoverflow, Pagination } from 'swiper/modules';


const BookSwiper = ({ genre }) => {
    const [books, setBooks] = useState([]);
    const [openAccordionId, setOpenAccordionId] = useState(false);

    useEffect(() => {
        // Generate a random index to avoid the same books showing on webpage
        
        // Axios request
        const fetchBooks = async () => {
        const maxStartIndex = 30;
        const randomStartIndex = Math.floor(Math.random() * maxStartIndex);
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&startIndex=${randomStartIndex}&maxResults=${maxStartIndex}`;
          
         // Get the books associated to the genre
          try {
            const response = await axios.get(apiUrl);
            setBooks(response.data.items || []);
            const fetchedBooks = response.data.items || [];
            const booksWithImageUrls = fetchedBooks.map(book => ({
              ...book, 
              imageUrl: book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : 
              `https://books.google.com/books?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`
            }));
            setBooks(booksWithImageUrls);
          } catch (err) {
            console.error("Error getting books", err);
            setBooks([]);
          }
        };
    
        // SetTimeout to delay the fetch operation
        const searchTimeout = setTimeout(fetchBooks, 400);
        return () => clearTimeout(searchTimeout);
      }, [genre]);
      
      // If the ID's are equal close the accordion by setting the setter function to null & vice versa
      // bookId
      const toggleAccordion = (bookId) => {
        setOpenAccordionId(openAccordionId === bookId ? null : bookId);
      };
      
      // Make sure accordian is closed if user navigates to the next slide
      const handleSlideChange = () => {
        setOpenAccordionId(null); 
      };
      
      // Function to add a book to local storage  {/* onClick={() => toggleAccordion(book.id)} */
      const addToLocalStorage = (book, event) => {
        event.stopPropagation();
        const existingBooks = JSON.parse(localStorage.getItem('savedBooks') || '[]');
        if (!existingBooks.some(savedBook => savedBook.id === book.id)) {
          existingBooks.push(book);
          localStorage.setItem('savedBooks', JSON.stringify(existingBooks));
          alert('Book added to your collection!');
        } else {
          alert('This book is already in your collection.');
        }
      };
    
      const selectedBook = books.find(book => book.id === openAccordionId);
    
      return (
        <>

          <div className="swiper-header">
            <h3>JUDGE A BOOK BY ITS COVER <br/>Swipe left & right to find your next read</h3>
           </div>

          <div className="content-wrapper" >
          

            {/* <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              onSlideChange={handleSlideChange}
    
            > */}
             <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
               
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
                >
   
              {books.map((book) => (
              <SwiperSlide key={book.id} className="swiper-slide">
                <div style={{ width: '100%', display: 'flex' }}>
                    <img src={book.imageUrl} alt={book.volumeInfo.title} style={{ width: '100%', display: 'block'}} />
                    <div className="slide-box" style={{ background: 'rgba(0, 0, 0, 0.5)', color: '#fff', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                      <FontAwesomeIcon id="icons" icon={faInfoCircle} onClick={() => toggleAccordion(book.id)} style={{ cursor: 'pointer'}} />
                      <FontAwesomeIcon className="book-icon" id="icons" icon={faBook} onClick={(event) => addToLocalStorage(book, event)} style={{ cursor: 'pointer' }} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
    
            {selectedBook && (
              <div className="accordion-content" style={{ background: '#C38D9E', color: '#fff', overflow: "auto", margin: "auto" }}>
                <p><strong>Title:</strong> {selectedBook.volumeInfo.title}</p>
                <p><strong>Page Count:</strong> {selectedBook.volumeInfo.pageCount}</p>
                <p><strong>Average Rating:</strong> {selectedBook.volumeInfo.averageRating || 'Not rated'}</p>
                <p><strong>Publisher:</strong> {selectedBook.volumeInfo.publisher || 'Unknown'}</p>
                <p><strong>Published Date:</strong> {selectedBook.volumeInfo.publishedDate}</p>
                <p><strong>Description:</strong> {selectedBook.volumeInfo.description || 'No description available.'}</p>
                {selectedBook.volumeInfo.previewLink && (
                  <p><a href={selectedBook.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer"> Preview <FontAwesomeIcon icon={faMagnifyingGlass} /></a></p>
                )}
              </div>
            )}
          </div>
    
        </>
      );
    
    }



export default BookSwiper;
