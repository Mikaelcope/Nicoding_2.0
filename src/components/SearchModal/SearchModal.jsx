import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import './SearchModal.css';

const SearchModal = ({ show, item, onClose }) => {
  if (!show) return null;

  const { volumeInfo } = item;
  const thumbnail = volumeInfo.imageLinks?.smallThumbnail;
  const title = volumeInfo.title;
  const authors = volumeInfo.authors?.join(', ');
  const publisher = volumeInfo.publisher;
  const publishedDate = volumeInfo.publishedDate;
  const description = volumeInfo.description;
  const previewLink = volumeInfo.previewLink;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton style={{backgroundColor: "#cca98d"}}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor: "#cca98d"}}>
        <img src={thumbnail} alt={title} className="img-fluid" />
        {authors && <p><strong>Author:</strong> {authors}</p>}
        {publisher && <p><strong>Publisher:</strong> {publisher}</p>}
        {publishedDate && <p><strong>Published:</strong> {publishedDate}</p>}
        {description && <p>{description}</p>}
        {previewLink && 
          <Button variant="primary" href={previewLink} target="_blank" className="search-ebook-btn">
            Go to Ebook
          </Button>
        }
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: "#cca98d"}}>
        <Button variant="secondary" onClick={onClose} className="search-close-btn">Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

SearchModal.propTypes = {
  show: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      publisher: PropTypes.string,
      publishedDate: PropTypes.string,
      description: PropTypes.string,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string
      }),
      previewLink: PropTypes.string
    })
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchModal;
