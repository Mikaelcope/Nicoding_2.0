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
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faChildren } from '@fortawesome/free-solid-svg-icons';

function Bookcatagories({ onGenreChange }) {
  const genreMap = {
    romance: 'Romance',
    fiction: 'Fiction',
    action: 'Action',
    scifi: 'Sci-Fi',
    fantasy: 'Inspirational',
    children: 'Children',
  };

  return (
    <Tab.Container className='catagoriesleft' id="left-tabs-example" defaultActiveKey="romance" onSelect={onGenreChange}>
      <Row>
        <Col sm={3}>
          <Nav variant="catagories" className="flex-column" onSelect={(selectedKey) => onGenreChange(genreMap[selectedKey])}>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="romance"><FontAwesomeIcon icon={faHeart} style={{ color: "#41b3a3", }} className='icondiv' />Romance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="fiction"><FontAwesomeIcon icon={faRobot} style={{ color: "#41b3a3", }} className='icondiv' />Fiction</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="action"><FontAwesomeIcon icon={faLocationCrosshairs} style={{ color: "#41b3a3", }} className='icondiv' /> Action</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="inspirational"><FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#41b3a3", }} className='icondiv' />Motivational</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="fantasy"><FontAwesomeIcon icon={faDragon} style={{ color: "#41b3a3", }} className='icondiv' /> Fantasy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='catitem' eventKey="children"><FontAwesomeIcon icon={faChildren} style={{ color: "#41b3a3", }} className='icondiv' /> Children</Nav.Link>
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