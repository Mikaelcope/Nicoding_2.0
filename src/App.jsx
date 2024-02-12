
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';


function App() {
  return (
    <Router>
      <div>
       
          <Routes> 
            <Route path="/" element={<Landingpage/>} />
            <Route path="/Landingpage" element={<Landingpage/>} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;