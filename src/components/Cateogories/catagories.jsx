import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import './catagories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function Bookcatagories() {
  return (
    <Tab.Container className='catagoriesleft' id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="catagories" className="flex-column">
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="first"><FontAwesomeIcon icon={faHeart} style={{color: "#41b3a3",}} />Romance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="second"><FontAwesomeIcon icon={faRobot} style={{"--fa-primary-color": "#41b3a3", "--fa-secondary-color": "#41b3a3",}} />Fiction</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="second"><FontAwesomeIcon icon="fa-solid fa-radiation" style={{color: "#41b3a3",}} />Action</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="second"><FontAwesomeIcon icon="fa-solid fa-user-astronaut" style={{color: "#41b2b4",}} />Sci-Fi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="second"><FontAwesomeIcon icon="fa-duotone fa-dragon" style={{"--fa-primary-color": "#41b3a3", "--fa-secondary-color": "#41b3a3",}} />Fantasy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="second"><FontAwesomeIcon icon="fa-solid fa-children" style={{color: "#41b3a3",}} />Children</Nav.Link>
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