import { Modal, Button } from 'react-bootstrap';
import Questionnaire from '../Questions/quistions';
import './finishedMod.css'


const FinishedMod = ({ show, onClose }) => {
  if (!show) return null;

    return (
        <Modal  show={show} onHide={onClose} centered>
            <Modal.Header className='mHeader' closeButton>
                <Modal.Title >Finished!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='mBody'>
                <Questionnaire></Questionnaire>
            </Modal.Body>
            <Modal.Footer className='mFoot'>
                <Button className='mclose' variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};



export default FinishedMod;
