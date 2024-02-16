import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import './catagories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faChildren } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

function Bookcatagories({ onGenreChange }) {
  const genreMap = {
    romance: 'Romance',
    fiction: 'Fiction',
    action: 'Action',
    scifi: 'Sci-Fi',
    fantasy: 'Inspirational',
    children: 'Children',
    science: 'Science'
  };

  return (
    <Tab.Container className='catagoriesleft' id="left-tabs-example" defaultActiveKey="" onSelect={onGenreChange}>
      <Row>
      <div>
        <h5>Select an Icon to play Book Tinder!</h5>
        </div>
        <Col sm={3}>
          <Nav variant="catagories" className="flex-column" onSelect={(selectedKey) => onGenreChange(genreMap[selectedKey])}>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="Romance"><FontAwesomeIcon icon={faHeart} style={{ color: "#95C8D8"}} className='icondiv' />Romance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="Fiction"><FontAwesomeIcon icon={faRobot} style={{ color: "#95C8D8"}} className='icondiv' />Fiction</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="Action"><FontAwesomeIcon icon={faLocationCrosshairs} style={{ color: "#95C8D8"}} className='icondiv' /> Action</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="Inspirational"><FontAwesomeIcon icon={faArrowUpWideShort} style={{color: "#95C8D8"}} className='icondiv'/>Motivational</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="Fantasy"><FontAwesomeIcon icon={faDragon} style={{ color: "#95C8D8"}} className='icondiv' /> Fantasy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="Children"><FontAwesomeIcon icon={faChildren} style={{ color: "#95C8D8"}} className='icondiv' /> Children</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="Science"><FontAwesomeIcon icon={faFlask} style={{ color: "#95C8D8"}} className='icondiv' /> Science</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
        
          {/* <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content> */}
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Bookcatagories;