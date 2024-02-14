
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Navbar from './components/Navbar';
import BookshelfPage from './pages/BookshelfPage';
import Readingchallenge from './pages/Readingchallenge';


function App() {
  return (
    <Router>
      <div>
      <Navbar />
          <Routes> 
            <Route path="/" element={<Landingpage/>} />
            <Route path="/Landingpage" element={<Landingpage/>} />
            <Route exact path="/BookshelfPage" element={<BookshelfPage/>} />
            <Route exact path="/Readingchallenge" element={<Readingchallenge/>} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Landingpage from './pages/Landingpage';
// import Navbar from './components/Navbar';
// import BookshelfPage from './pages/BookshelfPage';
// import Readingchallenge from './pages/Readingchallenge';

// import React, { useState } from 'react';
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';

// function App() {
//   const now = 60;
//   return (
//     <div title="Click me for more information!" style={{ width: '25%', margin: '10px' }}>
//       <h4 className="progress-bar-title">Loading Progress</h4>
//       <h5 className="progress-bar-title-two">You are almost at your monthly goal:</h5>
//       <ProgressBar now={now} label={`${now}%`} className="custom-progress-bar" style={{ margin: '10px' }} />
//       <h5 className="progress-bar-title-two">You are 10 books away from your yearly goal:</h5>
//       <ProgressBar now={now} label={`${now}%`} className="custom-progress-bar" style={{ margin: '10px' }} />
//     </div>
//   );
// }

// export default App;


