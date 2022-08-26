import { GalleryItemWrapper } from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({id, imgUrl, onClick }) => {
    return (
        <GalleryItemWrapper onClick={() => {onClick(id)}}><img src={imgUrl} alt="" /></GalleryItemWrapper>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}