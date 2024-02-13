import { useState, useEffect } from 'react';
import './bookshelf.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function BookshelfPage() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem('savedBooks');
      if (storedData) {
        setDataArray(JSON.parse(storedData));
      }
      console.log(storedData)
    };

    fetchData();

    // return () => {
    //   // Cleanup function
    // };
  }, []);

  return (
    <div className="App">
      <div className="container bookshelfdiv">
      <h1>My Bookshelf</h1>
        <div className="shelf-1">
        {dataArray.map((item, index) => (
            <div className='shelf-1' key={index}>
              {/* Access specific properties of the object */}
              {/* {item.id}: {item.kind} */}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button variant="primary">Remove</Button>
                  <Button variant="primary">Finished Reading</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
          {/* Function to render first 5 cards from local storage array */}
        </div>
        <div className="shelf-2">
          {/* Function to render following 5 cards from local storage array */}
        </div>
        <div className="shelf-3">
          {/* Function to render following 5 cards from local storage array */}
        </div>
      </div>
    </div>
  );
}

export default BookshelfPage;

// function BookshelfPage() {
//   const [dataArray, setDataArray] = useState([]);

//   useEffect(() => {
//     // Function to fetch data from local storage
//     const fetchData = () => {
//       const storedData = localStorage.getItem('savedBooks');
//       if (storedData) {
//         setDataArray(JSON.parse(storedData));
//       }
//           console.log(storedData)
//     };


//     fetchData(); // Fetch data when component mounts

//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   return (
//     <div>
//       <h1>Data from Local Storage</h1>
//       <ul>
//         {dataArray.map((index, item) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookshelfPage;

// function BookshelfPage() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from local storage when component mounts
//     const storedData = localStorage.getItem('savedBooks');
//     if (storedData) {
//       setData(JSON.parse(storedData));
//     }
//   }, []); // Empty dependency array ensures this effect only runs once on mount

//   return (
//     <div className="App">
//       <h1>Data from Local Storage</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookshelfPage;



// function BookshelfPage() {
  
  // const apiUrl = `https://books.google.com/books?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;
  // const response = await axios.get(apiUrl);
  
  
  
  // // const [genre, setGenre] = useState('romance');
  
  //   // const handPageChange = (newGenre) => {
  //   //   setPage(BookshelfPage);
  //   // };
  
  //   return (
  //     <div className="App">
  //       <div className="container bookshelfdiv">
  //         <div className="shelf-1">
  //           {/* Function to render first 5 cards from local storage array */}
  //         </div>
  //         <div className="shelf-2">
  //           {/* Function to render following 5 cards from local storage array */}
  //         </div>
  //         <div className="shelf-3">
  //           {/* Function to render following 5 cards from local storage array */}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default BookshelfPage;

