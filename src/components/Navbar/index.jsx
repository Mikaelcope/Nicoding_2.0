import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './Assets/Images/Logo.png';

function Navbar() {
  return (
    <div className='container'>
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" className='navLogo'><img src={Logo} alt="logo" style={{ width: '150px', height: '150px' }}/></Nav.Link>
      </Nav.Item>
      <div className='navdiv'>
      <Nav.Item>
        <Nav.Link className='pagebutton' eventKey="link-1">Bookshelf</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='pagebutton' eventKey="link-1">Reading Goals</Nav.Link>
      </Nav.Item>
      </div>
    </Nav>
    </div>
  );
}

export default Navbar;