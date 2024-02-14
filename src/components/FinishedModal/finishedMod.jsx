import { Modal, Button } from 'react-bootstrap';
import Questionnaire from '../Questions/quistions';


const FinishedMod = ({ show, onClose }) => {
  if (!show) return null;

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Finished!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Questionnaire></Questionnaire>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};



export default FinishedMod;
