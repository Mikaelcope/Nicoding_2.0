import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Row } from 'react-bootstrap';
import { Card, Row } from 'react-bootstrap';
import './NYtimesstyle.css'


const NewYork = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchNYTBooks = async () => {
      const apiKey = 'ccg427xgVtu5PHEVVF0gKMAVASLGqGIa';
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
        {books.slice(0, 4).map((book, index) => {
          const { amazon_product_url, book_image } = book

          return (

            <Card className='nytCard' key={index}>


              <div className="card-section">
                <img src={book_image} className='book-image' />
              </div>

              <div className="button-container">

                <a className="nytURL" href={amazon_product_url}>Amazon Link</a>
              </div>

            </Card>

          )
        })}
      </div>
    </div>
  )
}



export default NewYork;