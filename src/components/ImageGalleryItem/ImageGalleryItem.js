import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image, openModal }) => (
  <>
    <img
      onClick={() => {
        openModal(image);
      }}
      src={image.webformatURL}
      alt={image.tags}
      className={s.galleryItemImage}
    />
  </>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  openModal: PropTypes.func,
};
export default ImageGalleryItem;
