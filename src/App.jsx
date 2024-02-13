
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