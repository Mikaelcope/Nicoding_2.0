import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './Assets/Images/Logo.png';

function Navbar() {
  return (
    <div className='container navbox'>
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/Landingpage" className='navLogo'><img src={Logo} alt="logo" style={{ width: '120px', height: '120px' }}/></Nav.Link>
      </Nav.Item>
      <div className='navdiv'>
      <Nav.Item>
        <Nav.Link href="/BookshelfPage" className='pagebutton' eventKey="link-1" >Bookshelf</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Readingchallenge" className='pagebutton' eventKey="link-2">Reading Goals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Landingpage" className='pagebutton' eventKey="link-2">Search</Nav.Link>
      </Nav.Item>
      </div>
    </Nav>
    </div>
  );
}

export default Navbar;
