import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={s.imageGallery}>
      {images.map(image => (
        <li className={s.imageGalleryItem} key={image.id}>
          <ImageGalleryItem openModal={onOpenModal} image={image} />
        </li>
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: propTypes.arrayOf(propTypes.shape).isRequired,
  onOpenModal: propTypes.func,
};
