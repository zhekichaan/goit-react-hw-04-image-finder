import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClick }) => {
    return(
        <ImageGalleryList>
            {images.map(image => {
                return <ImageGalleryItem key={image.id} id={image.id} imgUrl={image.webformatURL} onClick={onClick} />
            })}
        </ImageGalleryList>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

