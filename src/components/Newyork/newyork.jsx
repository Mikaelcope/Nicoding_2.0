import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Row } from 'react-bootstrap';
import { IoInformationCircleSharp } from "react-icons/io5";
import './NYtimesstyle.css'


const NewYork = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchNYTBooks = async () => {
      const apiKey = 'UMLTA9eNfw0jmv797pLMbKmGROZnAuAU';
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`)
      setBooks(res.data.results.lists[0].books)
      console.log(res.data);

    
    }
    fetchNYTBooks()
  }, [])

  return (
    
    <div className='nytcontainer'>
      <h2>NEW YORK TIMES BEST SELLERS</h2>
      <div className='best-container'>
        {books.map((book, index) => {
          const { url, book_image, publisher, description, title } = book
          
          return (

            <Card className='nytCard' key={index}>
              
              
              <div className="card-section">
                    <img src={book_image} className='book-image' />
              </div>
              
                <div className="button-container">
                
                  <a className="nytURL" href={url}><IoInformationCircleSharp />More Information</a>
                  </div>
                         
            </Card>

          )
        })}
      </div>
    </div>
  )
}

export default NewYork;